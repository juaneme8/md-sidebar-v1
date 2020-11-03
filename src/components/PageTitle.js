import React from 'react';
import './PageTitle.css';
function PageTitle({ title, subtitle }) {
	return (
		<div className='pageTitle'>
			<span className='title'>{title}</span> <span className='separator'>|</span> <span className='subtitle'>{subtitle}</span>
		</div>
	);
}

export default PageTitle;
