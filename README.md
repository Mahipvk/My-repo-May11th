## CelebScope — Global Celebrity Gossip Hub

A lightweight static website showcasing celebrity gossip stories from around the world with client‑side filtering, search, and country browsing.

### Features

- Trending tags and instant search
- Country filter and country page
- Story detail page with related items
- Responsive, dark-first design with theme toggle
- Zero build/runtime dependencies (pure HTML/CSS/JS)

### Getting Started

Serve the `public` directory with any static server.

```bash
# Python
python3 -m http.server --directory public 8080
# or
# Node (if installed)
npx serve public -l 8080 --single
```

Open `http://localhost:8080` in your browser.

### Structure

- `public/index.html`: Homepage with search, sort, and country filter
- `public/country.html`: Country-specific listing
- `public/article.html`: Story detail
- `public/assets/css/styles.css`: Styles
- `public/assets/js/data.js`: Sample dataset (extend/replace with real content)
- `public/assets/js/*.js`: Utilities, rendering, and page logic

### Content Guidelines

- This project is for entertainment. Avoid defamation, privacy violations, or misinformation.
- When using real names or events, cite credible sources and prefer neutral tone.
- Respect takedown requests and comply with local laws where hosted.

### Customizing Data

Edit `public/assets/js/data.js` and modify `countries` and `stories`. Each story has:

```js
{
	id: 1001, // unique numeric/string id
	title: 'Headline',
	snippet: 'Short summary',
	content: ['Paragraph 1', 'Paragraph 2'],
	date: '2025-08-12', // ISO date
	image: 'https://...jpg',
	country: { code: 'US', name: 'United States', flag: '🇺🇸' },
	tags: ['music', 'fashion'],
	celebrities: ['Name A', 'Name B']
}
```

### Deployment

- Any static host works (GitHub Pages, Netlify, Vercel). Set the publish directory to `public`.
- For clean internal links, this site uses absolute paths like `/article.html`. Ensure your host serves those files (or enable redirects to root for SPA-like behavior).

### License

MIT

# My-repo-May11th