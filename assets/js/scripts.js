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

// Função para copiar um texto para a área de transferência usando API moderna
async function copyToClipboard(text) {
	try {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			// API moderna - preferida
			await navigator.clipboard.writeText(text);
			console.log('Texto copiado com sucesso!');
		} else {
			// Fallback para navegadores mais antigos
			const textArea = document.createElement("textarea");
			textArea.value = text;
			textArea.style.position = "fixed";
			textArea.style.opacity = "0";
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand("copy");
			textArea.remove();
			console.log('Texto copiado com sucesso (fallback)!');
		}
	} catch (error) {
		console.error('Erro ao copiar texto:', error);
		// Fallback em caso de erro
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.opacity = "0";
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		textArea.remove();
	}
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
	const body = document.body;
	const savedTheme = localStorage.getItem('webstart-theme');
	
	if (savedTheme) {
		// Usar tema salvo pelo usuário
		body.setAttribute('data-theme', savedTheme);
	} else {
		// Usar preferência do sistema
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			body.setAttribute('data-theme', 'dark');
		} else {
			body.setAttribute('data-theme', 'light');
		}
	}
}

// Função para alternar tema manualmente
function toggleTheme() {
	const body = document.body;
	const currentTheme = body.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	
	body.setAttribute('data-theme', newTheme);
	localStorage.setItem('webstart-theme', newTheme);
}

// Detectar mudanças na preferência do sistema
if (window.matchMedia) {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQuery.addEventListener('change', () => {
		// Só aplicar tema do sistema se não houver preferência salva
		if (!localStorage.getItem('webstart-theme')) {
			applyTheme();
		}
	});
}

// Aplica o tema ao carregar a página
document.addEventListener('DOMContentLoaded', applyTheme);
