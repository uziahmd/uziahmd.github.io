---
name: Timebase
description: One continuous instrument record — a live graticule field on which every claim is placed as a measured event.
colors:
  field: "#edf1f3"
  surface: "#f8fafb"
  surface-2: "#e2e8ec"
  ink: "#101a20"
  ink-soft: "#3a4a54"
  ink-faint: "#566772"
  line: "#d2dade"
  line-strong: "#74838e"
  sig: "#0a6f80"
  sig-2: "#5b3fd0"
  signal: "#b3186b"
  accent: "#a04708"
  grid-minor: "#e4e9ec"
  grid-major: "#e0e6e9"
  sel: "rgba(10,111,128,.18)"
typography:
  display:
    fontFamily: "Archivo, Archivo Fallback, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 7.2vw, 5.6rem)"
    fontWeight: 640
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "wdth 125"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 2.6vw, 1.95rem)"
    fontWeight: 640
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "wdth 118"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 640
    lineHeight: 1.08
    letterSpacing: "-0.02em"
    fontVariation: "wdth 118"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "normal"
    fontVariation: "wdth 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "12.5px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.01em"
  data:
    fontFamily: "IBM Plex Mono, ui-monospace, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.02em"
    fontFeature: "tabular-nums"
rounded:
  square: "0"
  focus-plate: "2px"
  key: "7px"
spacing:
  tick: "9px"
  unit: "18px"
  step: "27px"
  band: "36px"
  section-top: "63px"
  major: "72px"
  lane: "150px"
components:
  key-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field}"
    rounded: "{rounded.key}"
    padding: "0 22px"
    height: "44px"
  key-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.field}"
  key-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.key}"
    padding: "0 22px"
    height: "44px"
  key-ghost-hover:
    textColor: "{colors.sig}"
  rocker:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.key}"
    height: "30px"
  rocker-cell-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.sig}"
    typography: "{typography.data}"
    rounded: "{rounded.square}"
    padding: "2px 9px"
    height: "24px"
  plate-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "20px 22px"
  strip-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
  tag:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.square}"
    padding: "3px 10px"
    height: "24px"
---

# Design System: Timebase

Recorded from the shipped artifact (`index.html`), not from the brief. Where the direction and the build diverge, the build is written down and the divergence is noted.

The frontmatter above is normative and carries the **light** value of each token — light is the primary theme. Dark values cannot live in the frontmatter schema, so the token table in **Colors** carries both; it is the one place a value appears twice, and the pairs must be kept in sync.

## Overview

**Creative North Star: "Timebase"**

The page is one continuous instrument record. A live graticule runs edge to edge behind everything, and every claim is placed on it as a measured event — value, unit, date, venue, author position, status — so that nothing is asserted without its measurement beside it. The reader is not being sold to; they are reading a trace off a panel.

The owned idea is one line: **a signal at rest is a straight line at the bottom of the frame**, and that line is simultaneously the page's structural baseline and the dragon's ground. The Charizard walks the design instead of standing in front of it. Everything else follows from taking that literally — the grid is anchored to the viewport bottom rather than the document top, the hero name sits *on* a rule that steps high at its right end, and the bottom lane of the viewport is kept empty on purpose.

The world refuses the category's arrangement wholesale: no near-black-plus-one-neon chrome, no zero-padded section numbers standing in for structure, no auto-fill grid of equal cards, no fade-up reveals, no hairline-plus-wide-shadow card. Density is deliberately uneven — Selected Work is the dense passage, Stack is the reader's breath — because a real record is not uniformly interesting.

**Key Characteristics:**

- A fixed graticule at two frequencies (9px minor, 72px major), anchored bottom-left, stopping 12px above the viewport floor.
- One committed channel color (CH1 teal-cyan) carrying traces, axis, links, cursors, and focus — roughly 40% of the surface reads cool.
- Orange is withheld from the entire page. It means only "Charizard is here."
- Zero shadows. Depth is three tint steps and three rule weights.
- Status is coded by dash pattern before it is coded by color.
- A width axis, not a second font family, is the voice.
- Nothing is fixed or sticky at the bottom of the viewport, ever.

