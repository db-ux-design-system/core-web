import {
	DBButton,
	DBControlPanelBrand,
	DBControlPanelMetaNavigation,
	DBControlPanelMobile,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '@components';
import type { DBControlPanelMobileProps } from '@components/src/components/control-panel-mobile/model';
import defaultComponentVariants from '../../../../shared/control-panel-mobile.json';
import type { BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getControlPanelMobile = ({
	children,
	withNavigation = true,
	withName = true,
	withPrimary = true,
	withSecondary = true,
	withMeta = true,
	position = 'top'
}: DBControlPanelMobileProps & {
	withName: boolean;
	withPrimary: boolean;
	withSecondary: boolean;
	withMeta: boolean;
	withNavigation: boolean;
}) => (
	<DBControlPanelMobile
		position={position}
		brandDrawer={
			<DBControlPanelBrand title="DBHeader">
				{withName && 'DBHeader'}
			</DBControlPanelBrand>
		}
		brand={
			<DBControlPanelBrand title="DBHeader">
				{withName && 'DBHeader'}
			</DBControlPanelBrand>
		}
		metaNavigation={
			withMeta && (
				<DBControlPanelMetaNavigation>
					<DBLink href="#">Imprint</DBLink>
					<DBLink href="#">Help</DBLink>
				</DBControlPanelMetaNavigation>
			)
		}
		primaryActions={
			withPrimary && (
				<DBControlPanelPrimaryActions>
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				</DBControlPanelPrimaryActions>
			)
		}
		secondaryActions={
			withSecondary && (
				<DBControlPanelSecondaryActions>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Profile
					</DBButton>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Notification
					</DBButton>
					<DBButton icon="x_placeholder" variant="ghost" noText>
						Help
					</DBButton>
				</DBControlPanelSecondaryActions>
			)
		}>
		{withNavigation && (
			<DBNavigation aria-label={children}>
				<DBNavigationItem icon="x_placeholder">
					<a href="#">{children}</a>
				</DBNavigationItem>
				<DBNavigationItem icon="x_placeholder" disabled>
					<a href="#">{children} disabled</a>
				</DBNavigationItem>
			</DBNavigation>
		)}
	</DBControlPanelMobile>
);

const ControlPanelMobileComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBControlPanelMobile"
			variants={getVariants(
				defaultComponentVariants,
				getControlPanelMobile
			)}></DefaultComponent>
	);
};

export default ControlPanelMobileComponent;
