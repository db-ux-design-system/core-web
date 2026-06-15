import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Orientation',
	storybookNames: ['(Default) Horizontal', 'Vertical'],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopOrientation() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="(Default) Horizontal">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">(Default) Horizontal</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">(Default) Horizontal disabled</a>
						</DBNavigationItem>
					</DBNavigation>
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
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBNavigation
						{...useTarget({
							angular: {
								'data-x': 'workaround-angular'
							},
							default: {}
						})}
						aria-label="Vertical">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Vertical</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">Vertical disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
