import '@db-ux/core-components/build/styles/rollup.css';
import '@db-ux/db-theme/build/styles/rollup.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'sa11y/dist/css/sa11y.min.css';
import Sa11yLangEn from 'sa11y/dist/js/lang/en.js';
import { Lang, Sa11y } from 'sa11y/dist/js/sa11y.esm.js';
import '../../showcase-styles.css';
import App from './app';
import { NAVIGATION_ITEMS } from './utils/navigation-item';

// Makes env-variable available in the components without using import.meta.
// as a result, the components are also compatible with next.
// eslint-disable-next-line @typescript-eslint/dot-notation
window['env'] = {
	BASE_URL: import.meta.env.BASE_URL
};

if (import.meta.env.DEV) {
	Lang.addI18n(Sa11yLangEn.strings);
	const sa11y = new Sa11y({
		checkRoot: 'body'
	});
}

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					{NAVIGATION_ITEMS.map((navItem) => (
						<Route
							key={`router-${navItem.path}`}
							path={navItem.path}
							element={navItem.component}>
							{navItem.subNavigation
								? navItem.subNavigation.map((subItem) => (
										<Route
											key={`router-${subItem.path}`}
											path={subItem.path}
											element={subItem.component}
										/>
									))
								: null}
						</Route>
					))}
				</Route>
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</HashRouter>
	</React.StrictMode>
);
