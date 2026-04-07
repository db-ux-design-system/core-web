import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react';
import '../../showcase-styles.css';
import LinkHeader from '../components/link-header';
import '../styles/decision-tree.scss';
import '../styles/globals.scss';
import '../styles/highlight.scss';
import '../styles/playgrounds.scss';

type HeadingProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>;

const App = ({ Component, pageProps }: AppProps) => (
	<MDXProvider
		components={{
			h1: (props: HeadingProps) => (
				<h1 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h1>
			),
			h2: (props: HeadingProps) => (
				<h2 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h2>
			),
			h3: (props: HeadingProps) => (
				<h3 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h3>
			),
			h4: (props: HeadingProps) => (
				<h4 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h4>
			),
			h5: (props: HeadingProps) => (
				<h5 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h5>
			),
			h6: (props: HeadingProps) => (
				<h6 {...props}>
					{props.children}
					<LinkHeader id={props.id} />
				</h6>
			),
			a: (
				properties: React.DetailedHTMLProps<
					React.AnchorHTMLAttributes<HTMLAnchorElement>,
					HTMLAnchorElement
				>
			) => (
				<a
					target="_blank"
					referrerPolicy="no-referrer"
					{...properties}
				/>
			),
			img: (
				properties: React.DetailedHTMLProps<
					React.ImgHTMLAttributes<HTMLImageElement>,
					HTMLImageElement
				>
			) => (
				<img
					{...properties}
					src={
						properties.src?.toString()?.startsWith('http')
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
