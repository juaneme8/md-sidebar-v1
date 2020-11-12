import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCallback } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import PageTitle from './components/PageTitle';
import InstantGraphs from './components/InstantGraphs';
import Callback from './components/Callback';

import './App.css';
// import Gauge from './components/Gauge';
// import Container from './components/Container';

function App() {
	return (
		<>
			{/* <InstantGraphs /> */}
			{/* <Container /> */}
			<Router>
				{/* <div style={{ display: 'flex' }}>
					<Gauge id='gauge1' color='#e03997' value='220' />
					<Gauge id='gauge2' color='#00c3a5' value='220' />
					<Gauge id='gauge3' color='#fbbd09' value='220' />
				</div> */}

				<Switch>
					<Route path='/callback' component={Callback} />
				</Switch>
				{/* <TopNav /> */}
				{/* <PageTitle title='Resumen' subtitle='Dashboard' /> */}
				{/* <Sidebar /> */}
				<a href='http://api.testing.powermeter.com.ar/o/authorize/?response_type=code&client_id=RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC&redirect_uri=http://localhost:3000/callback/'>
					Autorizar
				</a>
			</Router>
		</>
	);
}

export default App;
