// Função para selecionar um elemento pelo ID
function getById(id) {
	return document.getElementById(id);
}

// Função para adicionar uma classe a um elemento
function addClass(element, className) {
	if (!(element instanceof Element)) {
		element = getById(element);
	}
	element.classList.add(className);
}

// Função para remover uma classe de um elemento
function removeClass(element, className) {
	if (!(element instanceof Element)) {
		element = getById(element);
	}
	element.classList.remove(className);
}

// Função para copiar um texto para a área de transferência.
function copyToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.remove();
}

// Função para fazer um scroll suave até o topo da página
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

// Função para aplicar o tema baseado na preferência do dispositivo
function applyTheme() {
	let body = document.body;
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		body.setAttribute('data-theme', 'dark');
	} else {
		body.setAttribute('data-theme', 'light');
	}
}

// Aplica o tema ao carregar a página
//applyTheme();
