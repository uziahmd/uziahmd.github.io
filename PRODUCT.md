# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, no dependencies, no trackers. Three hand-edited pages at the repo root, `index.html` (the home page), `work.html` (every work entry and project in full) and `publications.html` (the full publication record), share `site.css` and `site.js`; each keeps the two-line theme-boot script inline in its `<head>`, the footer is copied to every page byte for byte, and the header differs only in where its links point. Every page stays at the root because `assets/pet.js` loads its sprites by relative URL. Deployed as a GitHub Pages **user site** from the repo root: `https://uziahmd.github.io`. Sibling assets: `site.css`, `site.js`, `Uzair_Ahmed_Resume.pdf`, and `assets/` (the Charizard pet — see Brand Commitments).

## Users

**Primary:** people who decide about Uzair Ahmed and are reading under time pressure.

- **Recruiters and hiring engineers** — skimming with his résumé PDF open in the next tab, under office ceiling light, deciding in under a minute whether to keep reading.
- **Principal investigators / lab leads** — checking whether the publication record, author positions, and venues are real before replying to an email; often late, often on a dark screen.
- **Graduate admissions readers** — working a stack at a desk by a window at 10am, needing venue, year, status, and author position without hunting.

Secondary: collaborators and freelance clients arriving from GitHub or LinkedIn.

Every one of them arrives cold, stays briefly, and leaves with either a decision or nothing. The site is read in daylight more often than at night; light is the primary theme and gets the rigor.

## Product Purpose

A short home page, with every work entry, project and publication in full one click away on `work.html` and `publications.html`, that proves, to a stranger with twenty seconds, that Uzair Ahmed builds production AI/ML systems **and** the evaluation that shows they work — and that gives a reviewer who stays five minutes a citable, verifiable publication record.

What the site must prove, in order:

1. **He ships.** Real systems under real constraints on real hardware — a streaming VLM on one V100, a productionized LLM API service.
2. **He measures.** Every claim carries its number, unit, and scope (~2 Hz per-step decision, O(1) memory, +17 pts AUROC from 0.503 to 0.676, 693 users / 8 datasets, 27.3% of cases).
3. **The record is checkable.** Venue, year, status, author position, and artifact link for every publication — the same facts a PI or admissions reader would otherwise have to ask for.
4. **He is reachable.** Email is the primary action in the first viewport and again in the footer contact bar.

Success is a reply: an email, an interview, an application read further. Not time-on-page.

**Surface mode: Persuade.** This is a persuasion surface, not a documentation or utility surface. It leads with claim and evidence, sequences toward contact, and treats every section as something a skeptical reader is auditing. It is not a blog, not a CMS, not a link tree.

## Positioning

Most researcher portfolios assert; this one measures. The differentiating mechanism is that **nothing is claimed without its measurement beside it** — value, unit, date, venue, author position, status — and the visual world enforces it (see DESIGN.md). A neighboring portfolio cannot truthfully copy the numbers, the author positions, or the specific system work; and the pairing of production engineering with evaluation rigor is the actual position: he is not a pure researcher and not a pure engineer, and the site should never flatten him into either.

Second, structurally: he is an early-career researcher whose record is genuinely mixed-status — one first-author paper, several middle-author papers, two accepted (ACM IMWUT 2026 CrossShift; EMNLP 2026), none currently under review or in preparation on the record. The site's answer is to **state the status plainly rather than blur it**. Honesty about position is the credibility asset; concealing it would forfeit the only thing a PI is checking for.

## Operating Context

