(function() {
	const { qs, getParam, setYear } = window.CelebScopeUtils;
	const { renderArticle, mountRelated } = window.CelebScopeRender;

	function init() {
		setYear();
		const id = getParam('id');
		const { stories } = window.CelebScopeData;
		const story = stories.find(s => String(s.id) === String(id));
		if (!story) {
			const root = qs('#article');
			if (root) root.innerHTML = '<p>Story not found.</p>';
			return;
		}
		renderArticle(story);
		const related = stories.filter(s => s.id !== story.id && s.tags.some(t => story.tags.includes(t))).slice(0, 6);
		mountRelated(related);
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();

