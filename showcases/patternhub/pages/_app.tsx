import Script from 'next/script';
import '../styles/globals.scss';
import '../../showcase-styles.css';
import '@code-hike/mdx/dist/index.css';
import type { AppProps } from 'next/app';

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
