import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import Avatar from '@material-ui/core/Avatar';

function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img className="header__icon" src={require('../RomanBnb.png')} />
			</Link>

			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>

			<div className="header__right">
				<p>Become a Host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
