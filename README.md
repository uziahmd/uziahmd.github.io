# Uzair Ahmed — Portfolio

A self-contained static portfolio site (single `index.html`, no build step, no dependencies).
Design: an "instrument readout" — cool slate + an amber signal accent, Bricolage Grotesque / IBM Plex.

## Files
- `index.html` — the whole site
- `Uzair_Ahmed_Resume.pdf` — linked from the site
- `assets/WorldQuant-Gold-Certificate.pdf` — linked from Recognition

## Preview locally
Just open `index.html` in a browser (double-click, or `start index.html`).

## Deploy to GitHub Pages  →  https://uziahmd.github.io

This uses a **user site** repo, which GitHub Pages serves automatically from the repo root.

1. Create a new **empty** repo on GitHub named exactly:
   **`uziahmd.github.io`**  (Public, no README/license).
   → https://github.com/new

2. From this folder, push it:
   ```bash
   git remote add origin https://github.com/uziahmd/uziahmd.github.io.git
   git push -u origin main
   ```
   (The local repo is already initialized and committed.)

3. Wait ~1 minute. Your portfolio is live at **https://uziahmd.github.io**
   — that is the URL to paste into the hackathon's "Portfolio URL" field.

> User-site repos (`<username>.github.io`) publish automatically — no need to toggle
> anything in Settings → Pages. For a differently-named repo you'd instead enable
> Pages under Settings → Pages → Deploy from branch → main.

## Editing later
Everything is in `index.html`. Change text/links, commit, and `git push` — the live
site updates within a minute.
