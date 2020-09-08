import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import { Grid } from '@material-ui/core';
import { hosts } from '../DataFiles/hostData';
import { bannerData } from '../DataFiles/bannerData';

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__info">
				<Grid container alignItems="center" justify="space-evenly" spacing={1}>
					{bannerData.map(({ src, title, description }, index) => {
						return (
							<Grid item sm={4} key={index}>
								<Card src={src} title={title} description={description} />
							</Grid>
						);
					})}
				</Grid>
			</div>
			<div className="home__info">
				<Grid container alignItems="flex-end" justify="space-evenly" spacing={1}>
					{hosts.map(({ src, title, description, price }, index) => {
						return (
							<Grid item sm={4} key={index}>
								<Card src={src} title={title} description={description} price={price} />
							</Grid>
						);
					})}
					{/* .Footer */}
				</Grid>
			</div>
		</div>
	);
}

export default Home;
