const express = require('express');
const app = express();

// Import environment variables
require('dotenv').config();

// Middleware for parsing json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(process.env.API_PORT, () => {
	console.log('Started on port ' + process.env.API_PORT);
});
