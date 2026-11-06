import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Expanded',
	storybookNames: ['(Default) Expanded', 'Collapsed'],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopExpanded() {
	return (
		<Fragment>
			<div
				style={{
					maxInlineSize: '300px',
					width: 'auto',
					height: '500px',
					display: 'block'
				}}>
				<DBControlPanelDesktop
					orientation="vertical"
					expanded={true}
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="(Default) Expanded">
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							active>
							<a href="#">(Default) Expanded 1</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Expanded 2</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Expanded 3</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div
				style={{
					maxInlineSize: '300px',
					width: 'auto',
					height: '500px',
					display: 'block'
				}}>
				<DBControlPanelDesktop
					orientation="vertical"
					expanded={false}
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Collapsed">
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							active>
							<a href="#">Collapsed 1</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Collapsed 2</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Collapsed 3</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
