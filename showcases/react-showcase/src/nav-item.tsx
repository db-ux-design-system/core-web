import { Link, useLocation } from 'react-router-dom';
import { DBNavigationItem } from '../../../output/react/src';
import type { NavigationItem } from './utils/navigation-item';

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const location = useLocation();

	const isActive =
		navItem.path === ''
			? location.pathname === '/'
			: location.pathname.includes(navItem.path);

	return (
		<DBNavigationItem
			active={isActive}
			slotSubNavigation={
				navItem.subNavigation && (
					<>
						{navItem.subNavigation
							.map((subItem) => ({
								...subItem,
								path: `${navItem.path}/${subItem.path}`
							}))
							.map((subItem) =>
								subItem.component ? (
									<Link
										key={`router-path-${subItem.path}`}
										to={subItem.path}>
										<NavItem navItem={subItem}></NavItem>
									</Link>
								) : (
									<NavItem
										key={`router-path-${subItem.path}`}
										navItem={subItem}></NavItem>
								)
							)}
					</>
				)
			}>
			{navItem.label}
		</DBNavigationItem>
	);
};

export default NavItem;
