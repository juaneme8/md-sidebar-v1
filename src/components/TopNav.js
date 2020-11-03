import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import HeaderLinks from './HeaderLinks';

import './TopNav.css';

function TopNav() {
	return (
		<div className='topNav'>
			<Logo />
			<Link to='#' className='btn-hamburger'>
				<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
				</svg>
			</Link>
			<HeaderLinks />
		</div>
	);
}

export default TopNav;
