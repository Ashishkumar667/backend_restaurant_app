const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongodb = require('./config/db');
const bcrypt = require('bcrypt');

const app = express();

require('dotenv').config();
//db connetcion


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/test', require('./routes/testRoutes') );
app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/userdata', require('./routes/userRoutes'));
app.use('/api/v1/restaurant',require("./routes/resRoutes"));
app.use('/api/v1/foodcategory',require("./routes/foodnameRoutes"));
app.use("/api/v1/food", require("./routes/foodroutes"));

//routes
app.get("/", (req, res) => {
    res.status(200).send("<h1>Hi from the server <h1>");
});

const port = process.env.PORT || 3000 ;

app.listen(port, () => {
    console.log(`Server is running at port ${port}` )
})