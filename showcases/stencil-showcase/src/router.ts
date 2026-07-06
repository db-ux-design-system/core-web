import { renderHomePage } from './home';
import { NAVIGATION_ITEMS } from './navigation';

/**
 * Parse the current hash to extract route information.
 * Route format: #/{category_number}/{component_name}?density=...&color=...
 */
function parseHash(hash: string): {
	category: string | undefined;
	component: string | undefined;
	parameters: URLSearchParams;
} {
	// Split hash from query parameters
	const [hashPath, queryString] = hash.replace(/^#\/?/, '').split('?');
	const parameters = new URLSearchParams(queryString ?? '');

	if (!hashPath || hashPath === '/') {
		return { category: undefined, component: undefined, parameters };
	}

	const segments = hashPath.split('/').filter(Boolean);

	if (segments.length >= 2) {
		return {
			category: segments[0],
			component: segments[1],
			parameters
		};
	}

	return {
		category: segments[0] ?? undefined,
		component: undefined,
		parameters
	};
}

/**
 * Check if a route matches a known navigation item.
 */
function isKnownRoute(category: string, component: string): boolean {
	const path = `${category}/${component}`;
	return NAVIGATION_ITEMS.some(
		(item) => item.children?.some((child) => child.path === path) ?? false
	);
}

/**
 Validate that an attribute name is safe for HTML interpolation.
 Must contain only alphanumeric, hyphens, or underscores, and must NOT
 be an inline event handler (on*) to prevent XSS via crafted URLs.
 */
function isValidAttributeName(name: string): boolean {
	return /^[a-z][\w-]*$/i.test(name) && !/^on/i.test(name);
}

/**
 Validate that a custom element tag name is safe for HTML interpolation.
 Custom element names must contain only lowercase letters, digits, and hyphens,
 and must include at least one hyphen (per the HTML spec for custom elements).
 */
function isValidCustomElementName(name: string): boolean {
	return /^[a-z][\da-z]*(?:-[\da-z]+)+$/.test(name);
}

/**
 Render a component showcase page by inserting the corresponding
 custom element tag into the main content area.
 */
function renderShowcasePage(
	container: HTMLElement,
	component: string,
	parameters: URLSearchParams
): void {
	const showcaseTag = `${component}-showcase`;

	// Validate the tag name to prevent DOM injection even though
	// callers gate this behind isKnownRoute().
	if (!isValidCustomElementName(showcaseTag)) {
		return;
	}

	// Set attributes from query params for Playwright compatibility,
	// using safe DOM APIs instead of innerHTML to prevent XSS.
	const element = document.createElement(showcaseTag);
	for (const [key, value] of parameters) {
		if (key !== 'settings' && isValidAttributeName(key)) {
			element.setAttribute(key, value);
		}
	}

	container.replaceChildren(element);
}

/**
 * Update aria-current="page" on the active navigation link.
 */
function updateActiveNavItem(): void {
	const navLinks = document.querySelectorAll(
		'db-control-panel-navigation-item a'
	);
	const currentHash = (globalThis.location.hash || '#/').split('?', 1)[0];

	for (const link of navLinks) {
		const href = (link.getAttribute('href') ?? '').split('?', 1)[0];
		if (href === currentHash) {
			link.setAttribute('aria-current', 'page');
		} else {
			link.removeAttribute('aria-current');
		}
	}
}

/**
 * Handle route changes by rendering the appropriate content.
 */
function handleRoute(): void {
	const container = document.querySelector<HTMLElement>('main');
	if (!container) {
		return;
	}

	const { category, component, parameters } = parseHash(
		globalThis.location.hash
	);

	// Home route or empty hash
	if (!category || !component) {
		renderHomePage(container);
		updateActiveNavItem();
		return;
	}

	// Known route — render the showcase custom element
	if (isKnownRoute(category, component)) {
		renderShowcasePage(container, component, parameters);
		updateActiveNavItem();
		return;
	}

	// Unknown route — fall back to home page
	renderHomePage(container);
	updateActiveNavItem();
}

/**
 * Initialize the hash-based router.
 * Listens for hashchange events and handles the initial route on page load.
 */
export function initRouter(): void {
	const shell = document.querySelector('db-shell');

	const observer = new MutationObserver(() => {
		if (shell?.classList.contains('hydrated')) {
			observer.disconnect();
			globalThis.addEventListener('hashchange', handleRoute);
			handleRoute();
		}
	});

	if (shell?.classList.contains('hydrated')) {
		globalThis.addEventListener('hashchange', handleRoute);
		handleRoute();
	} else if (shell) {
		observer.observe(shell, { attributeFilter: ['class'] });
	}
}

/**
 * Navigate programmatically to a given hash.
 */
export function navigateTo(hash: string): void {
	globalThis.location.hash = hash;
}
