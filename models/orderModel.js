const mongoose = require('mongoose');

//userschema

const OrderSchema = new mongoose.Schema({
    foods: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Foods"
        }
    ],
    payment: {},
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        enum: ["In the kitchen", "Stuffing", "On the way", "Delivered"],
        default: "In the kitchen",
    },

}, { timestamps: true })


module.exports = mongoose.model('order', OrderSchema)
