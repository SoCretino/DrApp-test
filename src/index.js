import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Loginscreen';
import registerServiceWorker from './registerServiceWorker';
/*
window.DrAppLogin = {
	mount: (element, params = {}) => {
		ReactDOM.render(<Login {...params}/>, element);
	} 
}
*/
ReactDOM.render(<Login />,document.getElementById('DrAppLogin'));
registerServiceWorker();
