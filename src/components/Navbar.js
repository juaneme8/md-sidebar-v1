import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
function Navbar() {
	const [sidebar, setSidebar] = useState(false);
	const [visible, setVisible] = useState(false);

	const showSidebar = () => {
		setSidebar(!sidebar);
		setVisible(!visible);
	};
	return (
		<>
			<Grid columns={1}>
				<Grid.Column>
					<Checkbox checked={visible} label={{ children: <code>visible</code> }} onChange={(e, data) => setVisible(data.checked)} />
				</Grid.Column>

				<Grid.Column>
					<Sidebar.Pushable as={Segment}>
						<Sidebar
							as={Menu}
							animation='overlay'
							icon='labeled'
							inverted
							onHide={() => setVisible(false)}
							vertical
							visible={visible}
							width='wide'
							color='blue'
						>
							<Menu.Item as='a'>
								<Icon name='window restore' />
								Resumen
							</Menu.Item>
							<Menu.Item as='a'>
								<Icon name='gamepad' />
								Games
							</Menu.Item>
							<Menu.Item as='a'>
								<Icon name='camera' />
								Channels
							</Menu.Item>
						</Sidebar>

						<Sidebar.Pusher>
							<Segment basic>
								<Header as='h3'>Application Content</Header>
								<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
							</Segment>
						</Sidebar.Pusher>
					</Sidebar.Pushable>
				</Grid.Column>
			</Grid>
			<div className='navbar'>
				<Link to='#' className='menu-bars'>
					<FaIcons.FaBars onClick={showSidebar} />
				</Link>
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
