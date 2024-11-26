const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { foodcategoryname, updatefoodcategory,deleteitem } = require('../controllers/foodnameController');

const router = express.Router();

router.post("/createfoodname",authMiddleware,foodcategoryname);

router.put("/updatefoodcat/:id",authMiddleware,updatefoodcategory);

router.delete("/deletefood/:id",authMiddleware,deleteitem);


module.exports = router;