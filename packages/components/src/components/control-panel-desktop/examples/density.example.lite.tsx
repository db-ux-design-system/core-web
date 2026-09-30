import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelNavigationItem from '../../control-panel-navigation-item/control-panel-navigation-item.lite';
import DBControlPanelNavigation from '../../control-panel-navigation/control-panel-navigation.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: [
		'Functional',
		'(Default) Regular',
		'Expressive',
		'Functional Vertical',
		'(Default) Regular Vertical',
		'Expressive Vertical'
	],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopDensity() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Orientation: Horizontal
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					data-density="functional"
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Functional">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">Functional disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					data-density="regular"
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="(Default) Regular">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Regular</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">(Default) Regular disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					data-density="expressive"
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Expressive">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">Expressive disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Orientation: Vertical
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div
				style={{
					maxInlineSize: '300px',
					width: 'auto',
					height: '500px',
					display: 'block'
				}}>
				<DBControlPanelDesktop
					data-density="functional"
					orientation="vertical"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Functional Vertical">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Functional</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">Functional disabled</a>
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
					data-density="regular"
					orientation="vertical"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="(Default) Regular Vertical">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">(Default) Regular</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">(Default) Regular disabled</a>
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
					data-density="expressive"
					orientation="vertical"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBControlPanelNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Expressive Vertical">
						<DBControlPanelNavigationItem icon="x_placeholder">
							<a href="#">Expressive</a>
						</DBControlPanelNavigationItem>
						<DBControlPanelNavigationItem
							icon="x_placeholder"
							disabled>
							<a href="#">Expressive disabled</a>
						</DBControlPanelNavigationItem>
					</DBControlPanelNavigation>
				</DBControlPanelDesktop>
			</div>
		</Fragment>
	);
}
