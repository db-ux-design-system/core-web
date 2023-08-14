import { MDXProvider } from '@mdx-js/react';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import '@code-hike/mdx/dist/index.css';
import '../styles/globals.scss';
import '../../showcase-styles.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MDXProvider
			components={{
				a: (props) => (
					<a
						target="_blank"
						referrerPolicy="no-referrer"
						{...props}
					/>
				),
				img: (props) => (
					<img
						{...props}
						src={
							props.src?.startsWith('http')
								? props.src
								: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${
										props.src
								  }`
						}
					/>
				)
			}}>
			<Script
				src={
					(process.env.NEXT_PUBLIC_BASE_PATH ?? '') +
					'/iframe-resizer/iframeResizer.contentWindow.min.js'
				}
			/>
			<Component {...pageProps} />
		</MDXProvider>
	);
}
