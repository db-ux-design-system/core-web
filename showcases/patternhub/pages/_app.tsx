import '../styles/globals.scss';
import '../../showcase-styles.css';
import '@code-hike/mdx/dist/index.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
