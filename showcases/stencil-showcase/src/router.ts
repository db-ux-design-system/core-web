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
 * Render a component showcase page by inserting the corresponding
 * custom element tag into the main content area.
 */
function renderShowcasePage(
	container: HTMLElement,
	component: string,
	parameters: URLSearchParams
): void {
	const showcaseTag = `${component}-showcase`;

	// Build attribute string from query params for Playwright compatibility
	const attributes = [...parameters.entries()]
		.map(([key, value]) => `${key}="${value}"`)
		.join(' ');

	container.innerHTML = attributes
		? `<${showcaseTag} ${attributes}></${showcaseTag}>`
		: `<${showcaseTag}></${showcaseTag}>`;
}

/**
 * Update aria-current="page" on the active navigation link.
 */
function updateActiveNavItem(): void {
	const navLinks = document.querySelectorAll('db-navigation-item a');
	const currentHash = globalThis.location.hash || '#/';

	for (const link of navLinks) {
		const href = link.getAttribute('href') ?? '';
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
	console.log('handleRoute', container);
	if (!container) return;

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
	const page = document.querySelector('db-page');

	const observer = new MutationObserver(() => {
		if (page?.classList.contains('hydrated')) {
			observer.disconnect();
			globalThis.addEventListener('hashchange', handleRoute);
			handleRoute();
		}
	});

	if (page?.classList.contains('hydrated')) {
		globalThis.addEventListener('hashchange', handleRoute);
		handleRoute();
	} else if (page) {
		observer.observe(page, { attributeFilter: ['class'] });
	}
}

/**
 * Navigate programmatically to a given hash.
 */
export function navigateTo(hash: string): void {
	globalThis.location.hash = hash;
}
