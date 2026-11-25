---
name: Timebase
description: A short instrument record with its detail one click away — every claim placed as a measured event, on pages whose only fixed line is the dragon's ground.
colors:
  field: "#edf1f3"
  surface: "#f8fafb"
  surface-2: "#e2e8ec"
  ink: "#101a20"
  ink-soft: "#3a4a54"
  ink-faint: "#566772"
  line: "#d2dade"
  line-2: "#b9c4ca"
  line-strong: "#74838e"
  sig: "#0a6f80"
  sig-2: "#063f4a"
  signal: "#b3186b"
  accent: "#a04708"
  sel: "rgba(10,111,128,.18)"
  print-field: "#ffffff"
  print-surface-2: "#f2f2f2"
  print-ink: "#000000"
  print-ink-soft: "#333333"
  print-ink-faint: "#555555"
  print-line: "#cccccc"
  print-line-2: "#bbbbbb"
  print-line-strong: "#888888"
  print-sig: "#0a5563"
  print-url: "#444444"
typography:
  display:
    fontFamily: "Archivo, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(56px, 7.2vw, 90px)"
    fontWeight: 640
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "wdth 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 640
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "wdth 118"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontVariation: "wdth 100"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
    fontVariation: "wdth 112"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
    fontVariation: "wdth 100"
  secondary:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    letterSpacing: "0.02em"
    fontFeature: "tabular-nums"
  tick:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.02em"
rounded:
  square: "0"
  focus-plate: "2px"
  key: "7px"
spacing:
  tick: "9px"
  unit: "18px"
  step: "27px"
  band: "45px"
  section: "54px"
  major: "72px"
  lane: "150px"
components:
  key:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    padding: "0 22px"
    height: "44px"
  key-hover:
    textColor: "{colors.sig}"
  key-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field}"
    rounded: "{rounded.key}"
    padding: "0 22px"
    height: "44px"
  key-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.field}"
  theme-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.key}"
    padding: "0 11px"
    height: "30px"
  theme-button-hover:
    textColor: "{colors.sig}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.sig}"
    typography: "{typography.data}"
    rounded: "{rounded.square}"
    padding: "2px 9px"
    height: "24px"
  strip-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
  readout-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "4px 12px"
  plate-group:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  marker-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.square}"
    padding: "13px 18px"
---

# Design System: Timebase

Recorded from the shipped artifact (`index.html`, `work.html`, `publications.html` and `site.css`), not from the brief. Where the direction and the build diverge, the build is written down and the divergence is noted. That rule is the file's own, and it survives this rewrite.

The frontmatter above is normative and carries the **light** value of each token — light is the primary theme and gets the rigor. Dark values cannot live in the frontmatter schema, so the token table in **Colors** carries both; it is the one place a value appears twice, and the pairs must be kept in sync.

## Overview

**Creative North Star: "Timebase"**

The home page is a short instrument record, and `work.html` and `publications.html` are the same record read closer. Every claim is placed on it as a measured event — value, unit, scope, date, venue, author position, status — so nothing is asserted without its measurement beside it. The reader is not being sold to; they are reading a trace off a panel.

The owned idea is one line: **a signal at rest is a straight line at the bottom of the frame**, and that line is simultaneously the page's structural baseline and the dragon's ground. The Charizard walks the design instead of standing in front of it. The hero name sits *on* a rule that steps high at its right end; the bottom lane of the viewport is kept empty on purpose; at wide widths the right margin is *declared* with a hairline rather than left as slack.

The previous build painted a fixed graticule field behind everything. **The owner removed it.** `body::before` and the four `--grat` data URIs are gone, and with them the `grid-minor` / `grid-major` colors, which were never custom properties — they were literal strokes inside those URIs. The 9px module and the ground line stayed. The world lost its wallpaper and kept its geometry, and it reads quieter for it.

One device, repeated, is the handwriting: **the measurement strip / readout cell / leader tick family** appears on `work.html`: in the KPST and ICLab entries, on four project rows and once in DocsHunt. Density is deliberately uneven — Publications is the dense passage, Toolkit and Recognition are the reader's breath — because a real record is not uniformly interesting, and two places break the grammar on purpose with no caption.

**Key Characteristics:**

- No background field, no wallpaper, no texture: `--field` is bare, and the only fixed painted mark on the page is the 2px ground line at `bottom: 12px`.
- One committed channel color (CH1 teal-cyan) carries traces, axis, links, cursors, chips and focus; `--sig-2` is a darker/lighter *step of the same channel*, not a second hue.
- Orange is withheld from the entire page. It means only "Charizard is here."
- Zero shadows. Depth is tint steps and rule weights.
- Status is coded by dash pattern before it is coded by color.
- A width axis, not a second font family, is the voice.
- Nothing is fixed or sticky at the bottom of the viewport, ever.

## Colors

A paper-pale instrument panel with one saturated channel; dark is the same instrument with its backlight turned down.

### Token table

Every custom property on `:root`, both themes, with its role. **RENAME-FORBIDDEN** marks the six tokens `assets/pet.css` reads by name — their values may be retuned, their names may never change (PRODUCT.md Brand Commitments, clause 4).

