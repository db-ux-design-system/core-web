import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../utils/navigation-item';
import { DBMainNavigation } from '../../../../output/react/src';
import NavItem from './nav-item';

const Navigation = () => (
	<DBMainNavigation>
		{getSortedNavigationItems(NAVIGATION_ITEMS).map(
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
