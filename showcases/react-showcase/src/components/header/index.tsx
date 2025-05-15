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
} from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/header.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';
import { type BaseComponentProps } from '../base-component-data';
import { DBControlPanelDesktopProps } from '../../../../../output/react/src/components/control-panel-desktop/model';

const getHeader = ({
	children,
	className,
	describedbyid,
	orientation,
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
		describedbyid={describedbyid}
		id={id}
		orientation={orientation}>
		{withNavigation && (
			<DBNavigation aria-label={children}>
				<DBNavigationItem icon="x_placeholder">
					<a href="#">{children}</a>
				</DBNavigationItem>
				<DBNavigationItem disabled>
					<a href="#">{children} disabled</a>
				</DBNavigationItem>
			</DBNavigation>
		)}
	</DBControlPanelDesktop>
);

const HeaderComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBControlPanelDesktop"
			variants={getVariants(
				defaultComponentVariants,
				getHeader,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default HeaderComponent;
