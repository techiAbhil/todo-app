import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GLobalStyle } from './style';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<GLobalStyle />
	</React.StrictMode>
);
