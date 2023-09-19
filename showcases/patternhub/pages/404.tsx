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
