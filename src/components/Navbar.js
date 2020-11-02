import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import Logo from './Logo';
import HeaderNav from './HeaderNav';

function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const [visible, setVisible] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
		setVisible(!visible);
	};
	return (
		<>
			<div className='navbar'>
				<Logo />
				<Link to='#' className='btn-hamburger'>
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
				<HeaderNav />
			</div>

			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items'>
					<li className='navbar-toggle'>
						<Link to='#' className='menu-bars'>
							<AiIcons.AiOutlineClose />
						</Link>
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
