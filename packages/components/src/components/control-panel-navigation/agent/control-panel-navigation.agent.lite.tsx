import { DBControlPanelNavigationItem } from '../../control-panel-navigation-item/index';
import { DBControlPanelNavigation } from '../index';

export default function ControlPanelNavigation() {
	return (
		<>
			<h1>DBControlPanelNavigation Documentation Examples</h1>

			<h2>1. Default Navigation</h2>
			<DBControlPanelNavigation>
				<DBControlPanelNavigationItem>
					<a href="#">Navi-Item 1</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem icon="x_placeholder">
					<a href="#">Navi-Item 2</a>
				</DBControlPanelNavigationItem>
				<DBControlPanelNavigationItem disabled>
					<a href="#">Navi-Item 3</a>
				</DBControlPanelNavigationItem>
			</DBControlPanelNavigation>
		</>
	);
}
