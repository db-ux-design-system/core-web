import { DBNavigationItem, DBNavigationItemGroup } from '@components';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavigationItem } from '../utils/navigation-item';

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const menuId = useId();
	const pathname = process.env.NEXT_SHOWCASE_VARIANT?.startsWith('next')
		? usePathname()
		: useLocation().pathname;

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (!pathname) {
			return;
		}

		const standardizedItemPath = navItem.path.startsWith('/')
			? navItem.path
			: `/${navItem.path}`;

		setIsActive(standardizedItemPath === pathname);
	}, [pathname]);

	if (navItem.subNavigation) {
		return (
			<DBNavigationItemGroup
				tooltip={navItem.label}
				text={navItem.label}
				backButtonText={`Back to ${navItem.label}`}
				menuId={menuId}>
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
			</DBNavigationItemGroup>
		);
	}

	return (
		<DBNavigationItem tooltip={navItem.label}>
			<>
				{process.env.NEXT_SHOWCASE_VARIANT?.startsWith('next') ? (
					<NextLink
						key={`router-path-${navItem.path}`}
						href={navItem.path}
						aria-current={isActive ? 'page' : undefined}>
						{navItem.label}
					</NextLink>
				) : (
					<Link
						key={`router-path-${navItem.path}`}
						to={navItem.path}
						aria-current={isActive ? 'page' : undefined}>
						{navItem.label}
					</Link>
				)}
			</>
		</DBNavigationItem>
	);
};

export default NavItem;
