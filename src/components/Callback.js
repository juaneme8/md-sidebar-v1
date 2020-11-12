import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function Callback(props) {
	const apiUrl = 'http://api.testing.powermeter.com.ar';
	//Create a new axios instance to set custom defaults for application
	const api = axios.create({
		baseURL: apiUrl,
		headers: {
			Authorization: `Bearer ${localStorage.getItem('token')}`,
		},
	});

	const [tree, setTree] = useState([]);

	useEffect(() => {
		const getToken = async () => {
			const code = new URLSearchParams(props.location.search).get('code');

			const result = await axios({
				method: 'post',
				url: 'http://api.testing.powermeter.com.ar/o/token/',
				data: queryString.stringify({
					grant_type: 'authorization_code',
					code: code,
					redirect_uri: 'http://localhost:3000/callback/',
					client_id: 'RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC',
				}),
				headers: {
					'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
				},
			});

			localStorage.setItem('token', result.data.access_token);
		};

		const getMeter = async () => {
			try {
				const result = await api.get(`/hierarchy/locations/`);
				console.log(result.data);
				setTree(result.data);
			} catch (err) {
				console.error(err);
			}
		};
		// const getMeter = async () => {
		// 	const result = await axios({
		// 		method: 'get',
		// 		url: 'http://api.testing.powermeter.com.ar/meters/electric/',
		// 		headers: {
		// 			Authorization: `Bearer ${localStorage.getItem('token')}`,
		// 		},
		// 	});

		// 	console.log(result.data);
		// };

		//getToken();
		getMeter();
	}, []);

	return (
		<div>
			<h1>CALLBACK</h1>
		</div>
	);
}

export default Callback;
