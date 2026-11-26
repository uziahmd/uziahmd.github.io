# uziahmd.github.io

Uzair Ahmed's site: three hand-edited pages at the repo root, `index.html` (the home page), `work.html` (every work entry and project in full) and `publications.html` (the full publication record), sharing `site.css` and `site.js`. No build step; GitHub Pages publishes the repo root. Keep every page at the root: the Charizard pet in `assets/` loads its sprites by relative URL, and `assets/` is not to be modified (the contract is in `PRODUCT.md`).

To update: edit the page (styles in `site.css`), commit, push. The live site follows within a minute; `site.css` may stay cached for a few minutes.

- Add a news item: copy one `<li>` line to the top of the News list in `index.html` and change its date (`Mon YYYY`) and text; newest first. Change the News axis tick if the year is new.
- Add a job: one row at the top of the Work list in `index.html` (one first-person sentence) and one entry at the top of the Work section in `work.html` (workplace, role and dates in its head, then one block per project), with the same id; adjust the Work axis ticks in `index.html` and `work.html` if the span changes.
- Add a project: one row in the Projects list of `work.html`; adjust the Projects axis ticks there if the span changes. The home page lists no projects (HSN Academy sits there under "Beyond research", with the same id as its `work.html` row).
- Add or change a publication: its brief row in `index.html` (venue, status, the title linked to the paper if it has a link, the author list with `<span class="me">` around his name), its full row in `publications.html` with the same `pub-*` id, and its chip in `work.html` if it has one. The status, written and dash-coded (class `dash` or `dot` on `.pub-status` and `.chip`), shows in all three places and changes in all three together. Adjust the Publications axis ticks in `index.html` and `publications.html` if the span changes, and the description and Open Graph description of `publications.html` if the list of venues changes (`index.html`'s description names them too).
- When the job changes: the hero's "Now:" line and affiliation line, the home Work row, the `work.html` entry, and the meta and Open Graph descriptions of `index.html` and `work.html`.
- Every edit: change the "Record current to" line in every page's footer together.

Before pushing, run these from the repo root. The first four must print nothing (the first two compare each detail page's footer, and its header with link targets blanked, against `index.html`'s; the targets differ by design; the fourth looks for a link whose `#id` no longer exists on its target page). The fifth (the `PRODUCT.md` clause-10 guard over `site.css` and every root page) must print `0` for every file. A new page goes into both loops.

```bash
for p in work.html publications.html; do diff <(sed -n '/<footer class="plate-wrap">/,/<\/footer>/p' index.html) <(sed -n '/<footer class="plate-wrap">/,/<\/footer>/p' "$p") || echo "^ footer differs: $p"; done
for p in work.html publications.html; do diff <(sed -n '/<header class="bar">/,/<\/header>/p' index.html | sed -E 's/href="[^"]*"/href=""/g') <(sed -n '/<header class="bar">/,/<\/header>/p' "$p" | sed -E 's/href="[^"]*"/href=""/g') || echo "^ header differs: $p"; done
grep -nE '<input|<textarea|contenteditable|<select|<dialog|popover|style="' site.css *.html
for f in *.html; do grep -oE 'href="[^":]*#[^"]+"' "$f" | sed -E 's/^href="([^"#]*)#([^"]+)"$/\1|\2/' | while IFS='|' read -r p id; do t=${p:-$f}; grep -q "id=\"$id\"" "$t" 2>/dev/null || echo "dangling: $f -> ${p:-$f}#$id"; done; done
grep -Pzoc '(?s)(?:^|[}>,{\n])[ \t]*(?:html|body|:root)\b[^{};/]*\{[^}]*?(?<=[;{\s])(?:-(?:webkit|moz|ms|o)-)?(?:transform(?:-style)?|translate|rotate|scale|filter|backdrop-filter|perspective|contain|will-change)\s*:[^}]*\}' site.css *.html
```
