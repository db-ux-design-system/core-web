import { useMetadata } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItemGroup from '../../control-panel-navigation-item-group/control-panel-navigation-item-group.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/control-panel-desktop/control-panel-desktop-interaction.spec.ts,
 * which also covers DBControlPanelNavigation, DBControlPanelNavigationItem
 * and DBControlPanelNavigationItemGroup - sub-components with no standalone
 * showcase of their own).
 *
 * The "tree" variant instance covers ARIA tree roles and arrow-key
 * navigation; the default instance covers the item group's expand button and
 * the disabled item's ARIA state.
 */
export default function ControlPanelDesktopInteraction() {
	return (
		<div style={{ width: '100%', display: 'block' }}>
			<DBControlPanelDesktop
				orientation="horizontal"
				brand={<DBControlPanelBrand data-logo="db-systel" />}>
				<DBControlPanelNavigation aria-label="Interaction">
					<DBControlPanelNavigationItemGroup
						text="Group"
						data-testid="group">
						<DBControlPanelNavigationItem data-testid="group-item1">
							<a href="#">Item 1</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem data-testid="group-item2">
							<a href="#">Item 2</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem
						data-testid="disabled-item"
						disabled>
						<a href="#">Disabled</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>

			<DBControlPanelDesktop
				data-testid="tree-panel"
				orientation="horizontal"
				brand={<DBControlPanelBrand data-logo="db-systel" />}>
				<DBControlPanelNavigation
					aria-label="Tree Interaction"
					variant="tree">
					<DBControlPanelNavigationItemGroup
						text="Tree Group"
						data-testid="tree-group">
						<DBControlPanelNavigationItem data-testid="tree-sub1">
							<a href="#">Sub 1</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem data-testid="tree-item2">
						<a href="#">Item 2</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem data-testid="tree-item3">
						<a href="#">Item 3</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>
		</div>
	);
}
