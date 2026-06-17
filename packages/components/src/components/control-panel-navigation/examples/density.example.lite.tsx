import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelNavigationItemGroup from '../../control-panel-navigation-item-group/control-panel-navigation-item-group.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBControlPanelNavigation from '../control-panel-navigation.lite';
import { StorybookControlPanelNavigationArgTypes } from './_control-panel-navigation.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookControlPanelNavigationArgTypes
});

export default function ControlPanelNavigationDensity() {
	return (
		<Fragment>
			<div class="fit-content-container" data-density="functional">
				<DBInfotext
					id="functional"
					size="small"
					semantic="informational"
					icon="none">
					Functional
				</DBInfotext>
				<DBControlPanelNavigation
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-labelledby="functional">
					<DBControlPanelNavigationItemGroup text="Navi-Item 1">
						<DBControlPanelNavigationItemGroup text="Sub-Navi-Item 1">
							<DBControlPanelNavigationItem>
								<a href="#" aria-current="page">
									Sub-Sub-Navi-Item 1
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigationItemGroup>
						<DBControlPanelNavigationItem>
							<a href="#">Sub-Navi-Item 2</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</div>
			<div class="fit-content-container" data-density="regular">
				<DBInfotext
					id="_default__regular"
					size="small"
					semantic="informational"
					icon="none">
					(Default) Regular
				</DBInfotext>
				<DBControlPanelNavigation
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-labelledby="_default__regular">
					<DBControlPanelNavigationItemGroup text="Navi-Item 1">
						<DBControlPanelNavigationItemGroup text="Sub-Navi-Item 1">
							<DBControlPanelNavigationItem>
								<a href="#" aria-current="page">
									Sub-Sub-Navi-Item 1
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigationItemGroup>
						<DBControlPanelNavigationItem>
							<a href="#">Sub-Navi-Item 2</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</div>
			<div class="fit-content-container" data-density="expressive">
				<DBInfotext
					id="expressive"
					size="small"
					semantic="informational"
					icon="none">
					Expressive
				</DBInfotext>
				<DBControlPanelNavigation
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-labelledby="expressive">
					<DBControlPanelNavigationItemGroup text="Navi-Item 1">
						<DBControlPanelNavigationItemGroup text="Sub-Navi-Item 1">
							<DBControlPanelNavigationItem>
								<a href="#" aria-current="page">
									Sub-Sub-Navi-Item 1
								</a>
							</DBControlPanelNavigationItem>
							<DBControlPanelNavigationItem>
								<a href="#">Sub-Sub-Navi-Item 2</a>
							</DBControlPanelNavigationItem>
						</DBControlPanelNavigationItemGroup>
						<DBControlPanelNavigationItem>
							<a href="#">Sub-Navi-Item 2</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigationItemGroup>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 2</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem disabled>
						<a href="#">Navi-Item 3</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</div>
		</Fragment>
	);
}
