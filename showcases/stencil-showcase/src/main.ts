import { renderNavigation } from './navigation';
import { renderPage } from './page';
import { initRouter } from './router';
import './styles.css';

function getShellState(): boolean {
	const [, queryString = ''] = (globalThis.location.hash || '#/').split('?');
	const parameters = new URLSearchParams(queryString);
	const shell = parameters.get('shell');

	return shell !== 'false';
}

function render(): void {
	if (getShellState()) {
		renderNavigation();
	} else {
		renderPage();
	}

	initRouter();
}

// Initial render
render();

// Re-render on hashchange to switch between shell and page modes
globalThis.addEventListener('hashchange', () => {
	const currentShell = getShellState();
	const hasShellElement = document.querySelector('db-shell');
	const hasPageElement = document.querySelector('db-page');

	// Only re-render if the shell state changed
	if (currentShell && !hasShellElement) {
		render();
	} else if (!currentShell && !hasPageElement) {
		render();
	}
});
