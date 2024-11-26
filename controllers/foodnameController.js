const foodcategorymodel = require("../models/foodcategorymodel")

const foodcategoryname = async (req, res) => {
   try {
      const { foodtitle } = req.body;
      if (!foodtitle) {
         res.status(404).send({ message: "please provide all required fields" })
      }

      const foodname = new foodcategorymodel({
         foodtitle,
      })

      await foodname.save();
      res.status(200).send({
         message: "food title successfully",
         foodname,
      })
   } catch (error) {
      console.log(error)
      res.status(500).send({
         success: false,
         mesage: "cannot create food category",
      })
   }
}

//update and delete

const updatefoodcategory = async (req, res) => {
   try {
      const updatefoodName = await foodcategorymodel.findById(req.params.id);
      if (!updatefoodName) {
         return res.status(404).send({ message: "cannot update foodname" })
      }

      const { foodtitle } = req.body;
      if (foodtitle) {
         updatefoodName.foodtitle = foodtitle;
      }

      await updatefoodName.save();
       res.status(200).send({ message: "foodname updated successfully", updatefoodName })
   } catch (error) {
      console.log(error)
      res.status(500).send({
         success: false,
         mesage: "cannot update food category",
      })
   }
}

const deleteitem = async(req,res) =>{
 try {
   const item = await foodcategorymodel.findByIdAndDelete(req.params.id);
 if(!item){
   return res.status(404).send({ message: "cannot delete foodname" })
 }else{
   res.status(200).send({ message: "foodname deleted successfully", item })
 }
 } catch (error) {
   console.log(error)
   res.status(500).send({
      success: false,
      mesage: "cannot delete food category",
   })
 } 
}

module.exports = { foodcategoryname, updatefoodcategory,deleteitem }