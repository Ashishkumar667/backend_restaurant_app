const mongoose = require('mongoose');

//userschema

const foodSchema = new mongoose.Schema({
    foodtitle:{
        type:String,
        required:true,
    },
    image :{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3jTszSflQt-SjZGIWqJRegF0GrAVzpCQtg&s",
    }
}, { timestamps: true })

const fdschema = mongoose.model('foodcat', foodSchema)

module.exports = fdschema;