import React, { useEffect, useState } from 'react';

function InstantGraphs() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://api.testing.powermeter.com.ar/meters/electric/')
			.then(res => res.json())
			.then(data => {
				setData(data);
				console.log(data);
			});
	}, []);

	return (
		<>
			<h1>asasa</h1>
		</>
	);
}

export default InstantGraphs;
