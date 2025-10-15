import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../../showcase-styles.css';
import LinkHeader from '../components/link-header';
import '../styles/decision-tree.scss';
import '../styles/globals.scss';
import '../styles/highlight.scss';
import '../styles/playgrounds.scss';

const App = ({ Component, pageProps }: AppProps) => (
	<MDXProvider
		components={{
			h1: (props) => (
				<h1 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h1>
			),
			h2: (props) => (
				<h2 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h2>
			),
			h3: (props) => (
				<h3 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h3>
			),
			h4: (props) => (
				<h4 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h4>
			),
			h5: (props) => (
				<h5 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h5>
			),
			h6: (props) => (
				<h6 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h6>
			),
			a: (properties) => (
				<a
					target="_blank"
					referrerPolicy="no-referrer"
					{...properties}
				/>
			),
			img: (properties) => (
				<img
					{...properties}
					src={
						properties.src?.startsWith('http')
							? properties.src
							: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${properties.src}`
					}
				/>
			)
		}}>
		{process.env.NEXT_PUBLIC_BASE_PATH !== '/core-web/sub/' && (
			<Script
				src={
					(process.env.NEXT_PUBLIC_BASE_PATH ?? '') +
					'/iframe-resizer/iframeResizer.contentWindow.js'
				}
				strategy="lazyOnload"
			/>
		)}
		<Head>
			<title>DB UX</title>
		</Head>
		<Component {...pageProps} />
	</MDXProvider>
);
export default App;
