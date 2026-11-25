# uziahmd.github.io

Uzair Ahmed's site: two hand-edited pages at the repo root, `index.html` (the home page) and `work.html` (every work entry and project in full), sharing `site.css` and `site.js`. No build step; GitHub Pages publishes the repo root. Keep every page at the root: the Charizard pet in `assets/` loads its sprites by relative URL, and `assets/` is not to be modified (the contract is in `PRODUCT.md`).

To update: edit the page (styles in `site.css`), commit, push. The live site follows within a minute; `site.css` may stay cached for a few minutes.

- Add a job: one row at the top of the Work list in `index.html` and one entry at the top of the Work section in `work.html`, with the same id; adjust the Work axis ticks if the span changes.
- Add a project: one row in each page's Projects list, with the same id.
- When a publication's status changes: its row in `index.html`, its chip in `work.html`, and hero cell 3 if the count changes.
- When the job changes: the hero affiliation line and lead, the home Work row, the `work.html` entry, and the meta and Open Graph descriptions of both pages.
- Every edit: change the "Record current to" line in both footers together.

Before pushing, run these from the repo root. The first two must print nothing; the third (the `PRODUCT.md` clause-10 guard over `site.css` and every root page) must print `0` for every file.

```bash
diff <(sed -n '/<footer class="plate-wrap">/,/<\/footer>/p' index.html) <(sed -n '/<footer class="plate-wrap">/,/<\/footer>/p' work.html)
grep -nE '<input|<textarea|contenteditable|<select|<dialog|popover|style="' site.css *.html
grep -Pzoc '(?s)(?:^|[}>,{\n])[ \t]*(?:html|body|:root)\b[^{};/]*\{[^}]*?(?<=[;{\s])(?:transform|filter|backdrop-filter|perspective|contain|will-change)\s*:[^}]*\}' site.css *.html
```
