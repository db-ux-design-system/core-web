import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../utils/navigation-item';
import { DBNavigation } from '../../../../output/react/src';
import NavItem from './nav-item';
import { NavigationVariantType } from '../../../../output/react/src/components/navigation/model';

const Navigation = ({ variant }: { variant?: NavigationVariantType }) => (
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
