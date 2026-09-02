import type { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../../react-showcase/src/utils/navigation-item';

export type DBShell = {
	path: string;
	component: any;
};

export type DBShellPath = {
	params: {
		slug: string[];
	};
};

const getCustomElementsFromNavigationItems = <T extends unknown>(
	navigationItems: NavigationItem[],
	accumulateFunction: (
		accumulator: T[],
		pathSegments: string[],
		component: any
	) => T[]
): T[] => {
	return navigationItems.reduce(
		(accumulator: T[], { path, component, subNavigation }) => {
			if (subNavigation) {
				for (const subNavItem of subNavigation) {
					if (!subNavItem.component) continue;
					accumulator = accumulateFunction(
						accumulator,
						[path, subNavItem.path],
						subNavItem.component
					);
				}
			}

			if (component) {
				accumulator = accumulateFunction(
					accumulator,
					[path],
					component
				);
			}

			return accumulator;
		},
		[]
	);
};

export const getStaticPaths = (async () => {
	const sortedNavigationItems = getSortedNavigationItems(
		NAVIGATION_ITEMS
	) as NavigationItem[];

	const paths = getCustomElementsFromNavigationItems<DBShellPath>(
		sortedNavigationItems,
		(accumulator, pathSegments) => {
			return [...accumulator, { params: { slug: pathSegments } }];
		}
	);

	return {
		paths,
		fallback: false
	};
}) satisfies GetStaticPaths;

// Hint: getStaticPaths (see above) requires getStaticProps so that next can be built, even if no props are passed at all, as is the case here
export const getStaticProps = (async (context) => {
	return { props: {} };
}) satisfies GetStaticProps<any>;

export default function Home() {
	const router = useRouter();
	const sortedNavigationItems = getSortedNavigationItems(
		NAVIGATION_ITEMS
	) as NavigationItem[];

	const routes = getCustomElementsFromNavigationItems<DBShell>(
		sortedNavigationItems,
		(accumulator, pathSegments, component) => {
			return [
				...accumulator,
				{
					path: pathSegments.join('/'),
					component: component
				}
			];
		}
	);

	const slug = router?.query?.slug ?? '';
	const currentPath = Array.isArray(slug) ? slug.join('/') : slug;
	const currentPage = routes.find(({ path }) => path === currentPath);

	return <div>{currentPage?.component}</div>;
}
