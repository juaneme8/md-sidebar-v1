import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCallback } from 'react';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import PageTitle from './components/PageTitle';
import InstantGraphs from './components/InstantGraphs';
import Callback from './components/Callback';

import './App.css';
import Gauge from './components/Gauge';

import Container from './components/Container';
import 'semantic-ui-css/semantic.min.css';

import axios from 'axios';

const accessToken = '929e76820f9a915f1de7265fce56ce01fc5ec438';

// axios.interceptors.request.use(
// 	config => {
// 		config.headers.authorization = `Bearer ${accessToken}`;
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );

const authAxios = axios.create({
	baseUrl: 'http://api.testing.powermeter.com.ar',
	headers: {
		Authorization: `Token ${accessToken}`,
	},
});

function App() {
	const fetchData = useCallback(async () => {
		try {
			const result = await authAxios.get('http://api.testing.powermeter.com.ar/meters/electric/');
			console.log(result.data);
		} catch (err) {
			console.error(err);
		}
	});

	return (
		<>
			<InstantGraphs />
			<Container />
			<button onClick={fetchData}>Get data</button>
			<Router>
				<div style={{ display: 'flex' }}>
					<Gauge id='gauge1' color='#e03997' value='220' />
					<Gauge id='gauge2' color='#00c3a5' value='220' />
					<Gauge id='gauge3' color='#fbbd09' value='220' />
				</div>

				<Route exact path='/callback' component={Callback} />
				<TopNav />
				<PageTitle title='Resumen' subtitle='Dashboard' />
				<Sidebar />
				<a href='http://api.testing.powermeter.com.ar/o/authorize/?response_type=code&client_id=RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC&redirect_uri=http://localhost:3000/callback/'>
					Autorizar
				</a>
			</Router>
		</>
	);
}

export default App;
