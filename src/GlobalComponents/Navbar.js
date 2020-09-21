import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

const Navbar = () => {
	const [ open, setOpen ] = useState(false);

	return (
		<nav>
			<div className="logo">
				<Link to="/home">
					<img className="logo__img" src="../RomanBnb.png" alt="" />
				</Link>
			</div>
			<ul className="nav__links" style={{ transform: open ? 'translateX(0px)' : '' }}>
				<li>
					<a className="nav__link" href="#">
						Become a host
					</a>
				</li>
				<li>
					<a className="nav__link" href="#">
						About
					</a>
				</li>
				<li>
					<a className="nav__link" href="#">
						Services
					</a>
				</li>
				<li>
					<a className="nav__link" href="#">
						Options
					</a>
				</li>
			</ul>
			<div
				onClick={() => {
					setOpen(!open);
				}}
				className="menu__btn"
			>
				<MenuIcon />
			</div>
		</nav>
	);
};

export default Navbar;
