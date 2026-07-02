import {
	defaultSettings,
	defaultSettingsMapping,
	type DefaultSettings
} from '../../settings';

export type NavItem = {
	path: string;
	label: string;
	children?: NavItem[];
};

type ShellElement = HTMLElement & {
	controlPanelDesktopPosition: string;
	controlPanelMobilePosition: string;
	subNavigationDesktopPosition: string;
	subNavigationMobilePosition: string;
	showSubNavigation: boolean;
};

type VariantElement = HTMLElement & {
	variant: string;
};

type OpenElement = HTMLElement & {
	open: boolean;
};

const DENSITIES = ['functional', 'regular', 'expressive'];
const COLORS = [
	'neutral',
	'critical',
	'informational',
	'warning',
	'successful',
	'adaptive'
];

const sortNavItems = (items: NavItem[]): NavItem[] =>
	items.toSorted((a, b) => a.path.localeCompare(b.path));

export const NAVIGATION_ITEMS: NavItem[] = sortNavItems([
	{
		path: '01',
		label: '01 Layout',
		children: sortNavItems([
			{ path: '01/stack', label: 'Stack' },
			{ path: '01/card', label: 'Card' },
			{ path: '01/drawer', label: 'Drawer' },
			{ path: '01/divider', label: 'Divider' },
			{ path: '01/popover', label: 'Popover' },
			{ path: '01/section', label: 'Section' }
		])
	},
	{
		path: '02',
		label: '02 Action',
		children: sortNavItems([
			{ path: '02/link', label: 'Link' },
			{ path: '02/button', label: 'Button' },
			{ path: '02/custom-button', label: 'CustomButton' }
		])
	},
	{
		path: '03',
		label: '03 Data-Input',
		children: sortNavItems([
			{ path: '03/custom-select', label: 'CustomSelect' },
			{ path: '03/input', label: 'Input' },
			{ path: '03/textarea', label: 'Textarea' },
			{ path: '03/radio', label: 'Radio' },
			{ path: '03/checkbox', label: 'Checkbox' },
			{ path: '03/switch', label: 'Switch' },
			{ path: '03/select', label: 'Select' }
		])
	},
	{
		path: '04',
		label: '04 Data-Display',
		children: sortNavItems([
			{ path: '04/icon', label: 'Icon' },
			{ path: '04/brand', label: 'Brand' },
			{ path: '04/tooltip', label: 'Tooltip' },
			{ path: '04/infotext', label: 'Infotext' },
			{ path: '04/tag', label: 'Tag' },
			{ path: '04/accordion', label: 'Accordion' },
			{ path: '04/accordion-item', label: 'AccordionItem' },
			{ path: '04/tab-item', label: 'TabItem' },
			{ path: '04/tabs', label: 'Tabs' },
			{ path: '04/table', label: 'Table' }
		])
	},
	{
		path: '05',
		label: '05 Navigation',
		children: sortNavItems([
			{ path: '05/shell', label: 'Shell' },
			{ path: '05/control-panel-brand', label: 'ControlPanelBrand' },
			{
				path: '05/control-panel-desktop',
				label: 'Control Panel Desktop'
			},
			{ path: '05/control-panel-mobile', label: 'Control Panel Mobile' }
		])
	},
	{
		path: '06',
		label: '06 Feedback',
		children: sortNavItems([
			{ path: '06/notification', label: 'Notification' },
			{ path: '06/badge', label: 'Badge' }
		])
	}
]);

function renderNavItems(items: NavItem[]): string {
	return items
		.map((item) => {
			if (item.children) {
				return `<db-control-panel-navigation-item-group text="${item.label}">${renderNavItems(
					item.children
				)}</db-control-panel-navigation-item-group>`;
			}

			return `<db-control-panel-navigation-item><a href="#/${item.path}">${item.label}</a></db-control-panel-navigation-item>`;
		})
		.join('');
}

function renderNavigationTree(ariaLabel: string, variant: string): string {
	return `
		<db-control-panel-navigation aria-label="${ariaLabel}" variant="${variant}">
			<db-control-panel-navigation-item><a href="#/">Home</a></db-control-panel-navigation-item>
			${renderNavItems(NAVIGATION_ITEMS)}
		</db-control-panel-navigation>`;
}

