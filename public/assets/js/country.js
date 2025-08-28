(function() {
	const { qs, getParam, setYear } = window.CelebScopeUtils;
	const { populateCountryFilter, mountGrid } = window.CelebScopeRender;

	function init() {
		setYear();
		const code = (getParam('code') || '').toUpperCase();
		const { countries, stories } = window.CelebScopeData;
		populateCountryFilter(countries);

		const select = qs('#countryFilter');
		if (select) select.value = code;

		const country = countries.find(c => c.code === code) || { name: 'All countries', code: '', flag: '🌍' };
		const title = qs('#countryTitle');
		const subtitle = qs('#countrySubtitle');
		if (title) title.textContent = `${country.flag} ${country.name}`;
		if (subtitle && country.code) subtitle.textContent = `Celebrity stories from ${country.name}.`;

		const filtered = stories.filter(s => !country.code || s.country.code === country.code);
		mountGrid(filtered);

		if (select) select.addEventListener('change', () => {
			const newCode = select.value;
			location.href = `/country.html?code=${encodeURIComponent(newCode)}`;
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();

