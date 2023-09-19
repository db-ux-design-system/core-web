import { Link, useLocation } from 'react-router-dom';
import { DBNavigationItem } from '../../../../output/react/src';
import type { NavigationItem } from '../utils/navigation-item';

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const location = useLocation();

	const isActive =
		navItem.path === ''
			? location.pathname === '/'
			: location.pathname.includes(navItem.path);

	return (
		<DBNavigationItem
			active={isActive}
			backButtonText={`Back to ${navItem.label}`}
			slotSubNavigation={
				navItem.subNavigation && (
					<>
						{navItem.subNavigation
							.map((subItem: NavigationItem) => ({
								...subItem,
								path: `${navItem.path}/${subItem.path}`
							}))
							.map((subItem: NavigationItem) => (
								<NavItem
									key={`router-path-${subItem.path}`}
									navItem={subItem}></NavItem>
							))}
					</>
				)
			}>
			{navItem.component ? (
				<Link key={`router-path-${navItem.path}`} to={navItem.path}>
					{navItem.label}
				</Link>
			) : (
				navItem.label
			)}
		</DBNavigationItem>
	);
};

export default NavItem;
