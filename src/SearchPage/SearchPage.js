import React from 'react';
import './SearchPage.css';
import { searchData } from '../DataFiles/searchData';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>62 stays · 26 august to 30 august · 2 guest</p>
				<h1>Stays nearby</h1>
				<Button variant="outlined">Cancellation Flexibility</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			{searchData.map((item) => {
				return (
					<SearchResult
						img={item.img}
						location={item.location}
						title={item.title}
						description={item.description}
						star={item.star}
						price={item.price}
						total={item.total}
					/>
				);
			})}
		</div>
	);
}

export default SearchPage;