| Token | Light | Dark | Role |
|---|---|---|---|
| `--field` | `#edf1f3` | `#141c22` | Page ground: instrument paper, never pure white. Also the text color inside inverted keys, the focus inner ring, and the skip link's text. |
| `--surface` | `#f8fafb` | `#1c262e` | **RENAME-FORBIDDEN.** Strip cells, readout cells, plate groups, marker rows, the contact bar, ghost keys, the theme button, the targeted record row, and the pet toggle's ground. |
| `--surface-2` | `#e2e8ec` | `#232f38` | The third tint step. **Declared in all four `:root` blocks and in the print override, and currently spent on nothing.** It is kept as the ladder's top rung for a future surface; it is not a rule that anything must use it. |
| `--ink` | `#101a20` | `#e7eef2` | Display, section headings, titles, emphasized values, marker names, the identity line, and the primary key's ground. |
| `--ink-soft` | `#3a4a54` | `#a8b8c2` | Body prose, descriptions, dates, venues, authors, statuses, contribution clauses, nav at rest, group headings, the pet toggle's resting edge (site-side override), scrollbar thumb on hover. |
| `--ink-faint` | `#566772` | `#8ba0ad` | **RENAME-FORBIDDEN.** Axis ticks (`.t0` / `.t1`) — *and nothing else on the page*. Also the pet's sleep z's. |
| `--line` | `#d2dade` | `#2b3944` | **RENAME-FORBIDDEN.** Decorative hairlines only: the header's bottom rule, section top rules, work-entry and track rules, the declared lane rule at ≥1200px. Also the pet toggle's resting edge in `pet.css`. |
| `--line-2` | `#b9c4ca` | `#3b4c58` | **Structural hairlines.** Record-row dividers, ledger-row dividers, marker rows, and the ground behind `gap: 1px` inside the strip and the plate. Introduced so `--line` could keep its pet-facing job while structural divisions got a heavier, legible step. |
| `--line-strong` | `#74838e` | `#6b7f8d` | **RENAME-FORBIDDEN.** Every control and container edge, the axis gutter's right border, the ground line, leader-tick horizontals, the dotted marker leader, the scrollbar thumb. Also the pet toggle's chrome. |
| `--sig` | `#0a6f80` | `#5fd0e6` | **CH1, the committed channel.** The hero trace and step, axis brackets, every link, chip borders and text, artifact-link underlines, tick marks, the primary key's under-edge, the measurement cursors, the focus ring, `caret-color` and `accent-color`. |
| `--sig-2` | `#063f4a` | `#a5e8f5` | **A darker (light) / lighter (dark) step of CH1.** Link, chip, nav and artifact-link hover only. It was blue-violet in the previous build; it is no longer a second hue, and it must not become one again. |
| `--signal` | `#b3186b` | `#ff8fc4` | **RENAME-FORBIDDEN. The pet's hearts.** Declared for `pet.css` and used nowhere on the page. |
| `--accent` | `#a04708` | `#ffab5c` | **RENAME-FORBIDDEN.** The only warm value in the system. Colors the pet's startle "!" and its toggle focus ring. Used nowhere on the page. |
| `--sel` | `rgba(10,111,128,.18)` | `rgba(95,208,230,.24)` | `::selection` ground. Text color is left inherited so selected text stays `--ink`. |
| `--maxw` | `1180px` | — | Sheet width. |
| `--gutter` | `132px` | — | Axis-gutter column width. *Divergence: the plan banked a 132 → 108 reduction; the build ships 132 and takes its horizontal room from deleting the hero's rail instead.* |

There is no `--grat` and no graticule layer. The paper palette for print is a fifth override block, not a token set: `@media print` rewrites `--field`, `--surface`, `--surface-2`, `--ink`, `--ink-soft`, `--ink-faint`, `--line`, `--line-2`, `--line-strong`, `--sig` and `--sig-2` for **both** themes at once, and collapses `--sig-2` onto `--sig` so hover ink cannot print as a second value.

### Named Rules

**The Withheld Orange Rule.** Orange appears nowhere on the page. `--accent` is declared, contrast-checked, and spent entirely on the dragon's startle mark and his toggle's focus ring. The moment a warm value shows up in site chrome, the pet stops being the highest-contrast event on the screen and the palette loses its point.

**The One Channel Rule.** CH1 (`--sig`) carries every signal-bearing mark. `--sig-2` is the same channel one step darker or lighter, and it is hover only. `--signal` is the pet's. **A second hue is not available** — if something needs to stand out it gets a rule weight or a tint step, never a new angle on the wheel.

**The Faint-Is-Metadata Rule.** `--ink-faint` is reserved for the axis ticks. A date, venue, author, or status is content and lives at `--ink-soft` or `--ink`. Demoting a fact to faint is how a record stops being readable.

**The Two-Hairline Rule.** `--line` is decoration (section rules, the header rule, the lane rule) and belongs to `pet.css` as well; `--line-2` is structure (row dividers, cell gaps inside a bordered container). Do not swap them, and never delete `--line` to "simplify" — the toggle reads it.

## Typography

**Display / Body Font:** Archivo Variable (`wdth 62..125, wght 100..900`), with `"Archivo Fallback"`, Helvetica Neue, Arial.
**Data Font:** IBM Plex Mono (400, 500), with ui-monospace, Consolas.

