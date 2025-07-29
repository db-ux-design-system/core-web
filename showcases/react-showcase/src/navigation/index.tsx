import { DBNavigation, type NavigationItemGroupVariantType } from '@components';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../utils/navigation-item';
import NavItem from './nav-item';

const Navigation = ({
	variant
}: {
	variant?: NavigationItemGroupVariantType;
}) => (
	<DBNavigation variant={variant} aria-label="main navigation">
		{getSortedNavigationItems(NAVIGATION_ITEMS).map(
			(navItem: NavigationItem) => (
				<NavItem
					key={`router-path-${navItem.path}`}
					navItem={navItem}
				/>
			)
		)}
	</DBNavigation>
);

export default Navigation;
