// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FallbackPage = () => {
	const { push, asPath } = useRouter();

	useEffect(() => {
		void push(asPath.endsWith('/overview') ? '/' : `${asPath}/overview`);
	}, []);
	return null;
};

export default FallbackPage;