**Character:** One family, two widths. A real instrument writes the same letterforms wide-engraved on the panel and narrow in the manual, so the voice is a *width axis*, not a second family. Headings are pushed wide (112–125%) and set tight (−0.02em); body sits at normal width on a 1.62 lead. One variable file, one request.

### The ramp

`html { font-size: 100% }` and every size but one is a `rem`, so the ramp scales with a reader's preference. **Eight rendered sizes make the ramp** (the three-page build sets four more outside it; see the divergence under the table):

| Role | Size | Where |
|---|---|---|
| Display | `clamp(56px, 7.2vw, 90px)` | the hero name, once |
| Headline | `1.45rem` | every section `h2` |
| Lead | `clamp(1.2rem, 2vw, 1.5rem)` | the hero thesis, once |
| Title | `1.15rem` | full publication titles on `publications.html` |
| Body | `1.0625rem` | default; also the wordmark, ledger `h3`, and the project `h4` that opens a block on `work.html` |
| Secondary | `0.9375rem` | contribution clauses, author lists, descriptions, findings, plate items, marker names, ledger prose, key labels |
| Label | `0.8125rem` | nav, annotations, strip labels, statuses, venues, years, colophon, Details keys |
| Tick | `0.75rem` | axis ticks, chips, notes |

*Divergence: four sizes sit outside the ramp — the detail pages' `.page-head h1` at `clamp(1.9rem, 4vw, 2.5rem)`; in a `work.html` entry head, the workplace `h3` at `1.3rem` with its role and dates at `0.875rem`; and the home page's brief publication titles at `1rem`.*

**The display size is the one exception and it is deliberate.** `.hero h1` is `clamp(56px, 7.2vw, 90px)` in **px, never rem**, because a 24px browser default would otherwise wrap the name into the perch. PRODUCT.md clause 14 makes this testable.

Weights: 640 for headings on the width axis, 600 for emphasis and control labels, 500 for mono and labels, 400 for prose. Widths: `wdth 125` on the hero h1, `118%` on `h1,h2,h3` and the wordmark, `112%` on titles, group headings and track headings.

### The metric-matched fallback

```css
@font-face{ font-family:"Archivo Fallback";
  src:local("Arial"),local("Helvetica Neue"),local("Liberation Sans");
  size-adjust:132.8%; }
```

This exists for one reason and it is not aesthetic. **`pet.js` measures the hero name with a `Range` over its text node at spawn time — potentially before the webfont has swapped in — to decide where Charizard perches.** If the fallback's advance widths don't match Archivo at `wdth 125`, the measured right edge is wrong and the dragon lands in the middle of the name or off in space. `size-adjust: 132.8%` holds the fallback at Archivo-wdth-125 scale. `.hero h1` is the only stack in `site.css` that names `"Archivo Fallback"`, and it must stay there.

### Measures

The thesis caps at 40ch (dropped at ≤520px), the hero lead at 52ch, entry descriptions at 70ch, contribution clauses at 72ch, findings and ledger prose at 74ch.

### Named Rules

**The Twelve-Pixel Floor Rule.** Nothing functional renders below 12px. `0.75rem` is the floor and it is exactly 12px at the default root. Undersized UI text is designed out, not patched later.

**The Aligning-Digits Rule.** IBM Plex Mono is for digits and identifiers that must align in a column or read as instrument annotation: year ticks, measured values, venues, statuses, date ranges, repo slugs, and the `.note`s. It is never prose, never decorative small-caps chrome. The previous build's two prose exceptions (labelled title-block fields, the mono email) died with the elements that carried them; **the allowance is now closed, not extended.**

**The Width-Not-Weight Rule.** Emphasis in headings comes from the width axis (112 / 118 / 125) at a constant 640 weight. Reaching for a heavier weight or a second family to make something louder is off-system.

**The Plain-Heading Rule.** Section headings are plain nouns — Work, Publications, Projects, Toolkit, Recognition — by the owner's decision of 2026-09-08. Spans live in the rail ticks; counts and spans never go in a heading, and never as a slogan.

## Layout

**The sheet.** `max-width: 1180px`, centered, `padding: 0 clamp(14px, 3vw, 36px)`. The header and the footer use the same padding so every vertical rule lines up.

**The 9px module.** The vertical rhythm and every macro measurement is a multiple of 9: sections are `45px 0 54px` (36 / 45 at ≤699px), the hero is `clamp(45px, 7vh, 72px) 0 45px`, the row gap is 27px, the hero body gaps 18/54, the footer rule 45px above and 150px below, `scroll-padding-top: 72px`. **Component interiors are not on the module** — cell padding is 12/16, 14/18, 13/18, 4/12; key padding is `0 22px`; gaps are 10, 11, 14, 20, 22. That is the honest state of the build: *the module governs the page's vertical rhythm and its lanes, not the inside of a cell.* Do not "correct" the interiors to multiples of 9; do not let a section's rhythm drift off them. *Divergence: the detail pages' `.page-head` is `36px 0 30px`, and its 30px is off the module.*

**The two-column row.** Every section on every page is `.row` — `grid-template-columns: 132px minmax(0,1fr)`, `gap: 0 27px`. The left column is the **axis gutter**: a `--line-strong` right border, a 2px CH1 span bracket inset 6px top and bottom, and two mono ticks — `t0` at the top and `t1` pinned to the bottom — reading that section's real date span. Small-multiples logic: each band carries its own local time axis, so sequence is carried by years that mean something rather than by section numbers.

