import {
	DBButton,
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBLink,
	DBNavigation,
	DBNavigationItem,
	DBShell,
	type DBShellProps
} from '@components';
import defaultComponentVariants from '../../../../shared/shell.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getShell = ({
	controlPanelDesktopPosition,
	controlPanelMobilePosition,
	fadeIn,
	children,
	className,
	id
}: DBShellProps) => (
	<DBShell
		controlPanelDesktopPosition={controlPanelDesktopPosition}
		controlPanelMobilePosition={controlPanelMobilePosition}
		fadeIn={fadeIn}
		className={className}
		id={id}
		controlPanelDesktop={
			<DBControlPanelDesktop
				brand={
					<DBControlPanelBrand title="DBHeader">
						DBHeader
					</DBControlPanelBrand>
				}
				metaNavigation={
					<DBControlPanelMetaNavigation>
						<DBLink href="#">Imprint</DBLink>
						<DBLink href="#">Help</DBLink>
					</DBControlPanelMetaNavigation>
				}
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
				}>
				<DBNavigation>
					<DBNavigationItem
						icon="x_placeholder"
						tooltip={`${children}`}>
						<a href="#">{children}</a>
					</DBNavigationItem>
					<DBNavigationItem
						disabled
						icon="x_placeholder"
						tooltip={`${children} disabled`}>
						<a href="#">{children} disabled</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBControlPanelDesktop>
		}>
		My Page Content
	</DBShell>
);

const ShellComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBShell"
			variants={getVariants(
				defaultComponentVariants,
				getShell,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default ShellComponent;
