# Edwin Njoroge Portfolio

Static portfolio site published with GitHub Pages.

## Public URL

https://edkimnjoroge.github.io/portfolio/

## Local Preview

Run from the repository root:

```bash
python -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Main Files

- `index.html` - primary one-page portfolio
- `index-light.html` - light-theme variant
- `data/content.js` - profile, resume, contact, and navigation copy
- `data/portfolio.js` - project and creative portfolio items
- `js/app.js` - rendering, translation, theme, and portfolio behavior
- `js/init.js` - legacy template interactions and contact mailto behavior
- `assets/cv/Edwin_Njoroge_CV.pdf` - downloadable CV file
- `sitemap.xml` and `robots.txt` - search engine metadata for GitHub Pages

## Update Flow

1. Edit content in `data/content.js` and project details in `data/portfolio.js`.
2. Preview locally with `python -m http.server 4173`.
3. Check `git status` and commit the change.
4. Push to `origin/main` when ready to publish.

## Notes

- The site is static. The contact form opens the visitor's email client with a prefilled message instead of using a backend.
- Keep the public positioning software-first, with systems support, application support, infrastructure, and automation visible in the project evidence.