**The hero has no rail.** `.hero .row { display: block }`. The name owns the whole measure, which is what buys the perch its clear space. Below it, `.hero-body` is a two-column grid with named areas — `"left more" / "cta cta"` at `minmax(0,1.5fr) minmax(0,1fr)` — so the portrait and thesis sit on the left, the lead and the two affiliation lines on the right, and one row of four keys (email, résumé, Work, Publications) runs under both.

**The declared lane (≥1200px).** `.row > :last-child { max-width: calc(100% - 120px); padding-right: 9px; border-right: 1px solid var(--line) }`. The record column stops 120px short of the sheet's right edge and declares that stop with a hairline; content stops a further 9px short of the rule, so no plate edge ever coincides with it. **The band beyond the rule is the dragon's, and it is marked rather than merely empty.**

**The header.** 46px minimum height, `position: sticky; top: 0`, `z-index: 10`, on `--field` with a 1px `--line` bottom rule. Wordmark as real text at left in a 44px target, five section links pushed right by `margin-left: auto`, one theme button at the far right. On the home page all five links are local. On `work.html` and `publications.html` the wordmark links to `index.html`, and each link goes to its band in full wherever that lives — Work and Projects on `work.html`, Publications on `publications.html`, Toolkit on the home page — as a bare `#id` when the band is on the same page; Contact is always local. No page sets a static `aria-current`.

**Responsive.**

- **≤1010px** — on `work.html` the dates in a workplace head drop under the workplace name (`flex-basis: 100%`), so they never sit alone at the far edge.
- **≤900px** — the axis gutter collapses: `.row` becomes one column and `.axis-cell` flips to a full-width bottom-bordered strip with its two ticks pushed apart, so chronology survives as an inline dated rule above each band. `.hero-line` goes block and the h1 is allowed to wrap; `.step` is hidden and **the trace survives as a pseudo-element on `.hero-line`** — a 24px low run with a right-hand riser, both 2px CH1. `.hero-body` becomes one column ordered left / more / cta. Record rows unstack to block flow. The Toolkit band goes single-column.
- **≤725px** — the hero's email key takes a row of its own, so the other three keys stay together.
- **≤699px** — nav drops Projects and Toolkit, leaving Work · Publications · Contact (Work · Contact at ≤400px); strips become a 3-column grid; the footer's bottom lane drops 150px → 63px, because **that is the same predicate `pet.css` uses to hide the pet and his toggle**; the colophon swaps to its narrow, width-honest sentence.
- **≤520px** — the thesis drops its measure cap, the CTA keys stretch to fill their rows — email, then the résumé, then Work and Publications side by side — the wordmark drops to label size, plate groups go single-column, and chips, artifact links and the band Details keys grow to a 44px target.
- **≤400px** — chips may wrap, strip values drop to `0.9375rem` in `9px 8px` cells, and a readout value never breaks, so a measured value is not split across lines on the narrowest phones.

**Print.** A paper palette overrides both themes at once; the ground line, the pet, his toggle, the skip link and the theme button are hidden; the header un-sticks; every `--surface` container goes white; external `href`s print after their link text; the bottom lane goes to zero.

### Named Rules

**The Nine-Pixel Rhythm Rule.** Section padding, band gaps, row gaps, the lane, and the footer tail are multiples of 9. Component interiors are free. A new *section* that isn't on the module is a mistake; a new *cell* that isn't, is not.

**The Nothing-At-The-Bottom Rule.** Nothing in this site is `position: fixed` or `sticky` at the bottom of the viewport. Top-pinned is legal; bottom-pinned is a contract violation. The bottom ~96px belongs to the dragon and to the 🔥 toggle in the bottom-left corner.

**The Declared-Margin Rule.** At ≥1200px the right 120px of the record column is empty by declaration, with a hairline naming the edge. Nothing prose, interactive, or plate-edged goes past it.

## Elevation & Depth

**There are no shadows.** Not on containers, not on the sticky header, not on hover, not on the plate. Depth is built from exactly two materials:

- **Tint steps:** `--field` (page) → `--surface` (cells, rows, plates, keys) → `--surface-2` (unspent). A container is "raised" by being lighter than its ground, nothing more.
- **Three rule weights:** 1px `--line` (decorative separation) → 1px `--line-2` / `--line-strong` (structural divider, then container and control edge) → 2px `--sig` (a trace, an axis, a cursor, a live edge). The 3px CH1 under-edge on the primary key is the one heavier mark, and it is a key's own trace.

Multi-cell containers get their internal dividers for free: `.strip` and `.plate` set `background: var(--line-2)` with `gap: 1px`, so the ground shows through as hairlines between `--surface` cells. One border, no per-cell rules.

The only `box-shadow` in `site.css` is `0 0 0 1px var(--field)` on `:focus-visible` — a hard inner ring so focus survives every ground. It carries no blur and no offset by design.

### Named Rule

**The No-Shadow Rule.** Zero blur radius anywhere. A surface that needs to separate from its ground gets a tint step or a rule weight. The hairline-border-plus-wide-soft-shadow card is the exact tell this world was built to avoid, and one `box-shadow: 0 4px 24px` undoes it.

## Shapes

**Corner language splits on a real affordance.** Everything you read is square; everything you press is a 7px key.

