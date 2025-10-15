import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import CardNavigation from '../../components/card-navigation/card-navigation';
import DefaultPage from '../../components/default-page';
import OldRoutingFallback from '../../components/old-routing-fallback';
import {
	componentChildren,
	getAllComponentGroupNames
} from '../../data/routes';

export interface DBPagePath {
	params: {
		slug: string[];
	};
}

export const getStaticPaths = (async () => {
	// eslint-disable-next-line unicorn/no-array-reduce
	const paths = componentChildren.reduce(
		(accumulator: DBPagePath[], { subNavigation, name }) => {
			if (subNavigation) {
				for (const subNavItem of subNavigation) {
					if (!subNavItem.component || !subNavItem.name) {
						continue;
					}
					accumulator = [
						...accumulator,
						{
							params: { slug: [subNavItem.name] }
						},
						{
							params: { slug: [subNavItem.name, 'overview'] }
						}
					];

					if (name) {
						accumulator = [
							...accumulator,
							{
								params: { slug: [name] }
							},
							{
								params: { slug: [name, subNavItem.name] }
							},
							{
								params: {
									slug: [name, subNavItem.name, 'overview']
								}
							}
						];
					}
				}
			}

			return accumulator;
		},
		[]
	);

	paths.push({
		params: { slug: [] }
	});

	return {
		paths,
		fallback: false
	};
}) satisfies GetStaticPaths;

// getStaticPaths (see above) requires getStaticProps so that next can be built, even if no props are passed at all, as is the case here
export const getStaticProps = (async (context) => {
	return { props: {} };
}) satisfies GetStaticProps<{}>;

const getComponentByName = (
	name: string | undefined
): ReactElement | undefined => {
	let component: undefined | ReactElement = undefined;

	for (const componentChild of componentChildren) {
		if (!componentChild.subNavigation) {
			continue;
		}

		for (const subNavItem of componentChild.subNavigation) {
			if (subNavItem.name === name && subNavItem.component) {
				component = subNavItem.component;
				break;
			}
		}

		if (component) break;
	}

	return component;
};

export default function Home() {
	const router = useRouter();
	const currentSlug = router.query.slug;
	const sanitizedSlug = Array.isArray(currentSlug)
		? currentSlug
		: currentSlug
			? [currentSlug]
			: [];

	const isComponentsRoot = sanitizedSlug.length < 1;
	const lastSlugItem = sanitizedSlug.at(-1);
	const isCurrentOldRouteFallback = !getAllComponentGroupNames().includes(
		sanitizedSlug[0]
	);

	if (!isComponentsRoot && isCurrentOldRouteFallback) {
		return <OldRoutingFallback />;
	}

	if (lastSlugItem === 'overview') {
		const component = getComponentByName(sanitizedSlug.at(-2));
		return <DefaultPage>{component}</DefaultPage>;
	}

	return <CardNavigation />;
}
