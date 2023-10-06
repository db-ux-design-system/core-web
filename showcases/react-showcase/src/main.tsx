import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import '@db-ui/components/build/styles/db-ui-42-rollup.css';
import '@db-ui/foundations/build/css/colors/classes/all.css';
import '../../showcase-styles.css';
import App from './app';
import { NAVIGATION_ITEMS } from './utils/navigation-item';

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
