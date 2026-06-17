import { Fragment, useMetadata, useTarget } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBControlPanelBrand from '../../control-panel-brand/control-panel-brand.lite';
import DBControlPanelMetaNavigation from '../../control-panel-meta-navigation/control-panel-meta-navigation.lite';
import DBControlPanelPrimaryActions from '../../control-panel-primary-actions/control-panel-primary-actions.lite';
import DBControlPanelSecondaryActions from '../../control-panel-secondary-actions/control-panel-secondary-actions.lite';
import DBLink from '../../link/link.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBControlPanelMobile from '../control-panel-mobile.lite';
import { StorybookControlPanelMobileArgTypes } from './_control-panel-mobile.arg.types';

useMetadata({
	storybookTitle: 'Examples',
	storybookNames: [
		'With Application Name + Navigation',
		'Without Navigation',
		'Without Navigation + Primary + Secondary',
		'Without Navigation + Primary',
		'Without Navigation + Secondary',
		'Without Navigation + Meta',
		'Without Application Name',
		'Without Application Name + Navigation'
	],
	storybookArgTypes: StorybookControlPanelMobileArgTypes
});

export default function ControlPanelMobileExamples() {
	return (
		<Fragment>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
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
							<a href="#">
								With Application Name + Navigation disabled
							</a>
						</DBNavigationItem>
					</DBNavigation>
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
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
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
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
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
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
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand data-logo="db-systel" />}
					metaNavigation={
						<DBControlPanelMetaNavigation>
							<DBLink href="#">Imprint</DBLink>
							<DBLink href="#">Help</DBLink>
						</DBControlPanelMetaNavigation>
					}
				/>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
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
				</DBControlPanelMobile>
			</div>
			<div style={{ width: '100%', display: 'block' }}>
				<DBControlPanelMobile
					position="top"
					drawerHeaderText="DBControlPanel"
					brand={<DBControlPanelBrand />}
				/>
			</div>
		</Fragment>
	);
}
