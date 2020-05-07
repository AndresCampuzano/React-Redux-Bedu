import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './Menu';
import Users from './Users'; //Users/index.js
import Posts from './Posts'; //Posts/index.js

const Tasks = () => <div>Tasks page from App.js</div>;

const App = () => {
	return (
		<BrowserRouter>
			<Menu />
			<div className='margin'>
				<Route exact path='/' component={Users} />
				<Route exact path='/tasks' component={Tasks} />
				<Route exact path='/posts/:key' component={Posts} />
			</div>
		</BrowserRouter>
	);
};

export default App;