## Colors

A lit, paper-pale instrument panel with one saturated channel; dark is the same instrument with its backlight turned down.

### Token table

Every custom property on `:root`, both themes, with its role. **RENAME-FORBIDDEN** marks the six tokens `assets/pet.css` reads by name — their values may be retuned, their names may never change (Charizard contract, clause 4).

| Token | Light | Dark | Role |
|---|---|---|---|
| `--field` | `#edf1f3` | `#141c22` | Page ground: instrument paper, never pure white. Also the text color inside inverted keys and the focus inner ring. |
| `--surface` | `#f8fafb` | `#1c262e` | **RENAME-FORBIDDEN.** Plates, record rows, ledger readout cells, strip cells, the rocker, ghost keys, the pet toggle's ground. |
| `--surface-2` | `#e2e8ec` | `#232f38` | Tinted step: stack tags only. The third tint, used sparingly. |
| `--ink` | `#101a20` | `#e7eef2` | Display, titles, emphasized values, and the primary key's ground. |
| `--ink-soft` | `#3a4a54` | `#a8b8c2` | Body prose, descriptions, dates, venues, authors, status text, nav at rest, scrollbar thumb on hover. |
| `--ink-faint` | `#566772` | `#8ba0ad` | **RENAME-FORBIDDEN.** Axis ticks, section legends, title-block field labels — *and nothing else*. Never dates, venues, authors, or status. Also the pet's sleep z's. |
| `--line` | `#d2dade` | `#2b3944` | **RENAME-FORBIDDEN.** Hairline rules between rows, sections, and plate cells; decorative separation only. Also the pet toggle's resting edge in pet.css. |
| `--line-strong` | `#74838e` | `#6b7f8d` | **RENAME-FORBIDDEN.** Every control and container edge, the ground line under the graticule, leader-tick horizontals, the scrollbar thumb. Also the pet toggle's chrome. |
| `--sig` | `#0a6f80` | `#5fd0e6` | **CH1, the committed channel.** Traces, axis cursors, every link, chip edges, focus ring, the primary key's under-edge, caret and accent-color. |
| `--sig-2` | `#5b3fd0` | `#b0a2ff` | **CH2.** Hover state for links, chips, nav, and tlinks. Second series only — never a resting state. |
| `--signal` | `#b3186b` | `#ff8fc4` | **RENAME-FORBIDDEN. CH3 — the pet's hearts.** Declared for pet.css and used nowhere on the page. |
| `--accent` | `#a04708` | `#ffab5c` | **RENAME-FORBIDDEN.** The only warm value in the system. Colors the pet's startle "!" and its toggle focus ring. Used nowhere on the page. |
| `--sel` | `rgba(10,111,128,.18)` | `rgba(95,208,230,.24)` | `::selection` ground. Text color is left inherited so selected text stays `--ink`. |
| `--grat` | *(SVG data URI)* | *(SVG data URI)* | The graticule tile itself — a 72×72 inline SVG, re-declared per theme. |
| `--maxw` | `1180px` | — | Sheet width. |
| `--gutter` | `132px` | — | Axis-gutter column width. |
| `--font-voice` / `--font-data` | — | — | The two families (see Typography). |

Two colors in the frontmatter, **`grid-minor` (`#e4e9ec` / `#1a232a`)** and **`grid-major` (`#e0e6e9` / `#222d35`)**, are not custom properties in the build: they are literal `stroke` values inside the `--grat` data URI, once per theme (three copies each, counting the `data-theme` override blocks). Changing the graticule ink means editing four data URIs. *Divergence from the brief, which specified a `--grid-major` of `#d6dee2`; the build ships `#e0e6e9`, a quieter major.* The brief's `--baseline` token was never created — the ground line uses `--line-strong` and the hero rule uses `--ink`.

