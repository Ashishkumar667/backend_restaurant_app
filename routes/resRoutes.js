const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const { createresController, allrestaurant, getresbyid, deleterestaurant } = require("../controllers/resController")

const router = express.Router();


router.post("/made",authMiddleware, createresController)

router.get("/allrest",allrestaurant)

router.get("/getres/:id",getresbyid);

router.delete("/deleterest/:id",authMiddleware,deleterestaurant)


module.exports = router;