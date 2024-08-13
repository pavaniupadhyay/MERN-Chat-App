const { signup,  signin } = require('../controller/AuthController');
const { signupValidation,  signinValidation } = require('../middleware/AuthValidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup);

router.post('/signin', signinValidation, signin);

module.exports = router;