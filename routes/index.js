module.exports = (app) => {
	app.get('/', (req, res) => {
		res.send('Hello world');
	});

	app.post('/login', (req, res) => {
		if (req.body.email == process.env.EMAIL)
			if (req.body.password == process.env.PASSWORD) res.sendStatus(200);
			else res.status(401).send('Le mot de passe est incorrect');
		else res.status(401).send("L'email est incorrect");
	});
};
