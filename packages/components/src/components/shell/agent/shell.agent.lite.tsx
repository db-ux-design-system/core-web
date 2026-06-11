import { DBButton } from '../../button';
import { DBControlPanelBrand } from '../../control-panel-brand';
import { DBControlPanelDesktop } from '../../control-panel-desktop';
import { DBControlPanelMetaNavigation } from '../../control-panel-meta-navigation';
import { DBControlPanelMobile } from '../../control-panel-mobile';
import { DBControlPanelPrimaryActions } from '../../control-panel-primary-actions';
import { DBControlPanelSecondaryActions } from '../../control-panel-secondary-actions';
import { DBLink } from '../../link';
import { DBNavigation } from '../../navigation';
import { DBNavigationItem } from '../../navigation-item';
import { DBShell } from '../index';

export default function Shell() {
	return (
		<>
			<h1>DBShell Documentation Examples</h1>

			<h2>1. Full Shell (Desktop + Mobile Control Panel)</h2>
			<DBShell
				controlPanelDesktop={
					<DBControlPanelDesktop
						brand={
							<DBControlPanelBrand>
								Application Name
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
						}>
						<DBNavigation>
							<DBNavigationItem icon="x_placeholder">
								<a href="#">Navi-Item 1</a>
							</DBNavigationItem>
							<DBNavigationItem icon="x_placeholder" disabled>
								<a href="#">Navi-Item 2</a>
							</DBNavigationItem>
						</DBNavigation>
					</DBControlPanelDesktop>
				}
				controlPanelMobile={
					<DBControlPanelMobile
						drawerHeadlinePlain="Application Name"
						brand={
							<DBControlPanelBrand>
								Application Name
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
						}>
						<DBNavigation>
							<DBNavigationItem icon="x_placeholder">
								<a href="#">Navi-Item 1</a>
							</DBNavigationItem>
							<DBNavigationItem icon="x_placeholder" disabled>
								<a href="#">Navi-Item 2</a>
							</DBNavigationItem>
						</DBNavigation>
					</DBControlPanelMobile>
				}>
				My Page Content
			</DBShell>

			<h2>2. Left Desktop Position (Vertical Control Panel)</h2>
			<DBShell
				controlPanelDesktopPosition="left"
				controlPanelDesktop={
					<DBControlPanelDesktop
						orientation="vertical"
						brand={
							<DBControlPanelBrand>
								Application Name
							</DBControlPanelBrand>
						}
						secondaryActions={
							<DBControlPanelSecondaryActions>
								<DBButton
									icon="x_placeholder"
									variant="ghost"
									noText>
									Profile
								</DBButton>
							</DBControlPanelSecondaryActions>
						}>
						<DBNavigation>
							<DBNavigationItem icon="x_placeholder">
								<a href="#">Navi-Item 1</a>
							</DBNavigationItem>
							<DBNavigationItem icon="x_placeholder" disabled>
								<a href="#">Navi-Item 2</a>
							</DBNavigationItem>
						</DBNavigation>
					</DBControlPanelDesktop>
				}>
				My Page Content
			</DBShell>
		</>
	);
}
