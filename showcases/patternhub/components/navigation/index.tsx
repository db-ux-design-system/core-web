import { DBNavigation } from '@db-ux/react-core-components/src';
import { ROUTES, type NavigationItem } from '../../data/routes';
import NavItem from './nav-item';

const Navigation = () => (
	<DBNavigation>
		{ROUTES.map((navItem: NavigationItem) => (
			<NavItem key={`router-path-${navItem.path}`} navItem={navItem} />
		))}
	</DBNavigation>
);

export default Navigation;
