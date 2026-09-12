import { renderNavigation } from './navigation';
import { renderPage } from './page';
import { initRouter } from './router';
import './styles.css';

// TODO: Remove shell state and `showcases/stencil-showcase/src/page.ts` after v6.0.0
function isShellEnabled(): boolean {
	const [, queryString = ''] = (globalThis.location.hash || '#/').split('?');
	const parameters = new URLSearchParams(queryString);
	const shell = parameters.get('shell');

	return shell !== 'false';
}

function render(): void {
	if (isShellEnabled()) {
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
	const isCurrentlyShell = isShellEnabled();
	const shellElement = document.querySelector('db-shell');
	const pageElement = document.querySelector('db-page');

	// Only re-render if the shell state changed
	if (
		(isCurrentlyShell && !shellElement) ||
		(!isCurrentlyShell && !pageElement)
	) {
		render();
	}
});
