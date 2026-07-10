/* Charizard desktop pet — glides around the viewport, hovers in place,
   lands, walks along the bottom edge, stands or flaps its wings, and takes
   off again. Sprites are used only for what they depict: fly + walk move,
   hover / flap / idle are stationary. Vanilla JS, no dependencies, one rAF
   loop, transforms only. Styles live in assets/pet.css. */
(function () {
  "use strict";

  /* ---------------- tunables ---------------- */
  var SPRITE_FACES_RIGHT = false; // GIFs face LEFT (normalized at export)
  var SPRITES = {
    /* one art scale (~0.58×) across the whole set — same source sheet */
    fly:   { src: "assets/charizard/charizard_fly.gif",   w: 94 }, // gliding (moves)
    hover: { src: "assets/charizard/charizard_hover.gif", w: 84 }, // in-air, in place
    walk:  { src: "assets/charizard/charizard_walk.gif",  w: 93 }, // ground (moves)
    flap:  { src: "assets/charizard/charizard_flap.gif",  w: 92 }, // ground display, in place
    idle:  { src: "assets/charizard/charizard_idle.gif",  w: 90 }  // ground idle, in place
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
  var LS_KEY = "charizard-pet-enabled";

  /* weighted transitions; land* = glide down to the ground line first */
  var TRANSITIONS = {
    fly:  [["fly", 0.25], ["hover", 0.15], ["landWalk", 0.25], ["landIdle", 0.20], ["landFlap", 0.15]],
    walk: [["walk", 0.25], ["idle", 0.30], ["flap", 0.15], ["fly", 0.30]],
    idle: [["walk", 0.40], ["flap", 0.15], ["fly", 0.45]],
    flap: [["walk", 0.30], ["idle", 0.35], ["fly", 0.35]]
  };

  /* ---------------- state ---------------- */
  var pet, img, btn;
  var mode = "idle";           // "fly" | "hover" | "walk" | "flap" | "idle" | "pause"
  var pos = { x: 0, y: 0 };    // top-left of the stage box
  var tgt = { x: 0, y: 0 };
  var landAction = null;       // while flying: "walk" | "flap" | "idle" → landing
  var afterPause = null;       // thunk run when a pause ends
  var waitLeft = 0;            // seconds left in pause/hover/flap/idle
  var airborne = false;
  var facingRight = false;
  var sprite = "";
  var bobT = 0;
  var rafId = 0, lastT = 0;
  var vw = 0, vh = 0, groundY = 0;
  var enabled = true, reduced = false, placed = false;

  /* ---------------- helpers ---------------- */
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

  function setSprite(key) {
    if (sprite === key) return;
    sprite = key;
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
      /* damp the bob on approach to a landing so touchdown is smooth */
      var damp = landAction ? clamp(dist(pos, tgt) / 80, 0, 1) : 1;
      y += Math.sin(bobT * Math.PI * 2 * BOB_HZ) * BOB_AMP * damp;
    }
    pet.style.transform = "translate3d(" + pos.x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
  }

  /* ---------------- state machine ---------------- */
  function beginFly(land) {
    if (!airborne) bobT = 0;  /* take off with the bob at phase 0 — no jump */
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
  function beginHover() {              /* stationary in the air, bobbing */
    mode = "hover"; landAction = null;
    setSprite("hover");
    waitLeft = rand(REST_S[0], REST_S[1]);
  }
  function beginWalk() {               /* walks along the ground line */
    mode = "walk"; airborne = false; landAction = null;
    setSprite("walk");
    pos.y = groundY; tgt.y = groundY;
    var tries = 8;
    do { tgt.x = rand(EDGE_PAD, xTargetMax()); }
    while (--tries > 0 && Math.abs(tgt.x - pos.x) < MIN_LEG);
    setFacing(tgt.x > pos.x);
  }
  function beginFlap() {               /* grounded wing-flap display */
    mode = "flap"; airborne = false; landAction = null;
    setSprite("flap");
    pos.y = groundY;
    waitLeft = rand(REST_S[0], REST_S[1]);
  }
  function beginIdle() {               /* grounded standing idle */
    mode = "idle"; airborne = false; landAction = null;
    setSprite("idle");
    pos.y = groundY;
    waitLeft = rand(REST_S[0], REST_S[1]);
  }
  function startPause(next) {
    mode = "pause";
    afterPause = next;
    waitLeft = rand(PAUSE_S[0], PAUSE_S[1]);
  }

  function beginFor(choice) {          /* map a transition key to its state */
    if (choice === "fly") beginFly(null);
    else if (choice === "walk") beginWalk();
    else if (choice === "flap") beginFlap();
    else beginIdle();
  }
  function arriveFly() {
    if (landAction) {                  /* touchdown */
      var next = landAction;
      airborne = false; landAction = null;
      setSprite("idle");               /* stand during the touchdown pause */
      startPause(function () { beginFor(next); });
      return;
    }
    var choice = pick(TRANSITIONS.fly);
    setSprite("hover");                /* every air pause reads as hovering */
    startPause(
      choice === "hover" ? beginHover :
      choice === "fly" ? function () { beginFly(null); } :
      function () { beginFly(choice.slice(4).toLowerCase()); } /* landWalk → walk … */
    );
  }
  function arriveWalk() {
    var choice = pick(TRANSITIONS.walk);
    setSprite("idle");                 /* stand during the ground pause */
    startPause(function () { beginFor(choice); });
  }
  function endRest(which) {            /* a hover/flap/idle ran its course */
    if (which === "hover") { beginFly(null); return; }
    beginFor(pick(TRANSITIONS[which]));
  }

  function step(dt) {
    if (airborne) bobT += dt;
    if (mode !== "fly" && mode !== "walk") {  /* stationary states */
      waitLeft -= dt;
      if (waitLeft <= 0) {
        if (mode === "pause") { var f = afterPause; afterPause = null; f(); }
        else endRest(mode);
      }
      return;
    }
    var speed = mode === "fly" ? FLY_SPEED : WALK_SPEED;
    var dx = tgt.x - pos.x, dy = tgt.y - pos.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    if (d <= speed * dt) {             /* arrival */
      pos.x = tgt.x; pos.y = tgt.y;
      if (mode === "fly") arriveFly(); else arriveWalk();
      return;
    }
    pos.x += dx / d * speed * dt;
    pos.y += dy / d * speed * dt;
    if (Math.abs(dx) > 0.5) setFacing(dx > 0);
  }

  /* ---------------- loop ---------------- */
  function tick(now) {
    var dt = Math.min((now - lastT) / 1000, 0.1); /* clamp long frames */
    lastT = now;
    step(dt);
    render();
    rafId = requestAnimationFrame(tick);
  }
  function startLoop() {
    if (rafId || document.hidden) return;
    lastT = performance.now();         /* reset the delta clock — no teleport */
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
  function perch() {                   /* reduced motion: static, bottom-right */
    measure();
    mode = "idle"; airborne = false; landAction = null;
    pos.x = Math.max(0, vw - BOX_W - 16);
    pos.y = groundY;
    waitLeft = rand(REST_S[0], REST_S[1]);
    setSprite("idle");
    setFacing(false);                  /* face into the page */
    render();
  }

  /* central gate: decides visible / static / animating from current inputs */
  function applyState() {
    var wide = window.innerWidth >= MIN_WIDTH;
    var show = enabled && wide;
    pet.style.display = show ? "" : "none";
    btn.setAttribute("aria-pressed", String(enabled));
    if (!show) { stopLoop(); return; }
    if (reduced) { stopLoop(); perch(); return; }
    if (!placed) { placed = true; spawn(); }
    startLoop();
  }

  function onResize() {
    measure();
    /* clamp position and any in-flight target into the new viewport */
    pos.x = clamp(pos.x, 0, Math.max(0, vw - BOX_W));
    tgt.x = clamp(tgt.x, EDGE_PAD, xTargetMax());
    if (airborne) {
      pos.y = clamp(pos.y, 0, groundY);
      tgt.y = landAction ? groundY : clamp(tgt.y, Math.min(EDGE_PAD, groundY), groundY);
    } else {
      pos.y = groundY; tgt.y = groundY;
    }
    applyState();
    if (!rafId) render();              /* reflect clamps even while not animating */
  }

  /* ---------------- init ---------------- */
  function init() {
    pet = document.createElement("div");
    pet.id = "pet-charizard";
    pet.setAttribute("aria-hidden", "true");
    pet.style.width = BOX_W + "px";
    pet.style.height = BOX_H + "px";
    pet.style.zIndex = Z_PET;
    img = document.createElement("img");
    img.alt = "";
    img.draggable = false;
    img.decoding = "async";
    pet.appendChild(img);
    document.body.appendChild(pet);

    btn = document.createElement("button");
    btn.id = "pet-toggle";
    btn.type = "button";
    btn.textContent = "🔥";
    btn.setAttribute("aria-label", "Toggle Charizard pet");
    btn.style.zIndex = Z_BTN;
    document.body.appendChild(btn);

    /* preload all sprites so state changes never flash */
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
      else applyState();               /* startLoop resets the delta clock */
    });

    setSprite("idle");
    applyState();
  }

  init();
})();