- **Square (radius 0):** strips, cells, plates, marker tables, record rows, ledger rows, chips, the contact bar, the portrait, every rule and divider. 1px `--line-strong` edges.
- **Key (radius 7px):** the four hero keys, the three Details keys in the home band heads, the six footer contact keys, the theme button, the skip link (`0 0 7px 7px`), and — critically — **`#pet-toggle`**, whose 7px radius is hardcoded in `pet.css`. The radius was chosen to match it, so the dragon's toggle joins a family instead of being the one round object on the page.
- **2px:** the focus-ring radius on non-key elements, and the scrollbar thumb.

**The ground line.** `body::after` — a fixed 2px `--line-strong` bar at `bottom: 12px`, full width, `z-index: -1`, `pointer-events: none`. It is the page's only fixed painted mark and it is exactly where `pet.js` puts Charizard's feet (`groundY = vh − BOX_H − GROUND_PAD`, `GROUND_PAD = 12`). The same weight reappears once in the hero as the 2px `--ink` rule under the name — one line, seen twice.

**The trace.** Beside the hero name, `.step` draws a 2px CH1 low run to `min(130px, 42%)`, a 42px riser, then a high line running out to the right and ending open. Below 900px it becomes a full-width rule that steps up at its right end. The signal is never closed off with a terminal.

**Leader ticks instead of bullets.** Work findings use a two-pseudo-element connector: a 2px × 8–10px CH1 vertical mark at `left: 0`, plus a 13px × 1px `--line-strong` horizontal running into the text at `left: 4px`. No disc bullets. The marker rows use the same idea horizontally: a 1px dotted `--line-strong` leader stretching from the name to a right-aligned year.

**Dash-pattern status coding.** State is carried in line style before it is carried in color: `border-top-style` on a 14–16px `.tick` span — **solid = published / accepted**, **dashed = under review**, **dotted = in preparation**. Applied identically on `.chip` (Work, Projects on `work.html`) and `.pub-status` (the record). There is no printed legend; the coding is redundant with the written status beside it, which is why it needs none. The record stays legible with all color removed.

## Components

### Keys (buttons and button-shaped links)

- **Shape:** 7px radius, 44px minimum height, `0 22px` padding, 9px gap before the `↗` glyph.
- **Ghost (default):** `--surface` ground, `--ink` text, 1px `--line-strong` edge. Hover moves both edge and text to `--sig`.
- **Primary:** `--ink` ground, `--field` text, and a **3px `--sig` bottom edge** — the key's own trace. It is used twice on the home page (hero and footer) and once in the footer of `work.html` and of `publications.html`, each time labelled with the literal email address, and each carries `user-select: all` so the address can be lifted in one gesture. Hover swaps the ground to `--ink-soft` and keeps the CH1 under-edge.
- **Small (`.key.sm`):** the one Details key in the heading row of each of the Work, Publications and Projects bands (`.band-head`, beside the `h2`) — a ghost key at 36px minimum height (44px at ≤520px), `0 16px` padding and a label-size "Details →". It opens the band in full: Work at `work.html`, Publications at `publications.html`, Projects at `work.html#projects`.
- **Focus:** 2px `--sig` outline at 2px offset plus the 1px `--field` inner ring, radius bumped back to 7px.
- Transitions are 0.16s ease on border, color and background. Nothing moves, scales, or lifts.

### Theme button

**One button, not a rocker.** `--surface` ground, 1px `--line-strong` edge, 7px radius, 30px min-height, label at 13px/600. **Its visible label names the theme it switches to** ("Dark" while light, "Light" while dark); the words "Switch to " are screen-reader-only. There is no `role="switch"` and no `aria-checked` — the label carries the whole state. `reflect()` writes only that label and **never** `data-theme`, so an unset preference stays unset and keeps tracking the OS; `apply()` is the only writer, and it writes on click alone.

### Nav links (header)

13px/500 in `--ink-soft`, 5px/9px padding, 28px minimum height. The active section is bracketed by **two 1px `--sig` cursor rules** — transparent left and right borders that take color on `.active` — and the text goes to `--ink`. Driven by an IntersectionObserver at `rootMargin: -45% 0px -50% 0px`; `aria-current="true"` moves with the bracket. Hover is `--sig-2`. Below 700px the third and fourth links are hidden, leaving Work · Publications · Contact; at ≤400px Publications goes too. Every page carries the same five links in the same order, and the observer skips links whose target is not on the page. The row never becomes a clipped scroller and never becomes a menu.

### Measurement strip

**The repeated device — the site's handwriting.** A flex container with `background: var(--line-2)` and `gap: 1px` inside a 1px `--line-strong` border; each cell is `--surface`, `min-width: 118px`, carrying a mono value over a label. Capped at **three cells**, always the entry's headline results.

- **The hero carries none.** The owner removed the hero's measurement cells on 2026-11-25; the strip now appears only on `work.html`, in the KPST streaming block and the ICLab entry.
- **In a work entry** it is horizontal and static, `role="list"` / `role="listitem"`.
- **Below 700px** it becomes a 3-column grid so cells never fall to one word per line.

**`.readout-cell` is the same idea at one cell:** an inline `--surface` box with a `--line-strong` edge, `4px 12px`, mono value beside a label. It is what a ledger row or a bare entry gets when there is exactly one number to state.

