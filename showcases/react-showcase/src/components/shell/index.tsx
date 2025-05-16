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
	DBShell
} from '@db-ux/react-core-components/src';
import defaultComponentVariants from '../../../../shared/shell.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';
import { type BaseComponentProps } from '../base-component-data';
import { DBShellProps } from '../../../../../output/tmp/react/src/components/shell/model';

const getShell = ({
	controlPanelDesktopPosition,
	controlPanelMobilePosition,
	fadeIn,
	children,
	className,
	describedbyid,
	id
}: DBShellProps) => (
	<DBShell
		controlPanelDesktopPosition={controlPanelDesktopPosition}
		controlPanelMobilePosition={controlPanelMobilePosition}
		fadeIn={fadeIn}
		className={className}
		describedbyid={describedbyid}
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
					<DBNavigationItem icon="x_placeholder">
						<a href="#">{children}</a>
					</DBNavigationItem>
					<DBNavigationItem disabled icon="x_placeholder">
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
