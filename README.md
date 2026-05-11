# ScholarSkool (static)

Plain **HTML + CSS + JS** in `docs/` so [GitHub Pages](https://pages.github.com/) works without Actions, without Next.js, and without `basePath` issues.

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
