'use strict';

(() => {
	const STORAGE_KEY = 'webstart-theme';
	const DARK_THEME = 'dark';
	const LIGHT_THEME = 'light';
	const SELECTORS = {
		copyButton: '[data-copy]',
		form: '[data-template-form]',
		formStatus: '[data-form-status]',
		themeLabel: '[data-theme-label]',
		themeToggle: '[data-theme-toggle]'
	};

	const getStoredTheme = () => {
		try {
			return localStorage.getItem(STORAGE_KEY);
		} catch {
			return null;
		}
	};

	const setStoredTheme = (theme) => {
		try {
			localStorage.setItem(STORAGE_KEY, theme);
		} catch {
			/* Preferência não persistida quando o navegador bloqueia armazenamento local. */
		}
	};

	const getSystemTheme = () => {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return DARK_THEME;
		}

		return LIGHT_THEME;
	};

	const updateThemeControls = (theme) => {
		const nextTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		const label = nextTheme === DARK_THEME ? 'Usar tema escuro' : 'Usar tema claro';

		document.querySelectorAll(SELECTORS.themeToggle).forEach((button) => {
			button.setAttribute('aria-label', `Alternar para tema ${nextTheme === DARK_THEME ? 'escuro' : 'claro'}`);

			const labelElement = button.querySelector(SELECTORS.themeLabel);
			if (labelElement) {
				labelElement.textContent = label;
			}
		});
	};

	const applyTheme = (theme) => {
		const safeTheme = theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
		document.body.setAttribute('data-theme', safeTheme);
		document.documentElement.style.colorScheme = safeTheme;
		updateThemeControls(safeTheme);
	};

	const toggleTheme = () => {
		const currentTheme = document.body.getAttribute('data-theme') === DARK_THEME ? DARK_THEME : LIGHT_THEME;
		const nextTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
		applyTheme(nextTheme);
		setStoredTheme(nextTheme);
	};

	const fallbackCopyToClipboard = (text) => {
		const textArea = document.createElement('textarea');
		textArea.value = text;
		textArea.setAttribute('readonly', '');
		textArea.style.position = 'fixed';
		textArea.style.top = '-9999px';
		document.body.appendChild(textArea);
		textArea.select();

		let copied = false;
		try {
			copied = document.execCommand('copy');
		} catch {
			copied = false;
		}

		textArea.remove();
		return copied;
	};

	const copyToClipboard = async (text) => {
		if (!text) {
			return false;
		}

		if (navigator.clipboard && navigator.clipboard.writeText) {
			try {
				await navigator.clipboard.writeText(text);
				return true;
			} catch {
				return fallbackCopyToClipboard(text);
			}
		}

		return fallbackCopyToClipboard(text);
	};

	const handleCopyButton = async (button) => {
		const originalText = button.textContent;
		const copied = await copyToClipboard(button.dataset.copy);
		button.textContent = copied ? 'Copiado!' : 'Não foi possível copiar';

		window.setTimeout(() => {
			button.textContent = originalText;
		}, 2200);
	};

	const handleDocumentClick = (event) => {
		const themeButton = event.target.closest(SELECTORS.themeToggle);
		if (themeButton) {
			toggleTheme();
			return;
		}

		const copyButton = event.target.closest(SELECTORS.copyButton);
		if (copyButton) {
			handleCopyButton(copyButton);
		}
	};

	const setupTemplateForms = () => {
		document.querySelectorAll(SELECTORS.form).forEach((form) => {
			form.addEventListener('submit', (event) => {
				event.preventDefault();

				const status = form.querySelector(SELECTORS.formStatus);
				if (status) {
					status.textContent = 'Exemplo interceptado. Conecte este formulário a uma API segura antes de publicar.';
				}
			});
		});
	};

	const setupSystemThemeListener = () => {
		if (!window.matchMedia) {
			return;
		}

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = () => {
			if (!getStoredTheme()) {
				applyTheme(getSystemTheme());
			}
		};

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange);
		} else if (mediaQuery.addListener) {
			mediaQuery.addListener(handleChange);
		}
	};

	const init = () => {
		applyTheme(getStoredTheme() || getSystemTheme());
		setupSystemThemeListener();
		setupTemplateForms();
		document.addEventListener('click', handleDocumentClick);
	};

	document.addEventListener('DOMContentLoaded', init);
})();