### Record row (publications)

`grid-template-columns: 118px 148px minmax(0,1fr) 96px`, `18px 10px` padding, baseline-aligned, divided by 1px `--line-2` top rules. Venue (mono), status (mono + dash-coded tick), title (600, `--ink`, 1.15rem, `wdth 112`, its link underlined in CH1), and author position right-aligned in the 96px column. Then, in column three: the author list with his name at `--ink` 600, **a first-person contribution clause (`.pub-did`, 72ch) naming what he built**, and a row of artifact links plus an optional mono `.note`.

That full row lives on `publications.html`. The home page carries the record in brief (`ol.record.brief`, same `pub-*` ids): the same four columns at `104px 148px minmax(0,1fr) 88px` with a status that never wraps, `12px 10px` padding, the title as plain text at `1rem`, and nothing under it — no authors, no contribution clause, no artifact links.

**The author position is visible at every width**, on the brief row and the full row alike. `author N / M` — the word included, not a `title` attribute, not hidden by a column label. Below 900px the row unstacks to block flow and the same string simply moves down.

### Work entry

The Work entry lives on `work.html`, workplace first. Its `.entry-head` is the same head line as its home row, set larger: the workplace as the `h3`, the role, and the mono dates pushed right. Entries are `45px 0` apart under a 1px `--line` rule, more air than between the projects inside one; the first `.block` sits 18px under its workplace head, and an entry that ends on a track row drops that row's bottom rule so no two rules stack. Under the head, each project is a `.block`, set 30px apart and opened by a hairline `.tracks` row holding the project's `h4` at 1.0625rem; then a first-person role paragraph, a description or both (≤70ch), an optional findings list (only the KPST blocks carry one, one to four bullets), an optional three-cell strip, and artifact links. KPST also carries a one-paragraph overview between its head and its four blocks; the first block keeps its measurement strip. **Paper tracks are flattened to hairline rows** — an `h5` at secondary size plus one chip carrying `venue · status · author N / M`, which links to the full record row it names on `publications.html`; the K&D "LLM Difficulty Perception" track carries an unlinked mono `.note` reading "project" instead of a chip. No page but `index.html` has a hero: `work.html` and `publications.html` open with a `.page-head` (`36px 0 30px`) — a `← Home` `.tlink` over a visible `h1` — and then their first band, top rule included.

### Ledger row (projects)

Not a card. `18px 0`, 1px `--line-2` top rule. A head line of title + role + right-pushed mono year, a 74ch description, then a foot of readout cells, chips and artifact links. **A readout cell appears only where a real measured number exists**; four of six rows have one, and that unevenness is the design. On the home page the same row carries Work and Projects as an index: head line and one sentence that renders on one line at 600px and wider, and no link on any row (the Allah-u-Allam row carries its NDA note in the head line); no foot. The way into the detail is the one Details key in the band's heading row. Readout cells, chips and repository links live on `work.html`. The `← Back to the home page` link that closes Projects on `work.html` and the record on `publications.html` sits in its own `.row.after` under the dated axis so the last tick stays on the last dated row; below 520px it keeps its 24px line and takes its 44px target from an `::after` hit area, and so does the `← Home` link in `.page-head`.

### Plate and markers (Toolkit & Recognition)

Two bands, one after the other, each in its own `.row` with its own `h2`. **Toolkit** is a bordered plate of four `label + list` groups on a `--line-2` ground (`150px` label column, items joined by a `--line-strong` middot); its axis cell carries no ticks. **Recognition** is a bordered ledger of six rows, each `96px minmax(0,1fr)`: the year first in `--font-data` at `.8125rem`, then the award with its name in `--ink` 600 and the result in `--ink-soft`; rows divide on `--line-2`, and the rail ticks read 2025 / 2018. No leaders, no fold: every award has its own row and its own year, the six at equal weight by the owner's decision.

### Chip / artifact link

`.chip` is a mono 12px inline link with a 1px `--sig` border, square, 24px minimum (44px below 520px), carrying the dash-coded tick. `.tlink` is a 13px/600 CH1 link with a 1px CH1 underline. Both hover to `--sig-2`. Chips live on `work.html` and link to the full publication record on `publications.html` — this is what fires the measurement cursor.

### Contact bar (footer)

A single bordered `--surface` block: the identity line (`Uzair Ahmed · AI / ML Researcher & Engineer · Daejeon, Korea`) over a wrapping row of six keys — email primary, then GitHub, Google Scholar, ORCID, LinkedIn, Résumé. Beneath it, outside the box, the colophon at label size: the Charizard sentence, width-honest in two variants, then the record's currency date. Then 150px of empty lane. It is byte-identical on every page, and the currency line changes on all pages together.

### Signature: the measurement cursor

The one piece of delight, and it is pure CSS. A chip on `work.html` targets its full row on `publications.html` (and a `#pub-*` link to the home page targets the brief row there), and `.record li:target` fires two 2px `--sig` cursor rules that sweep in from the left and right margins (`translateX(∓50vw)`) and **stop, bracketing the row and staying there** while the row itself lifts to `--surface`. It is the literal gesture of dropping cursors on a trace to read a value — and a dropped cursor does not fade, which is why the 1.1s `ease-out` keyframes end at rest rather than at zero opacity. The same `:target` reveals a `.back` link on a full row — "← back to ICLab" on three papers, "← back to the Knowledge & Democracy Lab" on one, each returning to the lab's entry on `work.html` (the JKAIA row has none, and no brief row has one) — so the way back exists only when someone was brought here. It needs no JavaScript, so it cannot fight `pet.js`. Under `prefers-reduced-motion` the animation drops and the brackets simply appear. The header's active-section bracket is the same idiom running continuously.

