import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import PageTitle from './components/PageTitle';
import InstantGraphs from './components/InstantGraphs';
import Callback from './components/Callback';
import { useEffect } from 'react';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<Route exact path='/callback' component={Callback} />
				<TopNav />
				<PageTitle title='Resumen' subtitle='Dashboard' />
				<Sidebar />
				<InstantGraphs />
				<a href='http://api.testing.powermeter.com.ar/o/authorize/?response_type=code&client_id=RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC&redirect_uri=http://localhost:3000/callback/'>
					Autorizar
				</a>
			</Router>
		</>
	);
}

export default App;
