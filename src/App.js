import React from 'react';
import Navbar from './GlobalComponents/Navbar';
import Home from './Home/Home';
import Footer from './GlobalComponents/Footer';
import SearchPage from './SearchPage/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	//BEM
	return (
		<div className="app">
			<Router>
				<Navbar />
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