### Named Rules

**The Earned-Cell Rule.** A readout cell, a strip, or a chip appears because a real number or a real record exists behind it. Adding one to balance a row visually turns an instrument into a decoration. (PRODUCT.md content-truth rule 6 says the same thing about content; this is its visual half.)

**The Deliberate-Seam Rule.** Two places break the grammar on purpose and ship with **no caption, no note, and no apology**: the **JKAIA row** on `publications.html`, which has no artifact furniture and states in one plain sentence that the paper was non-archival and there is no link; and the **DocsHunt entry** on `work.html`, which has one readout cell and no findings list at all. They are not omissions and they are not bugs. A future edit that "completes" either one deletes the evidence that a person wrote this record. (K&D having no strip is a migration consequence, not a seam — do not count it and do not fix it either way.)

**The Three-Cell Ceiling Rule.** A strip never exceeds three cells. Study-scale numbers belong on the record row that carries the author position, not in a fourth cell.

## Do's and Don'ts

### Do:

- **Do** put a new band's vertical rhythm on the 9px module (45 / 54 / 27 / 18) and leave cell interiors alone.
- **Do** give every container a 1px `--line-strong` edge and a `--surface` ground, and separate its cells with `gap: 1px` over a `--line-2` background.
- **Do** code state with a line pattern first (solid / dashed / dotted) and color second, so the record survives desaturation — and write the status in words beside it.
- **Do** reuse the measurement strip / readout cell / leader tick family for anything new that is measured. Repetition is the point; a new device is not.
- **Do** keep every interactive element on the 7px key radius and everything readable square.
- **Do** put mono only where digits, dates, venues, statuses or repo slugs align, and keep the type floor at 0.75rem.
- **Do** give a section heading a count and a span, and let the notation explain itself.
- **Do** keep the hero name as real uppercase text in `.hero h1` — one text node, no child elements, no pseudo-element, `.step` a sibling — with the `"Archivo Fallback"` stack and the `px` clamp intact, in the first viewport, with clear space to its right.

### Don't:

- **Don't** add a `box-shadow` with any blur or offset. The only shadow in `site.css` is the focus inner ring.
- **Don't** introduce orange, amber, or any warm hue into page chrome. `--accent` belongs to the dragon.
- **Don't** make `--sig-2` a second hue again. It is a lightness step of CH1, and dark `--sig` is pinned to cyan (hue ~188–200°) because `pet.css` hardcodes `rgba(96,205,255)` for the tail glow.
- **Don't** re-introduce a background field, wallpaper, texture, or graticule layer. The owner removed it; `--field` is bare.
- **Don't** use `z-index ≥ 999` — or, honestly, above 20. Current ceiling: skip link 20, header 10, ground line −1.
- **Don't** fix or stick anything to the bottom of the viewport, and don't let content encroach on the bottom lane or on the declared 120px right margin at ≥1200px.
- **Don't** add an uppercase kicker or eyebrow above a heading, a legend line that explains the page's own notation, a tag-pill row, or a labelled NAME/ROLE/LOCATION grid. All four were removed; do not bring the devices back under new names.
- **Don't** number the sections (`01`, `02`). Sequence is carried by real year ticks in the axis gutter.
- **Don't** convert Projects or Publications into a card grid, and don't equalize section density — unevenness is load-bearing.
- **Don't** add fade-up, parallax, or scroll-triggered reveals. Motion in this world is one cursor sweep that stops, and a 0.16s color change.
- **Don't** demote a date, venue, author, or status to `--ink-faint`, and don't spend `--signal` or `--accent` on the page.
- **Don't** add a third font family or reach for a heavier weight — emphasis comes from the width axis.
- **Don't** hide the author position, the status, or the `N / M` string at any width, and don't turn any of them into a `title` attribute.
- **Don't** add any `<input>`, `<textarea>`, `contenteditable`, or free-text `<select>`, ever, and don't take `:target` away from `.record li`.

## Maintenance

**What a future edit must never break.** These are not style preferences; they are the Charizard preservation contract expressed as design constraints. PRODUCT.md's Brand Commitments are authoritative; this is the short form.

