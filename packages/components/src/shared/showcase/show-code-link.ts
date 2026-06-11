const LOCALHOST_STORYBOOK_PORT_MAP: Record<string, string> = {
	react: '6005',
	angular: '6006',
	vue: '6007',
	html: '6001'
};

const DEFAULT_FRAMEWORK = 'react';

const NON_COMPONENT_ROUTE_SEGMENTS = new Set(['docs', 'overview']);

/**
 * Builds the Storybook docs path for a component route.
 * @param pathname - URL pathname (e.g., "/docs/components/my-button")
 * @returns Storybook docs path or undefined when no component segment is available
 */
function buildStorybookDocsPathname(pathname: string): string | undefined {
	const segments = pathname.split('/').filter(Boolean);
	const componentsIndex = segments.indexOf('components');
	const routeSegments = segments.slice(componentsIndex + 1);

	if (componentsIndex === -1 || routeSegments.length === 0) {
		return undefined;
	}

	let componentName = routeSegments.at(-1);
	if (
		componentName &&
		NON_COMPONENT_ROUTE_SEGMENTS.has(componentName) &&
		routeSegments.length > 1
	) {
		componentName = routeSegments.at(-2);
	}

	if (!componentName) {
		return undefined;
	}

	const normalizedComponentName = componentName.replace(/-/g, '');
	return `/docs/components-db${normalizedComponentName}`;
}

/**
 * Resolves the framework-specific Storybook URL for the current component page.
 * @param currentUrl - Current page URL
 * @param frameworkRaw - Framework name ('react', 'angular', 'vue', 'html')
 * @returns Storybook URL or undefined when the component route cannot be determined
 */
export function getShowCodeHref(
	currentUrl: string,
	frameworkRaw: string | null | undefined
): string | undefined {
	const framework = (frameworkRaw || DEFAULT_FRAMEWORK).toLowerCase();
	const url = new URL(currentUrl);
	const componentsIndex = url.pathname.indexOf('/components/');
	const docsPath = buildStorybookDocsPathname(url.pathname);

	if (componentsIndex === -1 || !docsPath) {
		return undefined;
	}

	if (url.hostname === 'localhost' || url.hostname === '127.0.0.1') {
		const port =
			LOCALHOST_STORYBOOK_PORT_MAP[framework] ||
			LOCALHOST_STORYBOOK_PORT_MAP[DEFAULT_FRAMEWORK];
		return `${url.protocol}//${url.hostname}:${port}/?path=${docsPath}`;
	}

	const basePath = url.pathname.slice(0, componentsIndex);
	return `${url.origin}${basePath}/${framework}-storybook?path=${docsPath}`;
}
