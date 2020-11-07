import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import Gauge from './Gauge';

function Container() {
	return (
		<div>
			<Grid>
				<Grid.Column width={8} style={{ display: 'flex' }}>
					<Gauge id='gauge1' color='#e03997' value='220' />
					<Gauge id='gauge2' color='#00c3a5' value='220' />
					<Gauge id='gauge3' color='#fbbd09' value='220' />
				</Grid.Column>
				<Grid.Column width={8}>
					<Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default Container;
