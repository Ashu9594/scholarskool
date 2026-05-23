# ScholarSkool (static)

**Status: site paused.** `docs/` only serves a temporary offline page. The full site is saved in `paused-site/` for when you want to go live again.

Plain **HTML + CSS + JS** in `docs/` (when live) so [GitHub Pages](https://pages.github.com/) works without Actions, without Next.js, and without `basePath` issues.

## Publish (from scratch)

Remote repo: **[github.com/Ashu9594/scholarskool](https://github.com/Ashu9594/scholarskool)**.

1. GitHub → **Settings** → **Pages**  
   - **Source:** Deploy from a branch  
   - **Branch:** `main`  
   - **Folder:** `/docs`  
   - Save.

2. After 1–2 minutes, open:

**[https://ashu9594.github.io/scholarskool/](https://ashu9594.github.io/scholarskool/)**

Pushes from this folder:

```bash
cd scholarskool-static
git remote set-url origin https://github.com/Ashu9594/scholarskool.git
git push -u origin main
```

Use a **hard refresh** (Cmd+Shift+R) if an old site was cached.

## Edit locally

Open `docs/index.html` in a browser, or run any static server from `docs/`:

```bash
cd docs && python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Restore live site

1. Copy `paused-site/*` back into `docs/` (restore `index.html`, `css/`, `js/`).
2. Add `docs/CNAME` with `scholarskool.com` if using the custom domain.
3. Push to `main`, then GitHub **Settings → Pages** → set custom domain and **Enforce HTTPS**.
