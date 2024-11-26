const mongoose = require('mongoose');
//Loading environment variables
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log(`Mongodb connected `)
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err)
    });

module.exports = mongoose;