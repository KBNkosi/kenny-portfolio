# Public implementation portfolio

This folder contains the approved client-facing portfolio for Kenny Nkosi.

GitHub Pages source: `main` branch, `/docs` folder. No build step is needed.

Edit `index.html` for page content, `styles.css` and `services.css` for appearance, and `app.js` for the service explorer, project dialogs and enquiry brief. The form opens an email draft or copies a brief; it does not send email or store submissions.

Preview locally from this directory with `python -m http.server 8000`. Check JavaScript syntax with `node --check app.js`.

The earlier React application remains in the repository's `src` directory. GitHub Pages serves this folder.
