import { Link } from 'react-router-dom';
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
			(navItem: NavigationItem) =>
				navItem.component ? (
					<Link key={`router-path-${navItem.path}`} to={navItem.path}>
						<NavItem navItem={navItem} />
					</Link>
				) : (
					<NavItem
						key={`router-path-${navItem.path}`}
						navItem={navItem}
					/>
				)
		)}
	</DBMainNavigation>
);

export default Navigation;
