const express = require('express');
const { registerController, loginMethod } = require('../controllers/authController');
const router = express.Router();

//Register

router.post('/register',registerController );

//Login

router.post('/login', loginMethod)


module.exports = router;