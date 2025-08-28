(function() {
	const KEY = 'celebscope-theme';
	const toggle = () => {
		const cur = localStorage.getItem(KEY) || 'dark';
		const next = cur === 'dark' ? 'light' : 'dark';
		localStorage.setItem(KEY, next);
		apply(next);
	};
	const apply = (mode) => {
		document.documentElement.dataset.theme = mode;
		const btn = document.getElementById('themeToggle');
		if (btn) btn.textContent = mode === 'dark' ? '☾' : '☀';
	};
	const init = () => {
		const saved = localStorage.getItem(KEY) || 'dark';
		apply(saved);
		const btn = document.getElementById('themeToggle');
		if (btn) btn.addEventListener('click', toggle);
	};
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();

