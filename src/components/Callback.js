import React, { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function Callback(props) {
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
			const result = await axios({
				method: 'get',
				url: 'http://api.testing.powermeter.com.ar/meters/electric/',
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			});

			console.log(result.data);
		};

		getToken();
		getMeter();
	}, []);

	return (
		<div>
			<h1>CALLBACK</h1>
		</div>
	);
}

export default Callback;
