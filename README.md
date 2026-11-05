# Kenny Nkosi-Portfolio

**[Open the public portfolio](https://kbnkosi.github.io/kenny-portfolio/)**

The main portfolio for Kenny Nkosi’s paid software implementation services. It presents web application development, business-tool connections, appointment-booking workflows and feature troubleshooting, backed by accurately scoped project evidence.

## Website files

The active website lives at the repository root. GitHub Pages publishes the `main` branch from `/(root)`.

| File | Purpose |
| --- | --- |
| `index.html` | Page content and structure |
| `styles.css` | Shared layout and visual design |
| `services.css` | Service overview and responsive explorer |
| `app.js` | Service selection, project dialogs and enquiry brief |
| `favicon.svg` | Site icon |
| `.nojekyll` | Serves the static files directly on GitHub Pages |

No dependency installation or build step is required.

## Preview and update

From the repository root:

```sh
python -m http.server 8000
```

Open `http://localhost:8000`. If JavaScript changes, run `node --check app.js`.

Edit the root website files, review the result, and commit to `main`. GitHub Pages automatically deploys updates. The public URL stays the same.

## Enquiries

The brief builder opens an email draft or copies the text. It does not send email automatically or store submissions on a server.
