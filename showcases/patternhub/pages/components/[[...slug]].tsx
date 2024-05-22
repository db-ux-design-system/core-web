import CardNavigation from '../../components/card-navigation/card-navigation';
import { useRouter } from 'next/router';
import { getAllNavigationItems } from '../../data/routes';

const ComponentsSlug = () => {
	const router = useRouter();

	const slug = router?.query?.slug;
	const currentPath = Array.isArray(slug) ? slug.join('/') : slug;

	if (currentPath) {
		// This is for the old implementation to work with iframes
		const foundRoute = getAllNavigationItems().find((item) =>
			item.path?.endsWith(currentPath)
		);
		if (foundRoute?.path) {
			router.push(foundRoute.path);
			return null;
		}
	}

	return <CardNavigation />;
};

export default ComponentsSlug;
