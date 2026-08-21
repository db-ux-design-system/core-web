import { NAVIGATION_ITEMS, type NavItem } from './navigation';

function renderPageNavItems(items: NavItem[], parentPath = ''): string {
	return items
		.map((item) => {
			const fullPath = parentPath
				? `${parentPath}/${item.path}`
				: item.path;

			if (item.children) {
				return `
				<db-navigation-item text="${item.label}">
					${item.children
						.map(
							(child) =>
								`<db-navigation-item slot="subNavigation" hide-sub-navigation="true"><a href="#/${child.path}">${child.label}</a></db-navigation-item>`
						)
						.join('')}
				</db-navigation-item>`;
			}

			return `<db-navigation-item hide-sub-navigation="true"><a href="#/${fullPath}">${item.label}</a></db-navigation-item>`;
		})
		.join('');
}

function getQueryParameters(): URLSearchParams {
	const [, queryString = ''] = globalThis.location.hash.split('?');

	return new URLSearchParams(queryString);
}

function getDensity(): string {
	return getQueryParameters().get('density') ?? 'regular';
}

function getColor(): string {
	return getQueryParameters().get('color') ?? 'neutral';
}

function setUrlParameters(updates: Record<string, string>): void {
	const hash = globalThis.location.hash || '#/';
	const [path, queryString] = hash.split('?');
	const parameters = new URLSearchParams(queryString ?? '');

	for (const [key, value] of Object.entries(updates)) {
		parameters.set(key, value);
	}

	globalThis.history.replaceState(
		undefined,
		'',
		`${path}?${parameters.toString()}`
	);
}

const DENSITIES = ['functional', 'regular', 'expressive'];
const COLORS = [
	'neutral',
	'critical',
	'informational',
	'warning',
	'successful',
	'adaptive'
];

export function renderPage(): void {
	const app = document.querySelector('#app');

	if (!app) {
		return;
	}

	const density = getDensity();
	const color = getColor();

	const densityOptions = DENSITIES.map(
		(d) => `<option ${d === density ? 'selected' : ''}>${d}</option>`
	).join('');

	const colorOptions = COLORS.map(
		(c) => `<option ${c === color ? 'selected' : ''}>${c}</option>`
	).join('');

	app.innerHTML = `
		<db-page variant="fixed" document-overflow="auto" fade-in="true">
			<db-header
				slot="header"
				drawer-header-text="Showcase"
			>
				<db-brand slot="brand">Showcase</db-brand>
				<db-select slot="metaNavigation" variant="floating" label="Nothing">
					<option>Nothing here for stencil</option>
				</db-select>
				<db-button
					slot="primaryAction"
					icon="magnifying_glass"
					variant="ghost"
					no-text="true"
				>
					Search
				</db-button>
				<div slot="secondaryAction">
					<db-switch class="js-page-shell-toggle" checked="true">Shell</db-switch>
				</div>
				<db-navigation aria-label="main navigation">
					<db-navigation-item><a href="#/">Home</a></db-navigation-item>
					${renderPageNavItems(NAVIGATION_ITEMS)}
				</db-navigation>
			</db-header>
			<div data-density="${density}" class="db-${color}">
				<main></main>
			</div>
		</db-page>
	`;

	initPageControls();
}

function initPageControls(): void {
	// Density change
	document.addEventListener('change', (event) => {
		const eventTarget = event.target;

		if (!(eventTarget instanceof HTMLSelectElement)) {
			return;
		}

		const densityHost =
			eventTarget.closest<HTMLElement>('.js-page-density');

		if (densityHost) {
			setUrlParameters({ density: eventTarget.value });
			applyPageDensityColor(eventTarget.value, getColor());

			return;
		}

		const colorHost = eventTarget.closest<HTMLElement>('.js-page-color');

		if (colorHost) {
			setUrlParameters({ color: eventTarget.value });
			applyPageDensityColor(getDensity(), eventTarget.value);
		}
	});

	// Shell toggle
	document.addEventListener('change', (event) => {
		const eventTarget = event.target;

		if (!(eventTarget instanceof HTMLElement)) {
			return;
		}

		const toggle = eventTarget.closest('.js-page-shell-toggle');

		if (toggle) {
			setUrlParameters({ shell: 'true' });
			// Trigger re-render via hashchange
			globalThis.dispatchEvent(new HashChangeEvent('hashchange'));
		}
	});
}

function applyPageDensityColor(density: string, color: string): void {
	const contentDiv = document.querySelector<HTMLElement>(
		'db-page > div[data-density]'
	);

	if (contentDiv) {
		contentDiv.dataset.density = density;
		contentDiv.className = `db-${color}`;
	}
}
