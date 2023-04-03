import Script from 'next/script';
import '../styles/globals.scss';
import '../../showcase-styles.css';
import '@code-hike/mdx/dist/index.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src="https://davidjbradshaw.github.io/iframe-resizer/js/iframeResizer.min.js"
				integrity="sha384-FrvUFAIT+KOe9p2UMtL+H5mRPUtMScnZgT8JWcXYoy4FkXSPZkBqN72JCUK+/KtJ"
				crossOrigin="anonymous"
			/>
			<Component {...pageProps} />
		</>
	);
}