### Named Rules

**The Withheld Orange Rule.** Orange appears nowhere on the page. `--accent` is declared, contrast-checked, and spent entirely on the dragon's startle mark and his toggle's focus ring. The moment a warm value shows up in site chrome, the pet stops being the highest-contrast event on the screen and the whole palette loses its point.

**The One Channel Rule.** CH1 (`--sig`) carries every signal-bearing mark: traces, axis, cursors, links, focus, chip edges. CH2 (`--sig-2`) is hover only. CH3 (`--signal`) is the pet's. A fourth accent is not available; if something needs to stand out, it gets a rule weight or a tint step, not a new hue.

**The Faint-Is-Metadata Rule.** `--ink-faint` is reserved for axis ticks, legends, and field labels. A date, venue, author, or status is content and moves up to `--ink-soft` or `--ink`. Demoting a fact to faint is how a record stops being readable.

## Typography

**Display / Body Font:** Archivo Variable (`wdth 62..125, wght 100..900`), with `"Archivo Fallback"`, Helvetica Neue, Arial.
**Data Font:** IBM Plex Mono (400, 500), with ui-monospace, Consolas.

**Character:** One family, two widths. The world is a single instrument rendered at two scales, and a real instrument writes the same letterforms wide-engraved on the panel and narrow in the manual — so the voice is a *width axis*, not a second family. Headings are pushed wide (118–125%) and set tight (−0.02em); body sits at normal width, 17px on a 1.62 lead. One variable file, one request.

### The metric-matched fallback

```css
@font-face{ font-family:"Archivo Fallback";
  src:local("Arial"),local("Helvetica Neue"),local("Liberation Sans");
  size-adjust:132.8%; }
```

This exists for one reason and it is not aesthetic. **`pet.js` measures the hero name with a `Range` over its text node at spawn time — potentially before the webfont has swapped in — to decide where Charizard perches.** If the fallback's advance widths don't match Archivo at `wdth 125`, the measured right edge is wrong and the dragon lands in the middle of the name or off in space. `size-adjust:132.8%` holds the fallback at Archivo-wdth-125 scale so the perch never drifts. The `.hero h1` font stack is the only stack in the file that names `"Archivo Fallback"`, and it must stay there.

### Hierarchy

- **Display** (`wdth 125`, 640, `clamp(3rem, 7.2vw, 5.6rem)`, lh 1.04, −0.02em, uppercase): the hero name, once. Sits directly on a 2px `--ink` rule with 10px of padding beneath it.
- **Headline** (`wdth 118`, 640, `clamp(1.45rem, 2.6vw, 1.95rem)`, lh 1.08): section `h2`. Also the footer close line at `clamp(1.6rem, 3.6vw, 2.4rem)`.
- **Title** (`wdth 118`, 640, 1.3rem): work-entry `h3`. Ledger `h3` and track `h4` step down to `wdth 112` at 1.08rem / 1.02rem.
- **Lead** (400, `clamp(1.2rem, 2vw, 1.5rem)`, lh 1.5, max 38ch): the hero thesis, in `--ink-soft` with two `--ink` 600 phrases carrying the claim.
- **Body** (400, 17px, lh 1.62): default. Prose measures are capped — About at 64ch, entry descriptions at 70ch, findings at 74ch. Secondary prose 15–16px.
- **Label** (500, 12.5–13.5px): readout labels, annotations, nav, tags, roles.
- **Data** (IBM Plex Mono 500, tabular): 17px for headline values, 15px in readout cells, 12–13px for ticks, venues, statuses, years, and legends.

### Named Rules

**The Twelve-Pixel Floor Rule.** Nothing functional renders below 12px. Axis ticks and legends sit at exactly 12px; labels at 12.5–13.5px. The undersized-UI-text problem is designed out, not patched later.

