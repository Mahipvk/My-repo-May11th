/* Home page script */
(function() {
	const { qs, qsa, getParam, unique, byNewest, byOldest, byTitleAsc, setYear } = window.CelebScopeUtils;
	const { populateCountryFilter, mountTrendingTags, mountGrid } = window.CelebScopeRender;

	function filterStories(allStories, query, countryCode) {
		const q = (query || '').trim().toLowerCase();
		return allStories.filter(s => {
			const inCountry = !countryCode || s.country.code === countryCode;
			if (!q) return inCountry;
			const hay = `${s.title} ${s.snippet} ${s.tags.join(' ')} ${s.celebrities.join(' ')}`.toLowerCase();
			return inCountry && hay.includes(q);
		});
	}

	function sortStories(stories, mode) {
		switch (mode) {
			case 'date_asc': return stories.slice().sort(byOldest);
			case 'title_asc': return stories.slice().sort(byTitleAsc);
			case 'date_desc':
			default: return stories.slice().sort(byNewest);
		}
	}

	function init() {
		setYear();
		const countries = window.CelebScopeData.countries;
		const stories = window.CelebScopeData.stories;
		populateCountryFilter(countries);

		const input = qs('#searchInput');
		const select = qs('#countryFilter');
		const sort = qs('#sortSelect');

		const url = new URL(location.href);
		const qParam = url.searchParams.get('q') || '';
		if (input) input.value = qParam;

		const allTags = unique(stories.flatMap(s => s.tags));
		mountTrendingTags(allTags);

		const render = () => {
			const countryCode = select && select.value ? select.value : '';
			const filtered = filterStories(stories, input ? input.value : '', countryCode);
			const sorted = sortStories(filtered, sort ? sort.value : 'date_desc');
			mountGrid(sorted);
		};

		if (input) input.addEventListener('input', render);
		if (select) select.addEventListener('change', render);
		if (sort) sort.addEventListener('change', render);

		render();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();

