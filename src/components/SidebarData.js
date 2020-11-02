import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Resumen',
		path: '/',
		icon: <FaIcons.FaChartLine />,
		cName: 'nav-text',
	},
	{
		title: 'Facturación',
		path: '/facturacion',
		icon: <FaIcons.FaMoneyCheckAlt />,
		cName: 'nav-text',
	},
	{
		title: 'Auditor',
		path: '/auditor',
		icon: <FaIcons.FaCartPlus />,
		cName: 'nav-text',
	},
	{
		title: 'Analisis',
		path: '/analisis',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text',
	},
	{
		title: 'Control',
		path: '/control',
		icon: <AiIcons.AiFillControl />,
		cName: 'nav-text',
	},
];
