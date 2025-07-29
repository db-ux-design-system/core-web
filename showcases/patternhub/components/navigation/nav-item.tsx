import { DBNavigationItem, DBNavigationItemGroup } from '@components';
import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';
import type { NavigationItem } from '../../data/routes';

const isRouteActive = (
	pathname: string,
	navItem: NavigationItem,
	router: NextRouter
): boolean => {
	// Route is defined by a file within subdirectory of "pages"
	if (!router.query.slug) {
		return navItem.path === router.pathname;
	}

	// Dynamic route is defined by /pages/components/[[...slug]].tsx
	const { slug } = router.query;
	const sanitizedSlug = Array.isArray(slug) ? slug : [slug];

	return navItem.path === `/components/${sanitizedSlug.join('/')}`;
};

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const router = useRouter();

	const isActive = isRouteActive(router.pathname, navItem, router);

	if (navItem.subNavigation) {
		return (
			<DBNavigationItemGroup
				text={navItem.label}
				backButtonText={`Back to ${navItem.label}`}>
				{navItem.subNavigation
					.filter(({ isHiddenInMenu }) => isHiddenInMenu !== true)
					.map((subItem: NavigationItem) => (
						<NavItem
							key={`router-path-${subItem.path}`}
							navItem={subItem}></NavItem>
					))}
			</DBNavigationItemGroup>
		);
	}

	return (
		<DBNavigationItem>
			<Link
				key={`router-path-${navItem.path}`}
				href={navItem.path ?? ''}
				aria-current={isActive ? 'page' : undefined}>
				{navItem.label}
			</Link>
		</DBNavigationItem>
	);
};

export default NavItem;
