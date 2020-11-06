import React, { useEffect } from 'react';

function Callback(props) {
	// app.get('/callback', function(req, res) {
	// 	let code = req.query.code || null
	// 	let authOptions = {
	// 	  url: 'https://accounts.spotify.com/api/token',
	// 	  form: {
	// 		code: code,
	// 		redirect_uri,
	// 		grant_type: 'authorization_code'
	// 	  },
	// 	  headers: {
	// 		'Authorization': 'Basic ' + (new Buffer(
	// 		  process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
	// 		).toString('base64'))
	// 	  },
	// 	  json: true
	// 	}
	// 	request.post(authOptions, function(error, response, body) {
	// 	  var access_token = body.access_token
	// 	  let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
	// 	  res.redirect(uri + '?access_token=' + access_token)
	// 	})
	//   })

	useEffect(() => {
		const code = new URLSearchParams(props.location.search).get('code');
		console.log(code);

		(async () => {
			const rawResponse = await fetch('http://api.testing.powermeter.com.ar/o/token', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded,application/x-www-form-urlencoded',
				},
				body: JSON.stringify({
					grant_type: 'authorization_code',
					code: code,
					redirect_uri: 'http://localhost:3000/callback',
					client_id: 'RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC',
				}),
			});
			const content = await rawResponse.json();

			console.log(content);
		})();

		fetch(
			`http://api.testing.powermeter.com.ar/o/token?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/callback/&client_id=RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC`,
			{
				method: 'POST',
			}
		)
			.then(response => response.json())
			.then(data => console.log(data));
	}, []); //http://api.testing.powermeter.com.ar/o/authorize/?response_type=code&client_id=RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC&redirect_uri=http://localhost:3000/callback/'
	//`http://api.testing.powermeter.com.ar/o/token/?client_id=RDhguCvOW4hVlI0T39tC9jY71Mp3lTOsKf7wAByC&grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/callback/`;

	return (
		<div>
			<h1>titulos</h1>
		</div>
	);
}

export default Callback;