**The Aligning-Digits Rule.** IBM Plex Mono is for digits that must align on an axis or in a column: year ticks, measured values, status years, date ranges, repo slugs. It is never prose and never decorative small-caps chrome. *The build admits two non-digit exceptions — the title block's field labels (`NAME` / `ROLE` / `LOCATION`) and the selectable email address under the hero — where mono reads as engineering-drawing annotation rather than as text. Those two are the whole allowance; do not extend it.*

**The Width-Not-Weight Rule.** Emphasis in headings comes from the width axis (`font-stretch` 112 / 118 / 125) at a constant 640 weight. Reaching for a heavier weight or a second family to make something louder is off-system.

## Layout

**The sheet.** `max-width: 1180px`, centered, with `clamp(14px, 3vw, 36px)` side padding. The header and footer use the same padding so every vertical rule lines up.

**The 9px module.** Every spacing value in the file is a multiple of 9 — 9, 18, 27, 36, 45, 54, 63, 72, 90, 99, 150 — because 9px is the graticule's minor pitch. Padding, gaps, and section rhythm land on grid lines rather than floating over them. Sections are `padding: 63px 0 72px` with a 1px `--line` top rule; the hero is `clamp(54px, 9vh, 99px) 0 90px` with no top rule.

**The two-column row.** Every section body is `.row` — `grid-template-columns: 132px minmax(0,1fr)` with a 27px gap. The left column is the **axis gutter**: a `--line-strong` right border, a 2px CH1 span bracket inset 6px top and bottom, and one or two mono ticks (`t0` at the top, `t1` absolutely positioned at the bottom) reading the section's real date span. Small-multiples logic — each section carries its own local time axis, so sequence is carried by years that mean something rather than by section numbers.

**The header.** 46px minimum height, `position: sticky; top: 0`, `z-index: 10`, on `--field` with a 1px `--line` bottom rule. Brand (an 8px CH1 square plus the name) at left, section jumps pushed right by `margin-left: auto`, theme rocker at the far right. The nav is a horizontally scroll-snapped row with its scrollbar hidden — it survives every width instead of collapsing into a menu. `scroll-padding-top: 72px` keeps anchored targets clear of it.

**Responsive.**

- **≤900px** — the axis gutter collapses: `.row` becomes one column and `.axis-cell` flips to a full-width bottom-bordered strip with its two ticks pushed apart (`justify-content: space-between`), so chronology survives as an inline dated rule above each section. The hero's axis cell and the trace step are hidden; `.hero-line` becomes `display: block` and the h1 is allowed to wrap. Publication rows unstack from a 4-column grid to a block flow, and the hidden word "author" (`.pub-pos .pl`) becomes visible now that the column label is gone. The title block goes to one column.
- **≤520px** — the thesis drops its 38ch cap, the CTA keys go full-width, the hero readouts flip from a left-bordered column to a top-bordered row, and the brand name hides leaving only the CH1 swatch.

**The bottom lane.** The footer carries `padding-bottom: 150px`. The last content block ends well clear of the viewport floor so Charizard always has empty graticule to walk on.

### Named Rules

**The Nine-Pixel Rule.** Every spacing value is a multiple of 9. If a number isn't, it's a mistake or it's a 1px rule.

**The Nothing-At-The-Bottom Rule.** Nothing in this site is `position: fixed` or `sticky` at the bottom of the viewport. Top-pinned is legal; bottom-pinned is a contract violation. The bottom ~96px belongs to the dragon and to the 🔥 toggle in the bottom-left corner.

## Elevation & Depth

**There are no shadows.** Not on cards, not on the sticky header, not on hover, not on the plates. Depth is built from exactly two materials:

- **Three tint steps:** `--field` (page) → `--surface` (plates, rows, keys) → `--surface-2` (tags). A container is "raised" by being lighter than its ground, nothing more.
- **Three rule weights:** 1px `--line` (hairline, decorative separation) → 1px `--line-strong` (structural edge, every container and control) → 2px `--sig` (a trace, an axis, a cursor, a live edge).

