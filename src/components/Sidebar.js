import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

function Sidebar() {
	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<nav className={sidebar ? 'sidebar__menu sidebar__menu--active' : 'sidebar__menu'}>
				<ul className='sidebar__items'>
					<li className='sidebar__toggle'>
						<Link to='#'>
							<svg fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
							</svg>
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

export default Sidebar;
