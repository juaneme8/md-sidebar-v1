import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

function Sidebar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
	};
	return (
		<>
			<nav className={sidebar ? 'sidebar__menu sidebar__menu--active' : 'sidebar__menu'}>
				<ul className='sidebar__items'>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className='sidebar__link'>
								<Link to={item.path} className='link__group'>
									{item.icon}
									<span className='link__title'>{item.title}</span>
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
