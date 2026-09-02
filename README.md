# Kayley's Cambodia Trip — fundraising page

A single page telling Kayley's story and linking straight through to her
official Raisely donation page. Built as plain HTML/CSS/JS so it can be
hosted for free on GitHub Pages — no build step, no framework.

## Files

- `index.html` — all the content
- `style.css` — all the styling
- `script.js` — one small script, just for the "Support Kayley's Trip"
  bar that follows you down the page on phones
- `assets/sia-cambodia-2024.jpg` — the family photo used in the hero

## Before you publish: one fix you must make

Open `index.html` and find these two lines near the top (inside `<head>`):

```html
<meta property="og:image" content="https://REPLACE-WITH-YOUR-GITHUB-USERNAME.github.io/REPLACE-WITH-REPO-NAME/assets/sia-cambodia-2024.jpg">
<meta property="og:url" content="https://REPLACE-WITH-YOUR-GITHUB-USERNAME.github.io/REPLACE-WITH-REPO-NAME/">
```

Replace `REPLACE-WITH-YOUR-GITHUB-USERNAME` and `REPLACE-WITH-REPO-NAME`
with your actual GitHub username and the name of the repository you
create below. This is what makes the photo and title show up properly
when the link is pasted into WhatsApp or Instagram — skip it and the
link will still work, it just won't preview nicely.

## Publishing it with GitHub Pages (free)

1. Go to github.com and sign in (or create a free account).
2. Click the **+** in the top right → **New repository**. Give it a short,
   clean name — e.g. `kayley-cambodia-2026`. Keep it **Public**. Don't
   tick "Add a README" (you already have one). Click **Create repository**.
3. On the empty repo page, click **uploading an existing file**.
4. Drag in all four items from this folder — `index.html`, `style.css`,
   `script.js`, and the `assets` folder — then click **Commit changes**.
5. Go to the repo's **Settings** tab → **Pages** (left sidebar, under
   "Code and automation").
6. Under **Build and deployment → Source**, choose **Deploy from a
   branch**. Under **Branch**, choose `main` and folder `/ (root)`, then
   **Save**.
7. Wait about a minute, then refresh the Pages settings page. It will
   show your live URL — something like
   `https://yourusername.github.io/kayley-cambodia-2026/`.
8. Go back and make the one fix above with your real URL, then re-upload
   `index.html` (drag it into the repo again — GitHub will ask if you
   want to replace it, say yes).

That URL is what goes in the text message and the Instagram bio link.

## Testing the link preview

Once it's live, paste the URL into a WhatsApp chat to yourself before
sending it to anyone else — you'll see exactly what recipients will see
(photo, title, description). If the photo doesn't show up, double-check
step 8 above and give it a minute; WhatsApp and Instagram cache previews
and sometimes need a moment to refresh.

## If you want to change anything

- **Wording**: everything is plain text inside `index.html` — search for
  the sentence you want to change.
- **Colours**: all defined once at the top of `style.css` under
  `:root { ... }` — change a value there and it updates everywhere that
  colour is used.
- **The CCF logo**: we deliberately left this out rather than copy CCF's
  logo file without checking their permissions first (see the note in
  the chat). If you'd like it added, grab the logo from
  cambodianchildrensfund.org (or ask Christy Dangerfield if the school
  has an approved version for supporter pages), save it as
  `assets/ccf-logo.png`, and it can be dropped into the hero or footer.
- **A CCF video**: same approach — pick one from CCF's YouTube channel
  (youtube.com/@cambodianchildrensfundorg) and we can embed it properly.
