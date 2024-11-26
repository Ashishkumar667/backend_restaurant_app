const mongoose = require('mongoose');

//userschema

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: Array,
    },
    userType: {
        type: String,
        required: true,
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile: {
        type: String,
        default: 'https://static.thenounproject.com/png/1559144-200.png'
    }
}, { timestamps: true })

const schema = mongoose.model('User', userSchema)

module.exports = schema;