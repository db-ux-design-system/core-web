import { useMetadata } from '@builder.io/mitosis';
import { DBNavigation } from '../../navigation';
import { DBNavigationItem } from '../../navigation-item';
import { DBShell } from '../index';

useMetadata({
	slots: {
		controlPanelDesktop: {
			angular:
				'<db-control-panel-desktop controlPanelDesktop><db-control-panel-brand brand data-logo="db-systel"></db-control-panel-brand><db-control-panel-meta-navigation metaNavigation><db-link href="#">Imprint</db-link><db-link href="#">Help</db-link></db-control-panel-meta-navigation><db-control-panel-primary-actions primaryActions><db-button icon="magnifying_glass" variant="ghost" noText>Search</db-button></db-control-panel-primary-actions><db-control-panel-secondary-actions secondaryActions><db-button icon="x_placeholder" variant="ghost" noText>Profile</db-button><db-button icon="x_placeholder" variant="ghost" noText>Notification</db-button><db-button icon="x_placeholder" variant="ghost" noText>Help</db-button></db-control-panel-secondary-actions><db-navigation><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 1</a></db-navigation-item><db-navigation-item icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></db-navigation-item></db-navigation></db-control-panel-desktop>',
			vue: '<DBControlPanelDesktop><template v-slot:brand><DBControlPanelBrand data-logo="db-systel" /></template><template v-slot:metaNavigation><DBLink href="#">Imprint</DBLink><DBLink href="#">Help</DBLink></template><template v-slot:primaryActions><DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton></template><template v-slot:secondaryActions><DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Help</DBButton></template><DBNavigation><DBNavigationItem icon="x_placeholder"><a href="#">Navi-Item 1</a></DBNavigationItem><DBNavigationItem icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></DBNavigationItem></DBNavigation></DBControlPanelDesktop>',
			stencil:
				'<db-control-panel-desktop slot="controlPanelDesktop"><db-control-panel-brand slot="brand" data-logo="db-systel"></db-control-panel-brand><db-control-panel-meta-navigation slot="metaNavigation"><db-link href="#">Imprint</db-link><db-link href="#">Help</db-link></db-control-panel-meta-navigation><db-control-panel-primary-actions slot="primaryActions"><db-button icon="magnifying_glass" variant="ghost" noText>Search</db-button></db-control-panel-primary-actions><db-control-panel-secondary-actions slot="secondaryActions"><db-button icon="x_placeholder" variant="ghost" noText>Profile</db-button><db-button icon="x_placeholder" variant="ghost" noText>Notification</db-button><db-button icon="x_placeholder" variant="ghost" noText>Help</db-button></db-control-panel-secondary-actions><db-navigation><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 1</a></db-navigation-item><db-navigation-item icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></db-navigation-item></db-navigation></db-control-panel-desktop>',
			react: '<DBControlPanelDesktop brand={<DBControlPanelBrand data-logo="db-systel" />} metaNavigation={<><DBLink href="#">Imprint</DBLink><DBLink href="#">Help</DBLink></>} primaryActions={<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>} secondaryActions={<><DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Help</DBButton></>}><DBNavigation><DBNavigationItem icon="x_placeholder"><a href="#">Navi-Item 1</a></DBNavigationItem><DBNavigationItem icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></DBNavigationItem></DBNavigation></DBControlPanelDesktop>'
		},
		controlPanelMobile: {
			angular:
				'<db-control-panel-mobile controlPanelMobile drawerHeadlinePlain="Application Name"><db-control-panel-brand brand data-logo="db-systel"></db-control-panel-brand><db-control-panel-meta-navigation metaNavigation><db-link href="#">Imprint</db-link><db-link href="#">Help</db-link></db-control-panel-meta-navigation><db-control-panel-primary-actions primaryActions><db-button icon="magnifying_glass" variant="ghost" noText>Search</db-button></db-control-panel-primary-actions><db-control-panel-secondary-actions secondaryActions><db-button icon="x_placeholder" variant="ghost" noText>Profile</db-button><db-button icon="x_placeholder" variant="ghost" noText>Notification</db-button><db-button icon="x_placeholder" variant="ghost" noText>Help</db-button></db-control-panel-secondary-actions><db-navigation><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 1</a></db-navigation-item><db-navigation-item icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></db-navigation-item></db-navigation></db-control-panel-mobile>',
			vue: '<DBControlPanelMobile drawerHeadlinePlain="Application Name"><template v-slot:brand><DBControlPanelBrand data-logo="db-systel" /></template><template v-slot:metaNavigation><DBLink href="#">Imprint</DBLink><DBLink href="#">Help</DBLink></template><template v-slot:primaryActions><DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton></template><template v-slot:secondaryActions><DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Help</DBButton></template><DBNavigation><DBNavigationItem icon="x_placeholder"><a href="#">Navi-Item 1</a></DBNavigationItem><DBNavigationItem icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></DBNavigationItem></DBNavigation></DBControlPanelMobile>',
			stencil:
				'<db-control-panel-mobile slot="controlPanelMobile" drawerHeadlinePlain="Application Name"><db-control-panel-brand slot="brand" data-logo="db-systel"></db-control-panel-brand><db-control-panel-meta-navigation slot="metaNavigation"><db-link href="#">Imprint</db-link><db-link href="#">Help</db-link></db-control-panel-meta-navigation><db-control-panel-primary-actions slot="primaryActions"><db-button icon="magnifying_glass" variant="ghost" noText>Search</db-button></db-control-panel-primary-actions><db-control-panel-secondary-actions slot="secondaryActions"><db-button icon="x_placeholder" variant="ghost" noText>Profile</db-button><db-button icon="x_placeholder" variant="ghost" noText>Notification</db-button><db-button icon="x_placeholder" variant="ghost" noText>Help</db-button></db-control-panel-secondary-actions><db-navigation><db-navigation-item icon="x_placeholder"><a href="#">Navi-Item 1</a></db-navigation-item><db-navigation-item icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></db-navigation-item></db-navigation></db-control-panel-mobile>',
			react: '<DBControlPanelMobile drawerHeadlinePlain="Application Name" brand={<DBControlPanelBrand data-logo="db-systel" />} metaNavigation={<><DBLink href="#">Imprint</DBLink><DBLink href="#">Help</DBLink></>} primaryActions={<DBButton icon="magnifying_glass" variant="ghost" noText>Search</DBButton>} secondaryActions={<><DBButton icon="x_placeholder" variant="ghost" noText>Profile</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Notification</DBButton><DBButton icon="x_placeholder" variant="ghost" noText>Help</DBButton></>}><DBNavigation><DBNavigationItem icon="x_placeholder"><a href="#">Navi-Item 1</a></DBNavigationItem><DBNavigationItem icon="x_placeholder" disabled><a href="#">Navi-Item 2</a></DBNavigationItem></DBNavigation></DBControlPanelMobile>'
		}
	}
});

export default function Shell() {
	return (
		<>
			<h1>DBShell Documentation Examples</h1>

			<h2>1. Full Shell (Desktop + Mobile Control Panel)</h2>
			<DBShell>
				__slots__
				<DBNavigation>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 1</a>
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder" disabled>
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBShell>
		</>
	);
}
