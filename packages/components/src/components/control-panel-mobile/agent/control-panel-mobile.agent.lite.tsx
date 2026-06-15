import { DBControlPanelBrand } from '../../control-panel-brand';
import { DBNavigation } from '../../navigation';
import { DBNavigationItem } from '../../navigation-item';
import { DBControlPanelMobile } from '../index';

export default function ControlPanelMobile() {
	return (
		<>
			<h1>DBControlPanelMobile Documentation Examples</h1>

			<h2>1. Default Control Panel Mobile (Drawer)</h2>
			<DBControlPanelMobile
				drawerHeadlinePlain="Application Name"
				brand={
					<DBControlPanelBrand>Application Name</DBControlPanelBrand>
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

			<h2>2. Bottom Position + Flat Icon Variant</h2>
			<DBControlPanelMobile
				position="bottom"
				variant="flat-icon"
				drawerHeadlinePlain="Application Name"
				brand={
					<DBControlPanelBrand>Application Name</DBControlPanelBrand>
				}>
				<DBNavigation>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 1</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBControlPanelMobile>
		</>
	);
}
