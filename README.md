# ScholarSkool (static)

Plain **HTML + CSS + JS** in `docs/` so [GitHub Pages](https://pages.github.com/) works without Actions, without Next.js, and without `basePath` issues.

## Publish (from scratch)

1. On GitHub, create an **empty** repository first (same name you will use in `git remote`), e.g. [github.com/new](https://github.com/new) → name **`scholarskool-clone`** or **`scholarskool-static`**. Do **not** add README, .gitignore, or license (avoids merge conflicts).
2. From this folder:

```bash
cd scholarskool-static
git init -b main
git add .
git commit -m "Initial static site"
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

3. GitHub → **Settings** → **Pages**  
   - **Source:** Deploy from a branch  
   - **Branch:** `main`  
   - **Folder:** `/docs`  
   - Save.

4. After 1–2 minutes, open:

`https://YOUR_USER.github.io/YOUR_REPO/`

Use a **hard refresh** (Cmd+Shift+R) if an old site was cached.

## Edit locally

Open `docs/index.html` in a browser, or run any static server from `docs/`:

```bash
cd docs && python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.
