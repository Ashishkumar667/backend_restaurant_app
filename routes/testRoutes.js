const express = require('express');
const { testUserController } = require('../controllers/testController');

const router = express.Router();

router.get('/user-test' , testUserController)

module.exports = router;