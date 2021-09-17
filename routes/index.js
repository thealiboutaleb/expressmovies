const users = require('./user');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello world');
	});

	app.use('/users', users);
};
