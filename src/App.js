import React from 'react';
import Header from './GlobalComponents/Header';
import Home from './Home/Home';
import Footer from './GlobalComponents/Footer';
import SearchPage from './SearchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	//BEM
	return (
		<div className="app">
			<Router>
				<Header />

				<Switch>
					<Route path="/search">
						<SearchPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>

				<Footer />
			</Router>
			{/* SearchPage */}
		</div>
	);
}

export default App;
