# Old website address: redirect

`https://medmate-website.netlify.app` was the website's first address. It now sends every page to the same
page on the main site, `https://medmateindia.netlify.app`, with a permanent (301) redirect.

- `_redirects` does the work; `index.html` is only a fallback with a "MedMate has moved" link.
- Netlify site: **medmate-website**, id `7114218a-069a-4291-a704-2e8eb1621ab1`, in the <medmate-netlify-account-email> account.
- To redeploy (only needed if the main address changes):

```bash
npx netlify-cli switch --email <medmate-netlify-account-email>
```

```bash
npx netlify-cli deploy --prod --no-build --dir old-site-redirect --site 7114218a-069a-4291-a704-2e8eb1621ab1
```

Switch back afterwards with `npx netlify-cli switch --email <your-netlify-account-email>`.

When MedMate gets its own domain, point this redirect (and the main site's `SITE_URL`) at that domain.
