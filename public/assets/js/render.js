/* Rendering helpers */
const { qs, qsa, fmtDate, slugify, linkToArticle, linkToCountry } = window.CelebScopeUtils;

const renderTag = (tag) => {
	const el = document.createElement('button');
	el.className = 'tag';
	el.textContent = `#${tag}`;
	el.addEventListener('click', () => {
		const input = qs('#searchInput');
		if (input) {
			input.value = tag;
			input.dispatchEvent(new Event('input'));
		}
	});
	return el;
};

const renderCard = (story) => {
	const a = document.createElement('a');
	a.href = linkToArticle(story.id);
	a.className = 'card';
	a.innerHTML = `
		<img class="media" src="${story.image}" alt="${story.title}" loading="lazy" />
		<div class="body">
			<div class="meta">
				<span>${story.country.name}</span>
				<span>•</span>
				<span>${fmtDate(story.date)}</span>
			</div>
			<h3 class="title">${story.title}</h3>
			<p class="desc">${story.snippet}</p>
			<div class="tags">${story.tags.map(t => `<span class='tag' tabindex='-1'>#${t}</span>`).join('')}</div>
		</div>
	`;
	return a;
};

const populateCountryFilter = (countries, selectElId = 'countryFilter') => {
	const select = qs(`#${selectElId}`);
	if (!select) return;
	const sorted = countries.slice().sort((a, b) => a.name.localeCompare(b.name));
	for (const c of sorted) {
		const opt = document.createElement('option');
		opt.value = c.code;
		opt.textContent = `${c.flag} ${c.name}`;
		select.appendChild(opt);
	}
};

const mountTrendingTags = (tags) => {
	const wrap = qs('#trendingTags');
	if (!wrap) return;
	wrap.innerHTML = '';
	tags.slice(0, 12).forEach(tag => wrap.appendChild(renderTag(tag)));
};

const mountGrid = (stories, gridId = 'resultsGrid') => {
	const grid = qs(`#${gridId}`);
	if (!grid) return;
	grid.innerHTML = '';
	stories.forEach(s => grid.appendChild(renderCard(s)));
};

const renderArticle = (story) => {
	const root = qs('#article');
	if (!root) return;
	root.innerHTML = `
		<div class="meta">
			<a href="${linkToCountry(story.country.code)}">${story.country.flag} ${story.country.name}</a>
			<span>•</span>
			<span>${fmtDate(story.date)}</span>
		</div>
		<h1>${story.title}</h1>
		<img class="hero-img" src="${story.image}" alt="${story.title}" />
		<div class="content">${story.content.map(p => `<p>${p}</p>`).join('')}</div>
		<div class="tags">${story.tags.map(t => `<span class='tag' tabindex='-1'>#${t}</span>`).join('')}</div>
	`;
};

const mountRelated = (relatedStories) => {
	const wrap = qs('#related');
	if (!wrap) return;
	wrap.innerHTML = '';
	relatedStories.forEach(s => {
		const a = document.createElement('a');
		a.href = linkToArticle(s.id);
		a.className = 'item';
		a.innerHTML = `
			<img src="${s.image}" alt="${s.title}" loading="lazy" />
			<div>
				<h4 class="title">${s.title}</h4>
				<div class="meta">${s.country.flag} ${s.country.code} • ${fmtDate(s.date)}</div>
			</div>
		`;
		wrap.appendChild(a);
	});
};

window.CelebScopeRender = { renderTag, renderCard, populateCountryFilter, mountTrendingTags, mountGrid, renderArticle, mountRelated };

