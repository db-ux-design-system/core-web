import { DBNavigationItem } from '../../navigation-item/index';
import { DBNavigation } from '../index';

export default function Navigation() {
	return (
		<>
			<h1>DBNavigation Documentation Examples</h1>

			<h2>1. Default Navigation</h2>
			<DBNavigation>
				<DBNavigationItem>
					<a href="#">Navi-Item 1</a>
				</DBNavigationItem>
				<DBNavigationItem icon="x_placeholder">
					<a href="#">Navi-Item 2</a>
				</DBNavigationItem>
				<DBNavigationItem disabled>
					<a href="#">Navi-Item 3</a>
				</DBNavigationItem>
			</DBNavigation>
		</>
	);
}