Multi-cell containers get their internal dividers for free: the plate and the measurement strip use `background: var(--line)` with `gap: 1px`, so the ground shows through as hairlines between `--surface` cells. One border, no per-cell rules.

The only `box-shadow` in the file is `0 0 0 1px var(--field)` on `:focus-visible` — a hard inner ring, not depth. It carries no blur and no offset by design.

### Named Rule

**The No-Shadow Rule.** Zero blur radius anywhere. A surface that needs to separate from its ground gets a tint step or a rule weight. The hairline-border-plus-wide-soft-shadow card is the exact tell this world was built to avoid, and one `box-shadow: 0 4px 24px` undoes it.

## Shapes

**Corner language splits on a real affordance.** Everything you read is square; everything you press is a 7px key.

- **Square (radius 0):** plates, measurement strips, record rows, ledger rows, marker tables, tracks, tags, chips, the title block, every rule and cell. 1px `--line-strong` edges.
- **Key (radius 7px):** the three hero keys, the four footer contact keys, the theme rocker, the skip link (`0 0 7px 7px`), and — critically — **`#pet-toggle`**, whose 7px radius is hardcoded in `pet.css`. The radius was chosen to match it, so the dragon's toggle joins a family instead of being the one round object on the page.
- **2px:** the focus-ring radius on non-key elements, and the scrollbar thumb.

**The graticule tile.** A 72×72 inline SVG data URI: seven vertical and seven horizontal 1px `grid-minor` strokes at 9px intervals, plus one `grid-major` stroke at `71.5` in each direction closing the tile. Painted on `body::before` — `position: fixed`, `inset: 0 0 12px 0`, `z-index: -1`, `pointer-events: none`, `background-position: left bottom`. It is anchored to the viewport's bottom-left, so the grid holds still while the record scrolls over it, and it can never occlude anything.

**The ground line.** `body::after` — a fixed 2px `--line-strong` bar at `bottom: 12px`, full width, `z-index: -1`. This is the lowest division of the graticule and it is exactly where `pet.js` puts Charizard's feet (`groundY = vh − BOX_H − GROUND_PAD`). The same weight reappears once in the hero as the 2px rule under the name — one line, seen twice.

**Leader ticks instead of bullets.** Hero annotations and work findings use a two-pseudo-element connector: a 2px × 8–10px CH1 vertical mark at `left: 0`, plus a 13px × 1px `--line-strong` horizontal running into the text at `left: 4px`. No disc bullets, and the connector retires most em-dashes.

**Dash-pattern status coding.** Traces carry state in their line style before they carry it in color: `border-top-style` on a 14–16px `.tick` span — **solid = published / accepted**, **dashed = under review**, **dotted = in preparation**. Applied identically on `.chip` (in Selected Work) and `.pub-status` (in the record), with a written legend in the section head. The record stays legible with all color removed.

## Components

### Keys (buttons and button-shaped links)

- **Shape:** 7px radius, 44px minimum height, `0 22px` padding, 9px gap for the `↗` glyph.
- **Primary:** `--ink` ground, `--field` text, and a **3px `--sig` bottom edge** — the key's own trace. Hover swaps the ground to `--ink-soft` and keeps the CH1 under-edge.
- **Ghost:** `--surface` ground, `--ink` text, 1px `--line-strong` edge. Hover moves both edge and text to `--sig`.
- **Focus:** 2px `--sig` outline at 2px offset, plus the 1px `--field` inner ring, with the radius bumped back to 7px.
- Transitions are 0.16s ease on border, color, and background. Nothing moves, scales, or lifts.

### Theme rocker

A two-cell segmented switch, not an icon toggle. `--surface` ground, 1px `--line-strong` edge, 7px radius, cells divided by a `--line-strong` rule, labels "Light" / "Dark" at 12.5px/600. The active cell inverts to `--ink` on `--field`. It is `role="switch"` with `aria-checked` reflecting resolved state, and it drives `data-theme` on `<html>` plus the `theme` localStorage key. Three CSS blocks resolve the active cell across explicit-light, explicit-dark, and system-default states.

