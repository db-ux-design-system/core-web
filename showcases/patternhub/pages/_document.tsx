import { Head, Html, Main, NextScript } from 'next/document';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
				<meta name="theme-color" content="#fdfdfd" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<link rel="manifest" href={`${basePath}/site.webmanifest`} />
			</Head>
			<body>
				<Main />
				<NextScript />
				<script
					dangerouslySetInnerHTML={{
						__html: `if ('serviceWorker' in navigator) { navigator.serviceWorker.register('${basePath}/sw.js'); }`
					}}
				/>
			</body>
		</Html>
	);
}
