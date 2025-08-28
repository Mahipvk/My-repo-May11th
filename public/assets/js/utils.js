/* Utils */
const qs = (sel, el = document) => el.querySelector(sel);
const qsa = (sel, el = document) => Array.from(el.querySelectorAll(sel));
const fmtDate = (iso) => new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
const byNewest = (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime();
const byOldest = (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime();
const byTitleAsc = (a, b) => a.title.localeCompare(b.title);
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const getParam = (key) => new URLSearchParams(location.search).get(key);
const unique = (arr) => Array.from(new Set(arr));
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const setYear = () => { const y = new Date().getFullYear(); const el = qs('#year'); if (el) el.textContent = String(y); };

/* Simple client-side router helpers */
const linkToArticle = (id) => `/article.html?id=${encodeURIComponent(id)}`;
const linkToCountry = (code) => `/country.html?code=${encodeURIComponent(code)}`;

window.CelebScopeUtils = { qs, qsa, fmtDate, byNewest, byOldest, byTitleAsc, slugify, getParam, unique, clamp, setYear, linkToArticle, linkToCountry };

