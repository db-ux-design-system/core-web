import { Link, useLocation } from 'react-router-dom';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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

		setIsActive(
			navItem.path === ''
				? pathname === '/'
				: pathname.includes(navItem.path)
		);
	}, [pathname]);

	return (
		<DBNavigationItem
			active={isActive}
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
							href={navItem.path}>
							{navItem.label}
						</NextLink>
					) : (
						<Link
							key={`router-path-${navItem.path}`}
							to={navItem.path}>
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
