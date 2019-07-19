import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BugTracker from './bugTracker';
import Project from './project/index';
import appStore from './store';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
		<Provider store={appStore}>
			<div>
				<BugTracker/>
			</div>
			<hr/>
			<div>
				<Project/>
			</div>
		</Provider>
		, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