### Nav links (header)

13.5px/500 in `--ink-soft`, 5px/9px padding, 28px minimum height. The active section is bracketed by **two 1px `--sig` cursor rules** — transparent left and right borders that take color on `.active` — and the text goes to `--ink`. Driven by an IntersectionObserver at `rootMargin: -45% 0px -50% 0px`; `aria-current="true"` moves with the bracket. Hover is `--sig-2`.

### Measurement strip

The dense-result component in Selected Work. A flex-wrap container with `background: var(--line)` and `gap: 1px` inside a 1px `--line-strong` border; each cell is `--surface`, `min-width: 118px`, `12px/16px` padding, carrying a 17px mono value over a 12.5px label. `role="list"` / `role="listitem"` with an `aria-label`.

### Record row (publications)

`grid-template-columns: 118px 148px minmax(0,1fr) 78px` with a 1px `--line` top rule and baseline alignment. Venue (mono), status (mono + dash-coded tick), title (600, `--ink`), author position (`N / M`, right-aligned, his index bold in `--ink`), then authors on a second line in column 3 with his name in `.me` (600, `--ink`), then the artifact link. Below 900px it unstacks to block flow and the word "author" appears.

### Ledger row (projects)

Not a card. `24px 0` padding, 1px `--line` top rule. A head line of title + role + right-pushed mono year, a 74ch description, then a foot of readout cells and links. **A readout cell only appears where a real measured number exists** — three of six rows have one, and that unevenness is the design.

### Plate (stack)

One bordered container, `repeat(auto-fit, minmax(230px, 1fr))`, `gap: 1px` over a `--line` ground so every group is separated by a hairline. Group headings are 13px/600 at `wdth 112` with 0.04em tracking in `--ink-soft`; items are inline list items joined by a `·` separator drawn in `--line-strong` via `::after`. Emphasized items go `--sig` 600.

### Chip / trace link

A mono 12.5px inline link with a 1px `--sig` border, square, 24px minimum height, carrying the 14px dash-coded `.tick`. In Selected Work it anchors down to its publication record — this is what fires the measurement cursor.

### Title block (footer)

An engineering-drawing title block: a 3-column bordered plate of labelled cells (NAME / ROLE / LOCATION), with a full-width bottom cell carrying the contact keys and a right-pushed "↑ Top of record". Field labels are 12px mono in `--ink-faint` with 0.05em tracking; values 15px/500 in `--ink`.

### Signature: the measurement cursor

The one piece of delight, and it is pure CSS. Clicking a venue chip in Selected Work targets its record row, and `.record li:target` fires two 2px `--sig` cursor rules that sweep in from the left and right margins (`translateX(∓50vw)`), converge to bracket that single row, hold, and fade — a 1.9s `ease-out` pair of keyframes — while the row itself lifts to `--surface`. It is the literal gesture of dropping cursors on a trace to read a value. It needs no JavaScript, so it cannot fight `pet.js`. Under `prefers-reduced-motion` the animation is dropped and the brackets simply appear at `opacity: 1`. The header's active-section bracket is the same idiom running continuously.

### Named Rule

**The Earned-Cell Rule.** A readout cell, a measurement strip, or a chip appears because a real number or a real record exists behind it. Adding one to balance a row visually is the fastest way to turn an instrument into a decoration.

## Do's and Don'ts

### Do:

- **Do** anchor anything new to the 9px module and let the graticule show through — spacing lands on grid lines.
- **Do** give every container a 1px `--line-strong` edge and a `--surface` ground, and separate its cells with `gap: 1px` over a `--line` background.
- **Do** code state with a line pattern first (solid / dashed / dotted) and color second, so the record survives desaturation.
- **Do** keep every interactive element on the 7px key radius and everything readable square.
- **Do** put mono only where digits must align, and keep the type floor at 12px.
- **Do** keep prose measured — 38ch for the lead, 64ch for About, 70–74ch elsewhere.
- **Do** keep the hero name as real uppercase text in `.hero h1` with the `"Archivo Fallback"` stack intact, sitting in the first viewport with clear space to its right.

