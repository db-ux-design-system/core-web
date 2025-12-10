import {
	DBButton,
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '@components';
import { type DBControlPanelDesktopProps } from '@components/src/components/control-panel-desktop/model';
import defaultComponentVariants from '../../../../shared/control-panel-desktop.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getControlPanelDesktop = ({
	children,
	className,
	orientation = 'horizontal',
	id,
	width,
	withNavigation = true,
	withName = true,
	withPrimary = true,
	withSecondary = true,
	withMeta = true
}: DBControlPanelDesktopProps & {
	withName: boolean;
	withPrimary: boolean;
	withSecondary: boolean;
	withMeta: boolean;
	withNavigation: boolean;
}) => (
	<DBControlPanelDesktop
		width={width}
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
		}
		className={className}
		id={id}
		orientation={orientation}>
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
	</DBControlPanelDesktop>
);

const ControlPanelDesktopComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBControlPanelDesktop"
			variants={getVariants(
				defaultComponentVariants,
				getControlPanelDesktop,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default ControlPanelDesktopComponent;
