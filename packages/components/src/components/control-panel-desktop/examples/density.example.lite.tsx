import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopDensity() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					data-density="functional"
					orientation="horizontal"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Functional">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">Functional disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					data-density="regular"
					orientation="horizontal"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="(Default) Regular">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">(Default) Regular</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">(Default) Regular disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					data-density="expressive"
					orientation="horizontal"
					brand={
						<DBControlPanelBrand>
							DBControlPanel
						</DBControlPanelBrand>
					}>
					<DBNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Expressive">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">Expressive disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
