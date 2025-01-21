// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable @typescript-eslint/no-floating-promises */

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { getAllNavigationItems } from '../../data/routes';

const OldRoutingFallback = () => {
	const router = useRouter();

	useEffect(() => {
		if (router) {
			const asPath = router.asPath.split('?');
			const splitPath = asPath[0].replace('/', '').split('/');

			const isComponent =
				splitPath.length > 0 && splitPath[0] === 'components';
			const component = splitPath.length > 1 ? splitPath[1] : undefined;
			const subDirectory =
				splitPath.length > 2 ? splitPath[2] : undefined;
			const type = splitPath.length > 3 ? splitPath[3] : undefined;

			const pathParams = asPath.length === 2 ? `?${asPath[1]}` : '';

			if (isComponent && component) {
				const path: string[] = [];
				if (subDirectory && type) {
					path.push(subDirectory, type);
				} else if (subDirectory) {
					path.push(subDirectory);
				} else {
					path.push('overview');
				}

				// This is for the old implementation to work with iframes
				const allNavigationItems = getAllNavigationItems().sort(
					(a, b) => {
						if ((a.path?.length ?? 0) > (b.path?.length ?? 0)) {
							return -1;
						}

						return 1;
					}
				);
				const foundRoute = allNavigationItems.find((item) =>
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
