const Router = require('express-promise-router');
const db = require('../database');

var jwt = require('jsonwebtoken');
const router = new Router();

module.exports = router;

router.post('/login', async (req, res) => {
	const { rows } = await db.query('SELECT * FROM PERSON WHERE email = $1', [
		req.body.email,
	]);
	person = rows[0];
	if (person) {
		if (person.password == req.body.password) {
			const accessToken = jwt.sign({}, process.env.PRIVATE_KEY, {
				expiresIn: 60 * 60,
			});
			res.json(accessToken);
		} else res.status(401).send('Incorrect password');
	} else res.status(401).send('Incorrect email');
});