/* ------------------------------------------------------------------ *
 * Settings (shell layout) + density / color
 * ------------------------------------------------------------------ */

let settings: DefaultSettings = { ...defaultSettings };

function getQueryParameters(): URLSearchParams {
	const [, queryString = ''] = globalThis.location.hash.split('?');

	return new URLSearchParams(queryString);
}

function getSettings(): DefaultSettings {
	const raw = getQueryParameters().get('settings');

	if (raw) {
		try {
			return { ...defaultSettings, ...JSON.parse(raw) };
		} catch {
			// Ignore malformed settings and fall back to defaults.
		}
	}

	return { ...defaultSettings };
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

	// ReplaceState avoids a hashchange (and therefore a content re-render).
	globalThis.history.replaceState(
		undefined,
		'',
		`${path}?${parameters.toString()}`
	);
}

function renderSettingsControls(): string {
	const density = getDensity();
	const color = getColor();

	const options = (values: string[], current: string): string =>
		values
			.map(
				(value) =>
					`<option ${value === current ? 'selected' : ''}>${value}</option>`
			)
			.join('');

	const select = (
		label: string,
		setting: string,
		values: string[],
		current: string
	): string =>
		`<db-select variant="floating" label="${label}" value="${current}" data-setting="${setting}">${options(
			values,
			current
		)}</db-select>`;

	const settingSelects = Object.entries(defaultSettingsMapping)
		.map(([key, values], index) => {
			const control = select(
				key,
				key,
				values,
				settings[key as keyof DefaultSettings]
			);
			const divider =
				index === 1 || index === 3 ? '<db-divider></db-divider>' : '';

			return `${control}${divider}`;
		})
		.join('');

	return `
		${select('Density', 'density', DENSITIES, density)}
		${select('Color', 'color', COLORS, color)}
		<db-divider></db-divider>
		${settingSelects}`;
}

function renderPrimaryActions(): string {
	return `
		<db-control-panel-primary-actions>
			<db-drawer
				class="js-settings-drawer"
				direction="custom"
				rounded="true"
			>
				<db-drawer-header slot="header" text="Settings"></db-drawer-header>
				${renderSettingsControls()}
			</db-drawer>
			<db-button
				class="js-settings-toggle"
				icon="gear_wheel"
				variant="ghost"
				no-text="true"
			>
				Settings
				<db-tooltip>Settings</db-tooltip>
			</db-button>
		</db-control-panel-primary-actions>`;
}

function renderMetaNavigation(): string {
	return `
		<db-control-panel-meta class="meta-workaround">
			<db-link size="small" href="#">Link 1</db-link>
			<db-link size="small" href="#">Link 2</db-link>
			<db-link size="small" href="#">Link 3</db-link>
		</db-control-panel-meta>`;
}

function renderSecondaryActions(): string {
	return `
		<db-control-panel-secondary-actions>
			<db-button icon="x_placeholder" variant="ghost" no-text="true">Profile</db-button>
			<db-button icon="x_placeholder" variant="ghost" no-text="true">Notification</db-button>
			<db-button icon="x_placeholder" variant="ghost" no-text="true">Help</db-button>
		</db-control-panel-secondary-actions>`;
}

