import { DBMainNavigation } from '../../../../output/react/src';
import { ROUTES, type NavigationItem } from '../../data/routes';
import NavItem from './nav-item';

const Navigation = () => (
	<DBMainNavigation>
		{ROUTES.map((navItem: NavigationItem) => (
			<NavItem key={`router-path-${navItem.path}`} navItem={navItem} />
		))}
	</DBMainNavigation>
);

export default Navigation;
