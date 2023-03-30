import Head from 'next/head';
import '../styles/globals.scss';
import '../../showcase-styles.css';
import '@code-hike/mdx/dist/index.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script
					type="text/javascript"
					src="/iframeResizer.contentWindow.min.js"></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
