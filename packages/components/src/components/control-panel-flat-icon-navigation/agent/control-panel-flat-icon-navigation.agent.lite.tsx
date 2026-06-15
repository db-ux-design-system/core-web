import { DBNavigation } from '../../navigation';
import { DBNavigationItem } from '../../navigation-item';
import { DBControlPanelFlatIconNavigation } from '../index';

export default function ControlPanelFlatIconNavigation() {
	return (
		<>
			<h1>DBControlPanelFlatIconNavigation Documentation Examples</h1>

			<h2>1. Default Flat Icon Navigation</h2>
			<DBControlPanelFlatIconNavigation>
				<DBNavigation>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Home</a>
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Search</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBControlPanelFlatIconNavigation>

			<h2>2. No Text</h2>
			<DBControlPanelFlatIconNavigation noText>
				<DBNavigation>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Home</a>
					</DBNavigationItem>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">Search</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBControlPanelFlatIconNavigation>
		</>
	);
}
