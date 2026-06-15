import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBControlPanelDesktop from '../control-panel-desktop.lite';
import { StorybookControlPanelDesktopArgTypes } from './_control-panel-desktop.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'With Application Name + Navigation',
		'Without Navigation',
		'Without Navigation + Primary + Secondary',
		'Without Navigation + Primary',
		'Without Navigation + Secondary',
		'Without Application Name',
		'Without Application Name + Navigation'
	],
	storybookArgTypes: StorybookControlPanelDesktopArgTypes
});

export default function ControlPanelDesktopExamples() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}>
					<DBNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="With Application Name + Navigation">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">With Application Name + Navigation</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">With Application Name disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					primaryActions={
						<DBControlPanelPrimaryActions>
							<DBButton
								icon="magnifying_glass"
								variant="ghost"
								noText>
								Search
							</DBButton>
						</DBControlPanelPrimaryActions>
					}
					secondaryActions={
						<DBControlPanelSecondaryActions>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</DBControlPanelSecondaryActions>
					}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					primaryActions={
						<DBControlPanelPrimaryActions>
							<DBButton
								icon="magnifying_glass"
								variant="ghost"
								noText>
								Search
							</DBButton>
						</DBControlPanelPrimaryActions>
					}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					secondaryActions={
						<DBControlPanelSecondaryActions>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText>
								Help
							</DBButton>
						</DBControlPanelSecondaryActions>
					}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand />}>
					<DBNavigation
						{...useTarget({
							angular: { 'data-x': 'workaround-angular' },
							default: {}
						})}
						aria-label="Without Application Name">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">Without Application Name</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" disabled>
							<a href="#">Without Application Name disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelDesktop>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelDesktop
					orientation="horizontal"
					brand={<DBControlPanelBrand />}
				/>
			</div>
		</Fragment>
	);
}
