import { DBControlPanelBrand } from '../../control-panel-brand';
import { DBControlPanelNavigation } from '../../control-panel-navigation';
import { DBControlPanelNavigationItem } from '../../control-panel-navigation-item';
import { DBControlPanelDesktop } from '../index';

export default function ControlPanelDesktop() {
	return (
		<>
			<h1>DBControlPanelDesktop Documentation Examples</h1>

			<h2>1. Default Control Panel Desktop</h2>
			<DBControlPanelDesktop
				brand={
					<DBControlPanelBrand>Application Name</DBControlPanelBrand>
				}>
				<DBControlPanelNavigation>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 1</a>
					</DBControlPanelNavigationItem>
					<DBControlPanelNavigationItem icon="x_placeholder" disabled>
						<a href="#">Navi-Item 2</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>

			<h2>2. Vertical Orientation</h2>
			<DBControlPanelDesktop
				orientation="vertical"
				brand={
					<DBControlPanelBrand>Application Name</DBControlPanelBrand>
				}>
				<DBControlPanelNavigation>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 1</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>

			<h2>3. Collapsed (expanded=false)</h2>
			<DBControlPanelDesktop
				orientation="vertical"
				expanded={false}
				brand={
					<DBControlPanelBrand>Application Name</DBControlPanelBrand>
				}>
				<DBControlPanelNavigation>
					<DBControlPanelNavigationItem icon="x_placeholder">
						<a href="#">Navi-Item 1</a>
					</DBControlPanelNavigationItem>
				</DBControlPanelNavigation>
			</DBControlPanelDesktop>
		</>
	);
}
