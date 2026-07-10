/* Charizard desktop pet — glides, hovers, walks the bottom edge, rests —
   and reacts to you: startles at a fast cursor, nuzzles a lingering one,
   waves hello on first landing, naps when you go idle, breathes fire on
   the Konami code, and sneezes at theme changes (with a persistent
   dark-mode tail glow). All interaction is proximity/listener based —
   the pet itself NEVER intercepts pointer events.
   Vanilla JS, no dependencies, one rAF loop, transforms only.
   Styles live in assets/pet.css. */
(function () {
  "use strict";

  /* ---------------- tunables ---------------- */
  var SPRITE_FACES_RIGHT = false; // GIFs face LEFT (normalized at export)
  var SPRITES = {
    /* movement set */
    fly:     { src: "assets/charizard/charizard_fly.gif",     w: 94 },
    hover:   { src: "assets/charizard/charizard_hover.gif",   w: 84 },
    walk:    { src: "assets/charizard/charizard_walk.gif",    w: 93 },
    flap:    { src: "assets/charizard/charizard_flap.gif",    w: 92 },
    idle:    { src: "assets/charizard/charizard_idle.gif",    w: 90 },
    /* interaction set — same art scale: css width = canvas_w x 0.577 */
    sleep:   { src: "assets/charizard/charizard_sleep.gif",   w: 58 },
    wake:    { src: "assets/charizard/charizard_wake.gif",    w: 59 },
    startle: { src: "assets/charizard/charizard_startle.gif", w: 73 },
    wave:    { src: "assets/charizard/charizard_wave.gif",    w: 72 },
    pet:     { src: "assets/charizard/charizard_pet.gif",     w: 63 },
    fire:    { src: "assets/charizard/charizard_fire.gif",    w: 71 },
    shift:   { src: "assets/charizard/charizard_shift.gif",   w: 70 },
    /* single-frame idle pose — the only sprite allowed under reduced motion */
    still:   { src: "assets/charizard/charizard_still.gif",   w: 90 }
  };
  var BOX_W = 96, BOX_H = 84;    // stage box; sprites bottom-anchored inside
  var FLY_SPEED  = 110;          // px/s
  var WALK_SPEED = 45;           // px/s
  var BOB_AMP = 6;               // px — vertical bob while airborne
  var BOB_HZ  = 0.9;             // bob cycles per second
  var EDGE_PAD    = 60;          // min distance of targets from viewport edges
  var GROUND_PAD  = 12;          // gap between feet and viewport bottom
  var MIN_LEG     = 90;          // min length of a movement segment, px
  var MIN_LAND_DX = 160;         // min horizontal run-in for a landing glide, px
  var MIN_WIDTH   = 700;         // no pet below this viewport width
  var REST_S  = [2, 6];          // duration of hover / flap / idle states, seconds
  var PAUSE_S = [0.3, 1.2];      // short pause between segments, seconds
  var Z_PET = 999, Z_BTN = 1000; // site CSS uses no z-index; these sit on top

  /* interaction tunables */
  var STARTLE_RADIUS = 120;      // px — detection radius around pet center
  var STARTLE_SPEED  = 900;      // px/s — cursor speed that counts as "fast"
  var STARTLE_COOLDOWN = 6;      // s between startles
  var PET_RADIUS   = 70;         // px — cursor linger distance to start petting
  var PET_KEEP     = 100;        // px — stays in pet state within this distance
  var PET_LINGER_S = 1.0;        // s of slow lingering before petting starts
  var PET_COOLDOWN = 4;          // s after a pet session
  var SLEEP_AFTER_S = 60;        // s of user inactivity before napping
  var ONESHOT_S = { startle: 0.32, wake: 0.45, wave: 0.86, fire: 1.16, shift: 0.66 };
  var KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown",
                "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  var MAX_PARTICLES = 40;
  var LS_KEY = "charizard-pet-enabled";

  /* weighted transitions; land* = glide down to the ground line first */
  var TRANSITIONS = {
    fly:  [["fly", 0.25], ["hover", 0.15], ["landWalk", 0.25], ["landIdle", 0.20], ["landFlap", 0.15]],
    walk: [["walk", 0.25], ["idle", 0.30], ["flap", 0.15], ["fly", 0.30]],
    idle: [["walk", 0.40], ["flap", 0.15], ["fly", 0.45]],
    flap: [["walk", 0.30], ["idle", 0.35], ["fly", 0.35]]
  };

  /* ---------------- state ---------------- */
  var pet, img, btn, fx;
  var mode = "idle";           /* fly|hover|walk|flap|idle|pause|sleep|wake|
                                  startle|wave|pet|fire|shift */
  var pos = { x: 0, y: 0 };
  var tgt = { x: 0, y: 0 };
  var landAction = null;       // "walk"|"flap"|"idle"|"fire" → landing
  var afterPause = null;
  var waitLeft = 0;
  var airborne = false;
  var facingRight = false;
  var sprite = "";
  var bobT = 0;
  var rafId = 0, lastT = 0;
  var vw = 0, vh = 0, groundY = 0;
  var enabled = true, reduced = false, placed = false;

  /* interaction state */
  var cursor = { x: -9999, y: -9999, v: 0, at: -1e9 };
  var lastActivity = 0;        // performance.now() ms of last user input
  var startleReadyAt = 0, petReadyAt = 0, petLinger = 0;
  var sleepEnteredAt = 0, zTimer = 0, waveHalfDone = false;
  var greeted = false;
  var konamiBuf = [];
  var dark = false;
  var particles = [];

  /* ---------------- helpers ---------------- */
  function nowMs() { return performance.now(); }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp(v, lo, hi) { return hi < lo ? (lo + hi) / 2 : Math.min(hi, Math.max(lo, v)); }
  function dist(a, b) { var dx = b.x - a.x, dy = b.y - a.y; return Math.sqrt(dx * dx + dy * dy); }
  function pick(table) {
    var r = Math.random(), acc = 0;
    for (var i = 0; i < table.length; i++) { acc += table[i][1]; if (r < acc) return table[i][0]; }
    return table[table.length - 1][0];
  }
  function measure() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    groundY = vh - BOX_H - GROUND_PAD;
  }
  function xTargetMax() { return Math.max(EDGE_PAD, vw - BOX_W - EDGE_PAD); }
  function centerX() { return pos.x + BOX_W / 2; }
  function centerY() { return pos.y + BOX_H / 2; }
  function cursorDist() {
    var dx = cursor.x - centerX(), dy = cursor.y - centerY();
    return Math.sqrt(dx * dx + dy * dy);
  }
  function cursorSpeed() { return (nowMs() - cursor.at > 250) ? 0 : cursor.v; }
  function interactive() { return rafId !== 0 && !reduced; }

  function setSprite(key, restart) {
    if (sprite === key && !restart) return;
    sprite = key;
    if (restart) img.src = "";      /* force the GIF to restart at frame 0 */
    img.src = SPRITES[key].src;
    img.style.width = SPRITES[key].w + "px";
  }
  function setFacing(right) {
    facingRight = right;
    img.style.transform = right === SPRITE_FACES_RIGHT ? "scaleX(1)" : "scaleX(-1)";
  }
  function render() {
    var y = pos.y;
    if (airborne) {
      var damp = landAction ? clamp(dist(pos, tgt) / 80, 0, 1) : 1;
      y += Math.sin(bobT * Math.PI * 2 * BOB_HZ) * BOB_AMP * damp;
    }
    pet.style.transform = "translate3d(" + pos.x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
  }

  /* ---------------- particles (lifecycle owned by the rAF loop) ---------------- */
  function spawnBurst(kind, count) {
    if (!interactive() || !fx) return;
    for (var i = 0; i < count && particles.length < MAX_PARTICLES; i++) {
      var s = document.createElement("span");
      s.className = "fx fx-" + kind;
      s.textContent = kind === "heart" ? "♥" : "z";
      var dur = rand(0.9, 1.6);
      s.style.left = Math.round(centerX() + rand(-26, 26)) + "px";
      s.style.top = Math.round(pos.y + rand(-6, 14)) + "px";
      s.style.animationDuration = dur.toFixed(2) + "s";
      s.style.fontSize = Math.round(kind === "heart" ? rand(10, 15) : rand(9, 13)) + "px";
      fx.appendChild(s);
      particles.push({ el: s, dieAt: nowMs() + dur * 1000 });
    }
  }
  function sweepParticles() {
    var t = nowMs();
    while (particles.length && particles[0].dieAt <= t) {
      var p = particles.shift();
      if (p.el && p.el.parentNode) p.el.parentNode.removeChild(p.el);
    }
  }
  function clearParticles() {
    while (particles.length) {
      var p = particles.shift();
      if (p.el && p.el.parentNode) p.el.parentNode.removeChild(p.el);
    }
  }

  /* ---------------- movement state machine ---------------- */
  function beginFly(land) {
    if (!airborne) bobT = 0;
    mode = "fly"; airborne = true; landAction = land;
    setSprite("fly");
    var tries = 8;
    do {
      tgt.x = rand(EDGE_PAD, xTargetMax());
      tgt.y = land ? groundY : rand(Math.min(EDGE_PAD, groundY), groundY);
    } while (--tries > 0 && (dist(pos, tgt) < MIN_LEG ||
             (land && Math.abs(tgt.x - pos.x) < MIN_LAND_DX)));
    setFacing(tgt.x > pos.x);
  }
  function fleeFly() {           /* startled takeoff, away from the cursor */
    beginFly(null);
    var away = cursor.x > centerX()
      ? rand(EDGE_PAD, Math.max(EDGE_PAD + 1, pos.x - 260))
      : rand(Math.min(pos.x + 260, xTargetMax() - 1), xTargetMax());
    tgt.x = clamp(away, EDGE_PAD, xTargetMax());
    tgt.y = rand(Math.min(EDGE_PAD, groundY), Math.max(Math.min(EDGE_PAD, groundY), groundY - 120));
    setFacing(tgt.x > pos.x);
  }
  function beginHover() {
    mode = "hover"; landAction = null;
    setSprite("hover");
    waitLeft = rand(REST_S[0], REST_S[1]);
  }
  function beginWalk() {
    mode = "walk"; airborne = false; landAction = null;
    setSprite("walk");
    pos.y = groundY; tgt.y = groundY;
    var tries = 8;
    do { tgt.x = rand(EDGE_PAD, xTargetMax()); }
    while (--tries > 0 && Math.abs(tgt.x - pos.x) < MIN_LEG);
    setFacing(tgt.x > pos.x);
  }
  function beginFlap() { beginRest("flap"); }
  function beginIdle() { beginRest("idle"); }
  function beginRest(key) {
    mode = key; airborne = false; landAction = null;
    setSprite(key);
    pos.y = groundY;
    waitLeft = rand(REST_S[0], REST_S[1]);
  }
  function startPause(next) {
    mode = "pause";
    afterPause = next;
    waitLeft = rand(PAUSE_S[0], PAUSE_S[1]);
  }

  /* ---------------- interaction states (grounded, stationary) ---------------- */
  function beginOneshot(key) {   /* startle | wake | wave | fire | shift */
    mode = key; airborne = false; landAction = null;
    setSprite(key, true);
    pos.y = groundY;
    waitLeft = ONESHOT_S[key];
  }
  function beginStartle() {
    beginOneshot("startle");
    startleReadyAt = nowMs() + STARTLE_COOLDOWN * 1000;
  }
  function beginWave() {
    greeted = true; waveHalfDone = false;
    beginOneshot("wave");
    spawnBurst("heart", 5);
  }
  function beginFire() { beginOneshot("fire"); }
  function beginShift() { beginOneshot("shift"); }
  function beginWake() { beginOneshot("wake"); }
  function beginPet() {
    mode = "pet"; airborne = false; landAction = null;
    setSprite("pet", true);
    pos.y = groundY;
    waitLeft = 0.5;
    spawnBurst("heart", 7);
  }
  function beginSleep() {
    mode = "sleep"; airborne = false; landAction = null;
    setSprite("sleep");
    pos.y = groundY;
    sleepEnteredAt = nowMs();
    zTimer = 1.2;
  }
  var ONESHOT_NEXT = {
    startle: fleeFly,
    wake: beginIdle,
    wave: beginIdle,
    fire: beginIdle,
    shift: beginIdle
  };

  function beginFor(choice) {
    if (choice === "fly") beginFly(null);
    else if (choice === "walk") beginWalk();
    else if (choice === "flap") beginFlap();
    else if (choice === "fire") beginFire();
    else beginIdle();
  }
  function arriveFly() {
    if (landAction) {
      var next = landAction;
      airborne = false; landAction = null;
      setSprite("idle");
      startPause(function () {
        /* first touchdown: say hi — but never swallow a queued fire-breath
           (greeted stays false, so the wave plays on the next landing) */
        if (!greeted && next !== "fire") beginWave();
        else beginFor(next);
      });
      return;
    }
    var choice = pick(TRANSITIONS.fly);
    setSprite("hover");
    startPause(
      choice === "hover" ? beginHover :
      choice === "fly" ? function () { beginFly(null); } :
      function () { beginFly(choice.slice(4).toLowerCase()); }
    );
  }
  function arriveWalk() {
    var choice = pick(TRANSITIONS.walk);
    setSprite("idle");
    startPause(function () { beginFor(choice); });
  }
  function endRest(which) {
    if (which === "hover") { beginFly(null); return; }
    beginFor(pick(TRANSITIONS[which]));
  }

  /* ---------------- per-frame interaction checks ---------------- */
  function checkInteractions(dt) {
    if (!interactive()) return;
    var t = nowMs();
    var d = cursorDist(), v = cursorSpeed();

    /* startle: fast cursor breaking the detection radius */
    if ((mode === "idle" || mode === "flap" || mode === "walk" || mode === "sleep") &&
        d < STARTLE_RADIUS && v > STARTLE_SPEED && t >= startleReadyAt) {
      beginStartle();
      return;
    }
    /* contentment: slow cursor lingering close */
    if (mode === "idle" || mode === "flap") {
      if (d < PET_RADIUS && v < 60 && t >= petReadyAt) petLinger += dt;
      else petLinger = 0;
      if (petLinger >= PET_LINGER_S) { petLinger = 0; beginPet(); return; }
    } else if (mode !== "pet") {
      petLinger = 0;
    }
    /* nap when the user has been away for a while */
    if ((mode === "idle" || mode === "flap") && t - lastActivity > SLEEP_AFTER_S * 1000) {
      beginSleep();
      return;
    }
    /* wake on any activity since falling asleep */
    if (mode === "sleep" && lastActivity > sleepEnteredAt) {
      beginWake();
    }
  }

  function step(dt) {
    if (airborne) bobT += dt;
    sweepParticles();
    checkInteractions(dt);

    if (mode === "fly" || mode === "walk") {
      var speed = mode === "fly" ? FLY_SPEED : WALK_SPEED;
      var dx = tgt.x - pos.x, dy = tgt.y - pos.y;
      var d = Math.sqrt(dx * dx + dy * dy);
      if (d <= speed * dt) {
        pos.x = tgt.x; pos.y = tgt.y;
        if (mode === "fly") arriveFly(); else arriveWalk();
        return;
      }
      pos.x += dx / d * speed * dt;
      pos.y += dy / d * speed * dt;
      if (Math.abs(dx) > 0.5) setFacing(dx > 0);
      return;
    }

    if (mode === "sleep") {           /* indefinite: ends via wake check */
      zTimer -= dt;
      if (zTimer <= 0) { zTimer = 2.6; spawnBurst("z", 1); }
      return;
    }
    if (mode === "pet") {             /* proximity-driven */
      if (cursorDist() < PET_KEEP && cursorSpeed() < 250) waitLeft = 0.4;
      else waitLeft -= dt;
      if (waitLeft <= 0) {
        petReadyAt = nowMs() + PET_COOLDOWN * 1000;
        beginIdle();
      }
      return;
    }
    /* timed stationary states */
    waitLeft -= dt;
    if (mode === "wave" && !waveHalfDone && waitLeft < ONESHOT_S.wave / 2) {
      waveHalfDone = true;
      spawnBurst("heart", 5);
    }
    if (waitLeft <= 0) {
      if (mode === "pause") { var f = afterPause; afterPause = null; f(); }
      else if (ONESHOT_NEXT[mode]) ONESHOT_NEXT[mode]();
      else endRest(mode);             /* hover | flap | idle */
    }
  }

  /* ---------------- loop ---------------- */
  function tick(now) {
    var dt = Math.min((now - lastT) / 1000, 0.1);
    lastT = now;
    step(dt);
    render();
    rafId = requestAnimationFrame(tick);
  }
  function startLoop() {
    if (rafId || document.hidden) return;
    lastT = performance.now();
    rafId = requestAnimationFrame(tick);
  }
  function stopLoop() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
  }

  /* ---------------- placement ---------------- */
  function spawn() {
    measure();
    pos.x = rand(EDGE_PAD, xTargetMax());
    pos.y = rand(Math.min(EDGE_PAD, groundY), groundY);
    beginFly(null);
    render();
  }
  function perch() {
    measure();
    mode = "idle"; airborne = false; landAction = null;
    pos.x = Math.max(0, vw - BOX_W - 16);
    pos.y = groundY;
    waitLeft = rand(REST_S[0], REST_S[1]);
    setSprite("still");   /* static frame: a looping GIF would defeat reduced motion */
    setFacing(false);
    render();
  }

  function applyState() {
    var wide = window.innerWidth >= MIN_WIDTH;
    var show = enabled && wide;
    pet.style.display = show ? "" : "none";
    btn.setAttribute("aria-pressed", String(enabled));
    if (!show) { stopLoop(); clearParticles(); return; }
    if (reduced) { stopLoop(); clearParticles(); perch(); return; }
    if (!placed) { placed = true; spawn(); }
    startLoop();
  }

  function onResize() {
    measure();
    pos.x = clamp(pos.x, 0, Math.max(0, vw - BOX_W));
    tgt.x = clamp(tgt.x, EDGE_PAD, xTargetMax());
    if (airborne) {
      pos.y = clamp(pos.y, 0, groundY);
      tgt.y = landAction ? groundY : clamp(tgt.y, Math.min(EDGE_PAD, groundY), groundY);
    } else {
      pos.y = groundY; tgt.y = groundY;
    }
    applyState();
    if (!rafId) render();
  }

  /* ---------------- theme awareness ---------------- */
  function isDark() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t === "dark";
    return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  function themeChanged() {
    var d = isDark();
    if (d === dark) return;
    dark = d;
    pet.className = dark ? "dark" : "";       /* persistent glow + palette shift */
    if (interactive() &&
        (mode === "idle" || mode === "flap" || mode === "walk")) {
      beginShift();                            /* flinch + sneeze animation */
    }
  }

  /* ---------------- input ---------------- */
  function markActivity() { lastActivity = nowMs(); }
  function onMouseMove(e) {
    var t = nowMs();
    var ddt = Math.max(8, t - cursor.at);
    if (cursor.at > -1e8) {
      var dx = e.clientX - cursor.x, dy = e.clientY - cursor.y;
      var v = Math.sqrt(dx * dx + dy * dy) / (ddt / 1000);
      cursor.v = cursor.v * 0.6 + v * 0.4;
    }
    cursor.x = e.clientX; cursor.y = e.clientY; cursor.at = t;
    markActivity();
  }
  function onKeyDown(e) {
    markActivity();
    var k = e.key;
    if (typeof k !== "string") return;
    /* rolling last-N-keys buffer: robust to repeated prefixes (↑↑↑↓↓…) */
    konamiBuf.push(k.length === 1 ? k.toLowerCase() : k);
    if (konamiBuf.length > KONAMI.length) konamiBuf.shift();
    if (konamiBuf.length === KONAMI.length) {
      for (var i = 0; i < KONAMI.length; i++)
        if (konamiBuf[i] !== KONAMI[i]) return;
      konamiBuf.length = 0;
      if (!interactive()) return;
      if (mode === "fly") { landAction = "fire"; tgt.y = groundY; }
      else if (mode === "hover") beginFly("fire");
      else if (mode === "pause")
        /* an airborne pause must glide down first — never snap to the ground */
        afterPause = airborne ? function () { beginFly("fire"); } : beginFire;
      else beginFire();
    }
  }

  /* ---------------- init ---------------- */
  function init() {
    pet = document.createElement("div");
    pet.id = "pet-charizard";
    pet.setAttribute("aria-hidden", "true");
    pet.style.width = BOX_W + "px";
    pet.style.height = BOX_H + "px";
    pet.style.zIndex = Z_PET;
    var glow = document.createElement("div");
    glow.className = "glow";
    pet.appendChild(glow);
    img = document.createElement("img");
    img.alt = "";
    img.draggable = false;
    img.decoding = "async";
    pet.appendChild(img);
    document.body.appendChild(pet);

    fx = document.createElement("div");
    fx.id = "pet-fx";
    fx.setAttribute("aria-hidden", "true");
    document.body.appendChild(fx);

    btn = document.createElement("button");
    btn.id = "pet-toggle";
    btn.type = "button";
    btn.textContent = "🔥";
    btn.setAttribute("aria-label", "Toggle Charizard pet");
    btn.style.zIndex = Z_BTN;
    document.body.appendChild(btn);

    Object.keys(SPRITES).forEach(function (k) { (new Image()).src = SPRITES[k].src; });

    try {
      var v = localStorage.getItem(LS_KEY);
      enabled = v === null ? true : v === "true";
    } catch (e) { enabled = true; }

    var mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced = mqReduce.matches;
    var onMq = function (e) { reduced = e.matches; applyState(); };
    if (mqReduce.addEventListener) mqReduce.addEventListener("change", onMq);
    else if (mqReduce.addListener) mqReduce.addListener(onMq);

    btn.addEventListener("click", function () {
      enabled = !enabled;
      try { localStorage.setItem(LS_KEY, String(enabled)); } catch (e) {}
      applyState();
    });

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopLoop();
      else { markActivity(); applyState(); }
    });

    /* interaction listeners — all global, none on the pet */
    lastActivity = nowMs();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", markActivity, { passive: true });
    window.addEventListener("scroll", markActivity, { passive: true });
    window.addEventListener("pointerdown", markActivity, { passive: true });

    /* theme: site toggle sets data-theme on <html>; system pref may change too */
    dark = isDark();
    pet.className = dark ? "dark" : "";
    if (typeof MutationObserver !== "undefined") {
      new MutationObserver(themeChanged).observe(document.documentElement,
        { attributes: true, attributeFilter: ["data-theme"] });
    }
    var mqDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (mqDark.addEventListener) mqDark.addEventListener("change", themeChanged);
    else if (mqDark.addListener) mqDark.addListener(themeChanged);

    setSprite("idle");
    applyState();
  }

  init();
})();
