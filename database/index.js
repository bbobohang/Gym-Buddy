//Due to limit number of API calls for basic plans on rapidAPI, this script is to extract all the required objects and saved as a JSON object

const express = require('express');
const fs = require('fs');
const http = require('https');
const axios = require('axios');
const app = express();

const options = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response.data);
		const data = JSON.stringify(response.data);
		fs.writeFile('data.json', data, (err) => {
			if (err) {
				throw err;
			}
			console.log('JSON data is saved.');
		});
	})
	.catch(function (error) {
		console.error(error);
	});

app.listen(5000, () => {
	console.log(`Connected to backend on port`);
});
