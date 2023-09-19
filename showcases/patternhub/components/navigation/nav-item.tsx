import { useRouter } from 'next/router';
import Link from 'next/link';
import { DBNavigationItem } from '../../../../output/react/src';
import type { NavigationItem } from '../../data/routes';

const isRouteActive = (pathname: string, navItem: NavigationItem): boolean =>
	navItem.path === '/'
		? pathname === '/'
		: pathname.includes(`${navItem.path}/`) ||
		  pathname === navItem.path ||
		  Boolean(
				navItem.subNavigation?.find((subItem) => {
					return pathname.includes(`${subItem.path}/`);
				})
		  );

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const router = useRouter();

	const isActive = isRouteActive(router.pathname, navItem);

	return (
		<DBNavigationItem
			active={isActive}
			backButtonText={`Back to ${navItem.label}`}
			slotSubNavigation={
				navItem.subNavigation && (
					<>
						{navItem?.subNavigation.map(
							(subItem: NavigationItem) => (
								<NavItem
									key={`router-path-${subItem.path}`}
									navItem={subItem}></NavItem>
							)
						)}
					</>
				)
			}>
			{navItem.subNavigation ? (
				navItem.label
			) : (
				<Link
					key={`router-path-${navItem.path}`}
					href={navItem.path ?? ''}>
					{navItem.label}
				</Link>
			)}
		</DBNavigationItem>
	);
};

export default NavItem;
