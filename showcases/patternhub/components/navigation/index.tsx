import { DBMainNavigation } from '../../../../output/react/src';
import { getRouteWithBasePath, ROUTES } from '../../data/routes';
import type { NavigationItem } from '../../data/routes';
import NavItem from './nav-item';

const Navigation = () => (
	<DBMainNavigation>
		{ROUTES.map((route) => getRouteWithBasePath(route)).map(
			(navItem: NavigationItem) => (
				<NavItem
					key={`router-path-${navItem.path}`}
					navItem={navItem}
				/>
			)
		)}
	</DBMainNavigation>
);

export default Navigation;