1. **`assets/` is frozen.** `pet.js`, `pet.css`, and the 14 GIFs in `assets/charizard/` are not modified, renamed, or moved.
2. **The hooks stay, on every page.** `<link rel="stylesheet" href="assets/pet.css">` in `<head>`; `<script src="assets/pet.js" defer>` before `</body>`. `assets/pet.css` is linked before `site.css`; `site.js` loads before `pet.js`.
3. **`.hero h1` stays real text.** His name, in a `.hero h1` on `index.html` only, in the first viewport, one text node with no child elements and no pseudo-element (a `Range` unions every child rect, and a pseudo-element is invisible to it), `.step` a sibling, with clear space to its right. Keep the `"Archivo Fallback"` `size-adjust: 132.8%` stack — without it the perch drifts before the webfont swaps. No other page carries an element with class `hero`.
4. **Both themes stay fully authored, and the control is one button.** `data-theme="light|dark"` on `<html>`, persisted to localStorage `theme`, `prefers-color-scheme` respected when unset; the pre-paint boot script stays inline on every page. There is no rocker and no `role="switch"`: **the button's visible label names the destination theme, and `reflect()` writes only that label — never `data-theme`** — so an unset preference stays unset and keeps following the OS. Every click is therefore a real change, which is what makes the pet's theme-change sneeze always intentional.
5. **Six token names are permanent:** `--signal`, `--ink-faint`, `--accent`, `--surface`, `--line`, `--line-strong`. Retune the values if a theme changes; never rename, never delete, never leave one undefined in any of the four `:root` blocks. `pet.css` reads them for the hearts, the sleep z's, the startle mark, the toggle ground, and the toggle chrome. `--line-2` exists precisely so `--line` could keep its pet-facing job — do not "consolidate" them.
6. **`z-index` ceiling.** Nothing ≥ 999. The pet sits at 999, his toggle at 1000, his particles at 999. No `<dialog>.showModal()`, no Popover API, no overlay: top-layer content renders above every legal z-index.
7. **IBM Plex Mono stays loaded on every page** even if the page's mono usage shrinks to zero — the pet's particles request that family by name. One Google Fonts request, two families, no third face.
8. **The bottom lane stays clear on every page.** No fixed or sticky element at the viewport bottom; the footer keeps `padding-bottom: 150px`, dropping to 63px only inside `@media (max-width: 699px)` — the same predicate `pet.css` uses to hide him, so no fractional width can collapse the lane while the button still renders. There is **no graticule layer** any more; the only fixed painted mark is `body::after`. At ≥1200px the lane also has a horizontal half: `.row > :last-child` gives back 120px on the right and declares the edge with a 1px `--line` rule — that band stays free of prose and controls.
9. **The ground line stays put.** `body::after` at `bottom: 12px` is where his feet land (`GROUND_PAD = 12`). Moving it moves him off the design. Only `@media print` may hide it.
10. **Don't fight `pet.js`.** No global listeners or rAF loops that compete with it, no pointer interception over his area, no class ever added to `#pet-charizard` (pet.js overwrites the whole className on every theme change). The signature interaction is CSS-only for exactly this reason; the script budget, in `site.js`, is two listeners and one IntersectionObserver per page. `site.js` also opens with one synchronous line that jumps a hashed arrival to its fragment before `pet.js` runs (on a fresh navigation only; Back and reload keep the reader's place), so he measures the page where the reader is and arrives in flight instead of perching beside a name that is scrolling away; it adds no listener.
11. **Four site rules touch pet chrome, plus the print block:** `#pet-toggle { border-color: var(--ink-soft); opacity: .85 }`, `#pet-toggle:hover { border-color: var(--ink); opacity: 1 }`, `#pet-toggle[aria-pressed="false"] { opacity: .75 }`, and the `@media print` rule that hides `#pet-toggle`, `#pet-charizard` and `#pet-fx`. They work on source order at equal specificity — `pet.css` uses the `border` shorthand, so if the pet.css `<link>` ever loads after `site.css`, all four silently stop applying with no error. The off state keeps `pet.css`'s own grayscale as its signal; only opacity moves.
12. **localStorage keys `theme` and `charizard-pet-enabled`** keep their exact semantics. No third key — there is no view state to store.
13. **No containing-block property on `html` or `body`.** `transform` (and `translate`, `rotate`, `scale`, `transform-style`), `filter`, `backdrop-filter`, `perspective`, `contain`, and `will-change`, prefixed or not, make `body` the containing block for all three pet nodes and un-fix the dragon and his ground line from the viewport together, silently, visible only after a scroll. Page-level effects go on `main`, `header`, or a wrapper. PRODUCT.md clause 10 carries the whole-file grep guard; run it over `site.css` and every root page, and it must print `0` for every file (the line-based form does not fire on the multi-line `body{` in `site.css`).
14. **Dark `--sig` is pinned to cyan** (hue ~188–200°): `pet.css` hardcodes `rgba(96,205,255)` for the tail glow. Retune lightness and chroma only; light `--sig` is unconstrained. PRODUCT.md clause 11.
15. **No form controls, ever, on any page.** No `<input>`, `<textarea>`, `contenteditable`, or free-text `<select>`. The "fire" secret is a `window` keydown with no target check, so typing inside a field would breathe fire instead of being swallowed. A filter, if one is ever added, is `<button>` chips. PRODUCT.md clause 12.
16. **`:target` belongs to `.record li` alone** (the brief rows on `index.html` and the full rows on `publications.html`; `work.html` uses no `:target` styling) — never tab, panel, or view state — **and the perch is a testable inequality on `index.html`, not prose.** PRODUCT.md clause 14: at every viewport width from 700 to 1920px and at browser default font sizes of 16, 20 and 24px, the hero name renders on one line (`getClientRects().length === 1`) at 56px or larger — 64px or larger at 900px and above — and

    `textRight + 124 <= innerWidth`

    where `textRight` is the right edge of a `Range` over the `.hero h1` text node. This is why the h1's `clamp()` bounds are written in `px` and never `rem`.
