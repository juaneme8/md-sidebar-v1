import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import PageTitle from './components/PageTitle';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<TopNav />
				<Sidebar />
				<PageTitle />
				<Switch>
					<Route path='/' />
				</Switch>
			</Router>
		</>
	);
}

export default App;
