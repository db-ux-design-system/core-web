import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FallbackPage() {
	const { push, asPath } = useRouter();

	useEffect(() => {
		if (asPath === '/' || asPath.endsWith('/overview')) {
			void push('/');
		} else {
			void push(`${asPath}/overview`);
		}
	}, []);
	return null;
}
