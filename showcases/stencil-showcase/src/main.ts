import { renderNavigation } from './navigation';
import { renderFullscreen, renderPage } from './page';
import { initRouter } from './router';
import './styles.css';

function getHashParameters(): URLSearchParams {
	const [, queryString = ''] = (globalThis.location.hash || '#/').split('?');
	return new URLSearchParams(queryString);
}

// TODO: Remove shell state and `showcases/stencil-showcase/src/page.ts` after v6.0.0
function isShellEnabled(): boolean {
	return getHashParameters().get('shell') !== 'false';
}

// When a single example is requested via `?page=` (or `?fullscreen=`) we render
// only the bare content, without any shell / control-panel chrome - matching the
// other framework showcases (see the fullscreen branch of the React showcase).
function isFullscreen(): boolean {
	const parameters = getHashParameters();
	return parameters.has('page') || parameters.get('fullscreen') === 'true';
}

function render(): void {
	if (isFullscreen()) {
		renderFullscreen();
	} else if (isShellEnabled()) {
		renderNavigation();
	} else {
		renderPage();
	}

	initRouter();
}

// Initial render
render();

// Re-render on hashchange to switch between fullscreen, shell and page modes
globalThis.addEventListener('hashchange', () => {
	const fullscreenElement = document.querySelector('.fullscreen-container');
	const shellElement = document.querySelector('db-shell');
	const pageElement = document.querySelector('db-page');

	// Determine whether the current DOM already matches the requested mode.
	let mode: 'fullscreen' | 'shell' | 'page';
	if (isFullscreen()) {
		mode = 'fullscreen';
	} else if (isShellEnabled()) {
		mode = 'shell';
	} else {
		mode = 'page';
	}

	const isAlreadyRendered =
		Boolean(mode === 'fullscreen' && fullscreenElement) ||
		Boolean(mode === 'shell' && shellElement && !fullscreenElement) ||
		Boolean(mode === 'page' && pageElement && !fullscreenElement);

	// Only re-render the chrome if the mode changed.
	if (!isAlreadyRendered) {
		render();
	}
});
