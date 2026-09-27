import { DBControlPanelNavigation } from '@components';
import { ROUTES, type NavigationItem } from '../../data/routes';
import NavItem from './nav-item';

const Navigation = () => (
	<DBControlPanelNavigation>
		{ROUTES.map((navItem: NavigationItem) => (
			<NavItem key={`router-path-${navItem.path}`} navItem={navItem} />
		))}
	</DBControlPanelNavigation>
);

export default Navigation;
