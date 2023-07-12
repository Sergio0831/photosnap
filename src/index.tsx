import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './store/context';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
