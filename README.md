# Ginko Hsu website — lightweight update

## What's new
- `nav.html`: the single shared sidebar. OEMK opens into Overview, #0 Elephant Tale and #1 Habitat.
- `site.js`: shared navigation fetch, highlights the current page, and auto-opens the OEMK submenu on OEMK pages.
- `oemk.html`: overview with your original text and image references preserved.
- `oemk-0.html` and `oemk-1.html`: intentionally minimal phase pages. Add your own text and images where marked `EDIT HERE`.
- `style.css`: original design preserved with appended sidebar, project typography and mobile improvements.
- Other original project pages: artwork HTML retained, repeated inline nav scripts replaced by `site.js`; page titles corrected.

## Publish / preview
1. **Back up your existing site.** Do not delete the `resources/` folder: image, audio, Instagram icon, CV and portfolio files are NOT in this archive.
2. Copy these HTML/CSS/JS files into the same directory as the existing files. Keep your original `resources/` folder in place.
3. Preview through a local HTTP server, not by double-clicking an HTML file: the navigation is loaded using `fetch('nav.html')` and some browsers block this for `file://` pages.
   Example: open a terminal in this folder and run `python3 -m http.server 8000`, then visit `http://localhost:8000/`.
4. Upload the updated files to your hosting and test desktop/mobile navigation, image links and PDF links.

## How to add another OEMK phase
1. Duplicate `oemk-1.html` as `oemk-2.html` and replace page title and content.
2. Add `<li><a href="oemk-2.html">#2 Your phase</a></li>` inside the OEMK submenu in `nav.html`.
3. Add `oemk-2.html` to the `oemkPages` array in `site.js` so the submenu automatically opens on that phase.

## Important editorial notes
- Neither artwork images for Elephant Tale/Habitat nor finalized phase statements were uploaded; the two phase pages have explicit placeholders, not fabricated artwork records.
- Your original `info.html` CV and portfolio links are unchanged; verify those files in `resources/` are the desired current versions.
- Existing artwork content and original `resources/...` paths are retained.
