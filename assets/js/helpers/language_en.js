const langToggle = document.getElementById('language-toggle');
const currentLang = window.location.href.includes('index_en.html');
langToggle.checked = currentLang;

function language() {
	langToggle.addEventListener('change', () => {
		if (langToggle.checked) {
			window.location.href = 'index_en.html';
		} else {
			window.location.href = 'index.html';
		}
	});
}

export default language;
