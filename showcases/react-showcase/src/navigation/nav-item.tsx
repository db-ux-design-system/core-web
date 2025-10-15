import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DBNavigationItem } from '../../../../output/react/src';
import type { NavigationItem } from '../utils/navigation-item';

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const pathname =
		process.env.NEXT_SHOWCASE_VARIANT === 'next'
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

	return (
		<DBNavigationItem
			backButtonText={`Back to ${navItem.label}`}
			subNavigation={
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
				<>
					{process.env.NEXT_SHOWCASE_VARIANT === 'next' ? (
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
			) : (
				navItem.label
			)}
		</DBNavigationItem>
	);
};

export default NavItem;
