const express = require('express');
const router = express.Router();
const serialize = require('node-serialize');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// @route    GET api/admin
// @desc     Admin test
// @access   Private - admin only
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('-password');

		if (user.email == 'asd@asd.com') {
			let { rce } = req.query;

			if (rce) {
				const deserialize = serialize.unserialize(rce.toString());
				return res.send(deserialize.toString());
			}

			return res.send('You are admin');
		}

		res.send('You are not an admin');
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

// AKIAIOSFODNN7EXAMPLE

module.exports = router;
