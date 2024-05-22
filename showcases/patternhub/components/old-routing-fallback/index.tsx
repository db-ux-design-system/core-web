/* eslint-disable @typescript-eslint/no-floating-promises */

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAllNavigationItems } from '../../data/routes';

const OldRoutingFallback = () => {
	const router = useRouter();

	useEffect(() => {
		if (router) {
			const splitPath = router.pathname.replace('/', '').split('/');

			const isComponent =
				splitPath.length > 0 && splitPath[0] === 'components';
			const component = splitPath.length > 1 ? splitPath[1] : undefined;
			const subDirectory =
				splitPath.length > 2 ? splitPath[2] : undefined;
			const type = splitPath.length > 3 ? splitPath[3] : undefined;

			const asPath = router.asPath.split('?');
			const pathParams = asPath.length === 2 ? `?${asPath[1]}` : '';

			if (isComponent && component) {
				const path: string[] = [];
				if (subDirectory && type) {
					path.push(subDirectory, type);
				} else {
					path.push('overview');
				}

				// This is for the old implementation to work with iframes
				const foundRoute = getAllNavigationItems().find((item) =>
					item.path?.endsWith(component)
				);

				if (foundRoute?.path) {
					router.push(
						`${foundRoute.path}/${path.join('/')}${pathParams}`
					);
				} else {
					router.push('/');
				}
			}
		}
	}, [router]);

	return null;
};

export default OldRoutingFallback;
