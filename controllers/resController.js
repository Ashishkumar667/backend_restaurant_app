const hotelmodel = require("../models/hotelmodel")

const createresController = async (req, res) => {
    try {
        const { title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, ratingCount, code, coords } = req.body;

        if(!title || !coords){
            return res.status(500).send({message:"please provide title and address"})
        }
        const Restaurant = new hotelmodel({
            title, imageUrl, foods, time, pickup, delivery, isOpen, logoUrl, ratingCount, code, coords 
        })
        await Restaurant.save();
        res.status(201).send({message:"Restaurant created successfully"});

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            mesage: "cannot create restaurant",
        })
    }
}
const allrestaurant = async(req,res) =>{
  try {
    const restaurant = await hotelmodel.find({ })
    if(!restaurant){
        res.status(404).send({
            message:"no restaurant available"
        })
    }else{
        return res.status(200).send({
            totalCount : restaurant.length,
            restaurant,

        })
    }
  } catch (error) {
    console.log(error)
        res.status(500).send({
            success: false,
            mesage: "error in getting alll restaurant data"
        })
  }
}

const getresbyid = async(req,res) =>{
    try {
        const resdata = await hotelmodel.findById(req.params.id);
        if(!resdata){
            return res.status(404).send({message:"Error in getting restaurant"})
        }else{
            res.status(200).send({message:"successful",resdata})
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            mesage: "error in getting  restaurant data"
        })
    }
}

//delete res.

const deleterestaurant = async(req,res)=>{
const restaurant = await hotelmodel.findByIdAndDelete(req.params.id);
if(!restaurant){
    return res.status(404).send({message:"Error in deleting restaurant data"})
}
res.status(200).send({message:"restaurant deleted successfully"})
}
module.exports = { 
    createresController,
    allrestaurant,
    getresbyid,
    deleterestaurant
}