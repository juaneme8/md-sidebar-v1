import React, { useEffect, useState } from 'react';

function InstantGraphs() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
			.then(res => res.data)
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
