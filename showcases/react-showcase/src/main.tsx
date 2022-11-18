import React from 'react';
import ReactDOM from 'react-dom/client.js';
import './index.scss';
import App from './app';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