export function renderNavigation(): void {
	const app = document.querySelector('#app');

	if (!app) {
		return;
	}

	settings = getSettings();

	app.innerHTML = `
		<db-shell
			fade-in="true"
			control-panel-desktop-position="${settings.controlPanelDesktopPosition}"
			control-panel-mobile-position="${settings.controlPanelMobilePosition}"
			sub-navigation-desktop-position="${settings.subNavigationDesktopPosition}"
			sub-navigation-mobile-position="${settings.subNavigationMobilePosition}"
			show-sub-navigation="${settings.subNavigation === 'true'}"
		>
			<db-shell-sub-navigation>
				${renderNavigationTree('sub-navigation', settings.subNavigationVariant)}
			</db-shell-sub-navigation>

			<db-control-panel-desktop>
				<db-control-panel-brand slot="brand" data-logo="db-systel"></db-control-panel-brand>
				${renderMetaNavigation()}
				${renderPrimaryActions()}
				${renderSecondaryActions()}
				${renderNavigationTree('desktop-navigation', settings.navigationDesktopVariant)}
			</db-control-panel-desktop>

			<db-control-panel-mobile
				drawer-header-text="Showcase"
			>
				<db-control-panel-brand slot="brand" data-logo="db-systel"></db-control-panel-brand>
				${renderMetaNavigation()}
				${renderPrimaryActions()}
				${renderSecondaryActions()}
				${renderNavigationTree('mobileNavigation', settings.navigationMobileVariant)}
			</db-control-panel-mobile>
			<db-shell-content></db-shell-content>
		</db-shell>
	`;

	applyDensityColor(getDensity(), getColor());
	initSettingsControls();
}

/* ------------------------------------------------------------------ *
 * Live updates without re-rendering the whole shell
 * ------------------------------------------------------------------ */

function applyDensityColor(density: string, color: string): void {
	const app = document.querySelector<HTMLElement>('#app');

	if (app) {
		app.className = `db-density-${density} db-color-${color}`;
	}
}

function setNavigationVariant(selector: string, variant: string): void {
	const navigation = document.querySelector<VariantElement>(selector);

	if (navigation) {
		navigation.variant = variant;
	}
}

function applyShellSettings(): void {
	const shell = document.querySelector<ShellElement>('db-shell');

	if (!shell) {
		return;
	}

	shell.controlPanelDesktopPosition = settings.controlPanelDesktopPosition;
	shell.controlPanelMobilePosition = settings.controlPanelMobilePosition;
	shell.subNavigationDesktopPosition = settings.subNavigationDesktopPosition;
	shell.subNavigationMobilePosition = settings.subNavigationMobilePosition;
	shell.showSubNavigation = settings.subNavigation === 'true';

	setNavigationVariant(
		'db-control-panel-desktop > db-control-panel-navigation',
		settings.navigationDesktopVariant
	);
	setNavigationVariant(
		'db-control-panel-mobile > db-control-panel-navigation',
		settings.navigationMobileVariant
	);
	setNavigationVariant(
		'db-shell-sub-navigation > db-control-panel-navigation',
		settings.subNavigationVariant
	);
}

function handleSettingChange(setting: string, value: string): void {
	if (setting === 'density') {
		setUrlParameters({ density: value });
		applyDensityColor(value, getColor());

		return;
	}

	if (setting === 'color') {
		setUrlParameters({ color: value });
		applyDensityColor(getDensity(), value);

		return;
	}

	settings = { ...settings, [setting]: value };
	setUrlParameters({ settings: JSON.stringify(settings) });
	applyShellSettings();
}

function initSettingsControls(): void {
	// Toggle the settings drawer (works for both desktop and mobile panels).
	document.addEventListener('click', (event) => {
		const eventTarget = event.target;

		if (!(eventTarget instanceof HTMLElement)) {
			return;
		}

		const toggle = eventTarget.closest('.js-settings-toggle');

		if (!toggle) {
			return;
		}

		const drawer = toggle
			.closest('db-control-panel-primary-actions')
			?.querySelector<OpenElement>('.js-settings-drawer');

		if (drawer) {
			drawer.open = true;
		}
	});

	// Close the drawer when it emits its close event.
	document.addEventListener('close', (event) => {
		const eventTarget = event.target;

		if (!(eventTarget instanceof HTMLElement)) {
			return;
		}

		const drawer = eventTarget.closest<OpenElement>('.js-settings-drawer');

		if (drawer) {
			drawer.open = false;
		}
	});

	// React to any setting select change.
	document.addEventListener('change', (event) => {
		const eventTarget = event.target;

		if (!(eventTarget instanceof HTMLSelectElement)) {
			return;
		}

		const host = eventTarget.closest<HTMLElement>(
			'db-select[data-setting]'
		);

		if (!host) {
			return;
		}

		const { setting } = host.dataset;

		if (setting) {
			handleSettingChange(setting, eventTarget.value);
		}
	});
}
