const persons = require('./person');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello world');
	});

	app.use('/persons', persons);
};
