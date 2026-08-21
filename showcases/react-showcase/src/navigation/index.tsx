import {
	DBControlPanelNavigation,
	type NavigationItemGroupVariantType
} from '@components';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../utils/navigation-item';
import NavItem from './nav-item';

const Navigation = ({
	variant,
	label
}: {
	variant?: NavigationItemGroupVariantType;
	label: string;
}) => (
	<DBControlPanelNavigation
		variant={variant}
		aria-label={`main navigation ${label}`}>
		{getSortedNavigationItems(NAVIGATION_ITEMS).map(
			(navItem: NavigationItem) => (
				<NavItem
					key={`router-path-${navItem.path}`}
					navItem={navItem}
				/>
			)
		)}
	</DBControlPanelNavigation>
);

export default Navigation;
