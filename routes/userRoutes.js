const express = require('express');
const { usercontroller, updateuserController, resetpasswordController, deleteuseraccount } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const { allrestaurant } = require('../controllers/resController');

const router = express.Router();

router.get('/user',authMiddleware, usercontroller);

router.put('/updateuser/:id',authMiddleware,updateuserController);

router.post('/resetPassword',authMiddleware,resetpasswordController);

router.delete("/deleteaccount/:id",authMiddleware,deleteuseraccount);

router.get("/allrestaurant",allrestaurant)

module.exports = router;