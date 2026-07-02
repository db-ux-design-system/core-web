import { useRouter } from 'next/router';
import { useEffect } from 'react';

const FallbackPage = () => {
	const { push, asPath } = useRouter();

	useEffect(() => {
		if (asPath === '/' || asPath.endsWith('/overview')) {
			void push('/');
		} else {
			void push(`${asPath}/overview`);
		}
	}, []);
	return null;
};

export default FallbackPage;
