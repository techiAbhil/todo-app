import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}
body {
	background: #04aa6d;
}
`;
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
		<GlobalStyle />
	</React.StrictMode>
);
