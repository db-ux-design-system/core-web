export type NavItem = {
	path: string;
	label: string;
	children?: NavItem[];
};

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
			{ path: '01/section', label: 'Section' },
			{ path: '01/header', label: 'Header' }
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
			{ path: '04/tabs', label: 'Tabs' }
		])
	},
	{
		path: '05',
		label: '05 Navigation',
		children: sortNavItems([
			{ path: '05/navigation-item', label: 'NavigationItem' },
			{ path: '05/navigation', label: 'Navigation' }
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
				return `
				<db-navigation-item text="${item.label}">
					${item.children
						.map(
							(child) =>
								`<db-navigation-item slot="subNavigation" hideSubNavigation="true"><a href="#/${child.path}">${child.label}</a></db-navigation-item>`
						)
						.join('')}
				</db-navigation-item>`;
			}

			return `<db-navigation-item hideSubNavigation="true"><a href="#/${item.path}">${item.label}</a></db-navigation-item>`;
		})
		.join('');
}

export function renderNavigation(): void {
	const app = document.querySelector('#app');
	if (!app) return;

	app.innerHTML = `
		<db-page variant="fixed" fadeIn="true">
			<db-header slot="header">
				<db-brand slot="brand">Showcase</db-brand>
				<db-select slot="metaNavigation" variant="floating" label="Nothing">
					<option>Nothing here for stencil</option>
				</db-select>
				<db-navigation aria-label="main-navigation">
					<db-navigation-item hideSubNavigation="true"><a href="#/">Home</a></db-navigation-item>
					${renderNavItems(NAVIGATION_ITEMS)}
				</db-navigation>
			</db-header>
		</db-page>
	`;
}