### Don't:

- **Don't** add a `box-shadow` with any blur or offset. The only shadow in this file is the focus inner ring.
- **Don't** introduce orange, amber, or any warm hue into page chrome. `--accent` belongs to the dragon.
- **Don't** use `z-index ≥ 999` — or, honestly, above 20. Current ceiling: skip link 20, header 10, graticule −1.
- **Don't** fix or stick anything to the bottom of the viewport, and don't let content encroach on the bottom ~96px lane.
- **Don't** add an uppercase kicker or eyebrow above a heading. The old one's words live in the hero annotations and the header; the device itself is gone.
- **Don't** number the sections (`01`, `02`). Sequence is carried by real year ticks on the axis gutter.
- **Don't** convert Projects or Publications into a card grid, and don't equalize the density of the sections — unevenness is load-bearing.
- **Don't** add fade-up, parallax, or scroll-triggered reveal animations. Motion in this world is a cursor sweep and a 0.16s color change.
- **Don't** demote a date, venue, author, or status to `--ink-faint`, and don't spend `--signal` or `--accent` on the page.
- **Don't** add a third font family or reach for a heavier weight — emphasis comes from the width axis.

## Maintenance

**What a future edit must never break.** These are not style preferences; they are the Charizard preservation contract expressed as design constraints. The full contract is authoritative; this is the short form.

1. **`assets/` is frozen.** `pet.js`, `pet.css`, and the 14 GIFs in `assets/charizard/` are not modified, renamed, or moved.
2. **The hooks stay.** `<link rel="stylesheet" href="assets/pet.css">` in `<head>`; `<script src="assets/pet.js" defer>` before `</body>`.
3. **`.hero h1` stays real text.** His name, in a `.hero h1`, in the first viewport, with clear space to its right. `pet.js` ranges over that text node to find the perch. Keep the `"Archivo Fallback"` `size-adjust: 132.8%` stack — without it the perch drifts before the webfont swaps.
4. **Both themes stay fully authored.** `data-theme="light|dark"` on `<html>`, persisted to localStorage `theme`, `prefers-color-scheme` respected when unset. The rocker's three-block CSS must keep resolving all three states.
5. **Six token names are permanent:** `--signal`, `--ink-faint`, `--accent`, `--surface`, `--line`, `--line-strong`. Retune the values if a theme changes; never rename, never delete, and never leave one undefined in either theme. `pet.css` reads them for the hearts, the sleep z's, the startle mark, the toggle ground, and the toggle chrome.
6. **`z-index` ceiling.** Nothing ≥ 999. The pet sits at 999, his toggle at 1000, his particles at 999.
7. **IBM Plex Mono stays loaded** even if the page's mono usage shrinks to zero — the pet's particles request that family by name.
8. **The bottom lane stays clear.** No fixed or sticky element at the viewport bottom; the footer keeps its 150px bottom padding; the bottom-left corner belongs to the 🔥 toggle alone. The graticule layer stays `z-index: -1`, `pointer-events: none`.
9. **The ground line stays put.** `body::after` at `bottom: 12px` is where his feet land. Moving it moves him off the design.
10. **Don't fight `pet.js`.** No global listeners or rAF loops that compete with it, no pointer interception over his area. The signature interaction is CSS-only for exactly this reason.
11. **`#pet-toggle { border-color: var(--line-strong) }`** is the only site rule that touches pet chrome. It works on source order (site CSS loads after `pet.css`); keep the `<link>` order if you keep the rule.
12. **localStorage keys `theme` and `charizard-pet-enabled`** keep their exact semantics.
