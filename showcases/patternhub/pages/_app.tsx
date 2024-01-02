import { MDXProvider } from '@mdx-js/react';
import Script from 'next/script';
import type { AppProps } from 'next/app';
import '@code-hike/mdx/dist/index.css';
import '@db-ui/foundations/build/css/colors/classes/all.css';
import '../styles/globals.scss';
import '../../showcase-styles.css';
import LinkHeader from '../components/link-header';

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
			a: (props) => (
				<a target="_blank" referrerPolicy="no-referrer" {...props} />
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
				'/iframe-resizer/iframeResizer.contentWindow.js'
			}
		/>
		<Component {...pageProps} />
	</MDXProvider>
);

export default App;
