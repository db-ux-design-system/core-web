import Script from 'next/script';
import type { AppProps } from 'next/app';
import '@code-hike/mdx/dist/index.css';
import '../styles/globals.scss';
import '../../showcase-styles.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				src={
					(process.env.NEXT_PUBLIC_BASE_PATH ?? '') +
					'/iframe-resizer/iframeResizer.contentWindow.min.js'
				}
			/>
			<Component {...pageProps} />
		</>
	);
}
