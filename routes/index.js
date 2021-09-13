var jwt = require('jsonwebtoken');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello world');
	});

	app.post('/login', (req, res) => {
		if (req.body.email == process.env.EMAIL)
			if (req.body.password == process.env.PASSWORD) {
				const accessToken = jwt.sign({}, process.env.PRIVATE_KEY, {
					expiresIn: 60 * 60,
				});
				res.json(accessToken);
			} else res.status(401).send('Le mot de passe est incorrect');
		else res.status(401).send("L'email est incorrect");
	});
};