- **Read cold, once, briefly.** No onboarding, no return visits, no account. First viewport must carry claim + contact; the measured evidence sits one click away on `work.html` and `publications.html` (the owner removed the hero's measurement cells on 2026-11-25).
- **Read alongside the résumé PDF.** The site and `Uzair_Ahmed_Resume.pdf` must not contradict each other. When the résumé changes, the site's facts change with it.
- **Read on a laptop, mostly.** Desktop is the decision context; mobile is the follow-up glance. The layout must not lose chronology when the axis gutter collapses.
- **Facts age.** Statuses move (under review → accepted → published), roles change, new venues land. The record is expected to be edited by hand in `index.html`, `work.html`, `publications.html` and `site.css`, by its owner, without a build step. An item keeps the same id on every page that carries it. A paper's status appears in three places — its brief row on `index.html`, its full row on `publications.html` and its chip on `work.html` — and all three must agree.

## Capabilities and Constraints

**What the site does:** a home page with five bands — Work, Publications and Projects in brief, one line or short row per item with no link on any row, each band opening in full from the one Details key in its heading row (Work and Projects on `work.html`, Publications on `publications.html`); Toolkit; Recognition — plus a hero carrying a portrait, the thesis and lead, and keys for email, résumé, Work and Publications, a footer contact bar, a light/dark theme button whose label names the theme it switches to, an active-section indicator in the header, an anchor-driven "measurement cursor" that brackets a publication row when a link lands on it (chips on `work.html` link to `publications.html#pub-*`, and the cursor fires on arrival; a `#pub-*` link to the home page lands on the brief row; on a lab paper's full row a "← back to …" link returns to that lab's entry on `work.html`), and the Charizard pet on every page.

**Content-truth rules (binding — these govern every future edit):**

1. **Status vocabulary is fixed and exhaustive.** A publication carries exactly one of: *published* or *accepted* (bare year, e.g. `2024`; by the owner's ruling of 2026-11-25 an accepted paper shows its year alone, because every listed paper is accepted or published), *under review* / *review*, *in preparation* / *in prep*. There is no "forthcoming", no "to appear", no "submitted to X" used as a venue. The status is visually coded (solid / dashed / dotted trace) as well as written; both must agree.
2. **Author position is always shown.** Every record states his position as `N / M` (his index, total authors) and marks his name in the author list: the `N / M` is on both its brief row (`index.html`) and its full row (`publications.html`), and the marked author list is on the full row. Never omit the position to make a middle-author paper read like a first-author paper. Never reorder an author list.
3. **A venue is a venue.** `Working paper` is the venue for an unsubmitted paper. Do not promote a target venue into the venue column before submission, and do not write a conference name for a paper only under review there without the dashed status beside it.
4. **Every number is a measured number with a scope.** `+17 pts` is *AUROC, 0.503 → 0.676, over the user-independent baseline on DeepStress* — the scope travels with the number, and points are never written as percent. Rounded and approximate values are marked (`~2 Hz`, `~550`, `~$40K`). Never state a number the underlying work did not produce.
5. **No invented claims.** No fabricated testimonials, citation counts, employer logos, metrics, awards, dates, or "trusted by" content. No placeholder social proof. If a fact is not on hand, the section shrinks; it does not get filled.
6. **Density follows substance.** A project with a real measured number gets a readout cell; one without gets none. Do not add a readout cell to balance a row visually.
7. **NDA and client work stays bounded.** `Allah-u-Allam` is marked *client work · NDA* and carries no client name, no metrics, and no link. Future client work follows the same shape unless the owner clears it on the record (see Evidence on Hand, 2026-11-25, for the ETRI drone app).
8. **Links open honestly.** External links carry `target="_blank" rel="noopener"`, a visible `↗`, and a screen-reader "(opens in new tab)". Dead links are removed, not left pointing at a 404.

**Technical constraints:**

- HTML pages at the repo root plus `site.css` and `site.js`; no build, no framework, no bundler, no includes. An edit is a text edit plus a `git push`.
- Two webfont families only (Archivo variable, IBM Plex Mono), one Google Fonts request. IBM Plex Mono must stay loaded on every page regardless of page use — the pet's particles request it (see Brand Commitments).
- `assets/pet.js`, `assets/pet.css`, and `assets/charizard/` are frozen third-party-shaped code: not to be modified, renamed, or moved.
- No analytics, no cookies, no third-party scripts beyond the font stylesheet.
- `_config.yml` keeps `DESIGN.md`, `PRODUCT.md`, `README.md`, `.impeccable/` and `.claude/` out of the GitHub Pages build; they stay tracked in the repo by the owner's choice.
- The one image is `uzi_img.jpeg` at the repo root; no other imagery, ever, unless it is a real artifact the owner supplies.

**Explicitly undecided:** whether to add a writing/notes section; whether to host the publication PDFs directly; whether to add a Korean-language version.

## Brand Commitments

**Name and voice.** "Uzair Ahmed", set as real text (never an image, never a logotype file). Role line: *AI / ML Researcher & Engineer* — it lives in the home page's `<title>` and in the footer contact bar's identity line; the hero annotation carries his actual employer title, *AI Researcher, KPST*. Location: *Daejeon, Korea*. Voice is plain, first-person, technically specific, and unhedged about numbers — never marketing-superlative, never "passionate about".

**The Charizard pet is permanent product truth, not decoration.** A pixel-art Charizard lives on every page: he glides, hovers, walks the bottom of the viewport, startles at fast cursors, gets petted by lingering ones, waves on first landing, naps after 60s idle, wakes on activity, breathes fire when the visitor types "fire", sneezes when the theme changes, carries a dark-mode tail glow, perches beside the hero name when the home page loads at its top (on an arrival at a fragment, and on `work.html` and `publications.html`, which have no hero, he arrives in flight), and can be switched off with a 🔥 toggle in the bottom-left corner. He is the site's most-loved asset and the single piece of personality in an otherwise measured document. The colophon says so out loud: *"A Charizard lives here. Type "fire", or switch him off with the 🔥 button in the bottom-left corner."* (and, below 700px where he is hidden, tells the reader to open the site on a laptop).

**Preservation contract (summary — the full text is authoritative; every clause is non-negotiable):**

1. On every page: `assets/pet.css` linked in `<head>`; `assets/pet.js` deferred before `</body>`. Neither file, nor the 14 GIFs in `assets/charizard/`, may be modified. `assets/pet.css` is linked before `site.css`, and `site.js` loads before `assets/pet.js`.
2. On `index.html`: a `.hero h1` containing his name as **real text**, sitting in the first viewport with clear space to its right — pet.js measures a Range over that text to place the perch. No other page carries an element with class `hero`; there he spawns in flight.
3. A working light/dark toggle on every page, setting `data-theme="light|dark"` on `<html>`, persisted to localStorage key `theme`, respecting `prefers-color-scheme` when unset. Both themes fully authored.
4. Six CSS custom properties must exist on `:root`, by these exact names, in both themes, with adequate contrast: `--signal`, `--ink-faint`, `--accent`, `--surface`, `--line`, `--line-strong`. pet.css reads them.
5. No `z-index ≥ 999` anywhere in site CSS. The pet sits at 999, his toggle at 1000.
6. `"IBM Plex Mono"` stays loaded on every page — his particles request it.
7. The bottom ~96px of the viewport stays clear of fixed/sticky elements, and the palette must not clash with an orange dragon in either theme.
8. No global listeners or rAF loops that fight pet.js; no pointer interception over his area; no renaming or moving `assets/`.
9. localStorage keys `theme` and `charizard-pet-enabled` keep their exact semantics.
10. `html` and `body` never carry `transform` (nor `translate`, `rotate`, `scale` or `transform-style`), `filter`, `backdrop-filter`, `perspective`, `contain`, or `will-change`, prefixed or not. Any of them makes `body` the containing block for the three pet nodes, so the dragon and his ground line un-fix from the viewport together, silently, visible only after a scroll. Page-level effects go on `main`, `header`, or a wrapper, never on a pet ancestor. Guard, whole-file because `body{` is multi-line in `site.css`: `grep -Pzoc '(?s)(?:^|[}>,{\n])[ \t]*(?:html|body|:root)\b[^{};/]*\{[^}]*?(?<=[;{\s])(?:-(?:webkit|moz|ms|o)-)?(?:transform(?:-style)?|translate|rotate|scale|filter|backdrop-filter|perspective|contain|will-change)\s*:[^}]*\}' site.css *.html` must print `0` for every file.
11. Dark `--sig` stays in the cyan neighbourhood (hue roughly 188–200°). `assets/pet.css` hardcodes `rgba(96,205,255)` for the dark tail glow, so the dark channel may be retuned in lightness and chroma but never moved off hue. Light `--sig` is unconstrained.
12. No `<input>`, `<textarea>`, `contenteditable`, or free-text `<select>` on any page. The "fire" listener is on `window` with no target check, so typing f-i-r-e inside any field breathes fire rather than being swallowed. A filter, if one is ever added, is `<button>` chips.
13. `:target` belongs to `.record li` alone (the measurement cursor, on the brief rows of `index.html` and the full rows of `publications.html`; `work.html` uses no `:target` styling). It is never used for tab, panel, or view state; a hash-driven view switcher must reveal its destination panel before the hash lands.
14. On `index.html`, the perch is a testable line, not prose: at every viewport width from 700 to 1920px and at browser default font sizes of 16, 20, and 24px, the hero name renders on one line at 56px or larger (64px or larger at 900px and above; at 700px a 64px name leaves no room for the perch), and `textRight + 124 <= innerWidth`, where `textRight` is the right edge of a `Range` over the `.hero h1` text node. The h1's `clamp()` bounds are written in `px`, never `rem`, so a reader's font-size preference cannot overflow or wrap the name into the perch.

A redesign that breaks any clause is a failed redesign, regardless of how it looks.

## Evidence on Hand

**Real and verifiable (in the published pages):**

- 5 publication records, in brief on `index.html` and in full on `publications.html`: ACM IMWUT 2026 (accepted), EMNLP 2026 (accepted — decision 20 Aug 2026; the conference has not been held yet, so arXiv's comments field may still read "In submission". The owner's confirmation governs; do **not** demote this back to *under review* from an online source), CHI EA 2025, ACM IMWUT 2024, JKAIA 2023 (first author). On `publications.html` four titles are live links — `doi.org/10.1145/3831954` (CrossShift; correct per the camera-ready, and expected to 404 until ACM registers the Sep 2026 issue — do not remove it as dead), `arxiv.org/abs/2606.23671` (EMNLP), `dl.acm.org/doi/full/10.1145/3706599.3719776` (CausalCFF), `dl.acm.org/doi/10.1145/3678578` (IMWUT 2024). Three records also carry a code repo (`Kaist-ICLab/CrossShift`, `ngqm/prefill-introspection`, `Kaist-ICLab/CausalCFF`) and CausalCFF carries a talk/teaser video.
- 4 work entries with measured results: KPST (Feb 2026 – present), KAIST K&D Lab (Aug 2025 – Feb 2026), KAIST ICLab (May 2023 – Jun 2025), DocsHunt AI (Jun – Aug 2024).
- 6 projects, 4 with public GitHub repos: `streaming_hazard_`, `smart_bin`, `Siguature_Verification`, `AlphaHand`; plus `Kaist-ICLab/CausalCFF`.
- 6 recognitions, 2018–2025.
- `Uzair_Ahmed_Resume.pdf` at the repo root, linked twice on `index.html` (hero and footer) and once in the footer of `work.html` and of `publications.html`.
- Contact: `uziahmd@outlook.com`, `github.com/uziahmd`, `linkedin.com/in/uziahmd`.

**Owner-supplied 2026-09-08 (verbatim; never re-derive any of these from a search):**

- Google Scholar: `https://scholar.google.com/citations?user=iYROzvkAAAAJ&hl=en` — goes in the footer contact bar beside GitHub / LinkedIn / Résumé; the single strongest credibility link for the PI and admissions audience.
- ORCID: `https://orcid.org/0009-0001-9824-2838` — same placement.
- Portrait: `uzi_img.jpeg` at the repo root (400×400 JPEG, 24 KB, taken 2026; captioned "Uzair Ahmed, 2026") is the one real image the site may carry. It stays out of `assets/` (frozen). No other imagery: no stock, no generated.
- EMNLP 2026 decision date: 20 Aug 2026.
- JKAIA = Journal of the Korean Artificial Intelligence Association, `https://aiassociation.kr/`. The 2023 paper was **non-archival**: no DOI and no stable link exist, and none may be constructed. The venue name may link to the association site; the title stays unlinked.
- DocsHunt, the measured result behind the old "roughly triple sustained throughput" line: document sections were generated sequentially; with harness and context engineering the later sections did not need the earlier ones written first, so he ran several model instances in parallel. Average generation time per document on his pipeline fell from **10 s to 3 s**. That is the number and its scope; the unscoped multiplier and the p95/p99 mention come out.
- HSN Academy: 2019–2022. AlphaHand: 2023.
- Allah-u-Allam corpus: "96+" stands (the collection reached about 100 texts).
- Smart Binarization: the site's `64×` on Gemma-3-1B and the résumé's `3.3×` on OPT-1.3B are **two different results on two models**, both in the repo README (`github.com/uziahmd/smart_bin`: "Gemma-3-1B: Smart is 64× better than magnitude at 50% salient"; "OPT-1.3B: +5.4% degradation at 50%"). Either may be shown with its model named; neither replaces the other. The project is **2026** (repo created 2026-01-14, last push 2026-01-21); the site's "2025" was wrong.
- Availability: the owner chose **not** to state availability or an ask. No availability line ships; absent, not vague.
- Recognition: the site keeps all six entries with years; the owner will bring the résumé into line.

**Owner-supplied 2026-11-25:** the KPST detail copy on `work.html` (figures, the ETRI client name, the drone-app authorship line) is published on the owner's word.

**Owner-supplied 2026-11-25, second round:** the owner removed the working paper from the publication record and the three cells from the hero, asked for a Details key for Work and for Publications (Projects carries one in the same pattern), had "LLM Difficulty Perception" labelled a project on `work.html`, and had the word "accepted" taken off the publication rows and chips ("all of the listed papers are accepted"); the CCTV block's heading on `work.html` ("Real-Time" included) and the drone block's lead sentence are his wording.

**Known absences future work must not fabricate:** no citation counts, no h-index, no reference letters, no testimonials, no employer logos, no press coverage, no hosted PDFs of the unlinked papers.

**Not an absence — do not delete as invented:** the CausalCFF talk/teaser video, `https://www.youtube.com/watch?v=7Ov20nvivYU`, is real and verified, and is linked as `video ↗` on the CHI EA 2025 record. It is the only recording that exists; no other talk video may be added.

## Product Principles

1. **A claim without its measurement is not shipped.** Value, unit, scope, and date travel together or the claim comes out.
2. **State the status; never blur it.** Accepted, under review, and in preparation are different words with different weights, and a reader who catches the site blurring them stops trusting all of it.
3. **Twenty seconds is the design budget.** Claim and contact must land in the first viewport, with the evidence one click away (the owner removed the hero's measurement cells on 2026-11-25); everything after is for the reader who chose to stay.
4. **The dragon is a feature, not a liability.** Every layout, palette, and z-index decision is made around him. When personality and layout convenience conflict, personality wins.
5. **Few files, no build, owner-editable.** Styles and behaviour live once, in `site.css` and `site.js`; header and footer markup is copied by hand between pages and checked with `diff`, never generated. Any improvement that requires a toolchain to update a date has made the site worse.

## Accessibility & Inclusion

- Skip-to-content is the first focusable element on every page; `main` is the target.
- Every interactive element has a visible focus ring that survives both themes and all three grounds.
- Nothing functional renders below 12px; interactive hit areas are ≥24px, primary keys 44px.
- Status is coded by line pattern (solid / dashed / dotted) **before** it is coded by color, so the record survives desaturation and colorblindness.
- `prefers-reduced-motion` is honored site-wide and by the pet (static perch, no particles).
- The pet hides below 700px viewport width; the site must be complete and persuasive without him.
