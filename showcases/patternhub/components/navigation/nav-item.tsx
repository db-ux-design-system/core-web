import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';
import { DBNavigationItem } from '../../../../packages/react-core-components/src';
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

	return (
		<DBNavigationItem
			backButtonText={`Back to ${navItem.label}`}
			subNavigation={
				navItem.subNavigation && (
					<>
						{navItem?.subNavigation
							.filter(
								({ isHiddenInMenu }) => isHiddenInMenu !== true
							)
							.map((subItem: NavigationItem) => (
								<NavItem
									key={`router-path-${subItem.path}`}
									navItem={subItem}></NavItem>
							))}
					</>
				)
			}>
			{navItem.subNavigation ? (
				navItem.label
			) : (
				<Link
					key={`router-path-${navItem.path}`}
					href={navItem.path ?? ''}
					aria-current={isActive ? 'page' : undefined}>
					{navItem.label}
				</Link>
			)}
		</DBNavigationItem>
	);
};

export default NavItem;
