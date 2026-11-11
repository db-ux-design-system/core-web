import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItemGroup from '../../control-panel-navigation-item-group/control-panel-navigation-item-group.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelMobile from '../control-panel-mobile.lite';
import { StorybookControlPanelMobileArgTypes } from './_control-panel-mobile.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookControlPanelMobileArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/control-panel-mobile/control-panel-mobile-interaction.spec.ts).
 *
 * The mobile navigation always renders as a drilldown inside the drawer, so
 * opening the group reveals its sub-items via the sliding overlay. This is the
 * regression guard for #8605, where the overlay was dragged off-screen on the
 * web component output and the sub-items ended up invisible.
 */
export default function ControlPanelMobileInteraction() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					data-testid="drilldown-panel"
					position="top"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation aria-label="Drilldown Interaction">
						<DBControlPanelNavigationItemGroup
							text="Drilldown Group"
							data-testid="drilldown-group">
							<DBControlPanelNavigationItem data-testid="drilldown-sub1">
								<a href="#">Drilldown Sub 1</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigationItemGroup>
					</DBControlPanelNavigation>
				</DBControlPanelMobile>
			</div>
		</Fragment>
	);
}
