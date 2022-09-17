const express = require("express");
const connectDB = require('./config/config');
const dotenv = require('dotenv');
const morgan = require("morgan");

require("colors");

//config dotenv
dotenv.config()

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoute'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}else{
    app.get('/',(req,res) => {
        res.send('<h1>Hello From Node Server Via Nodemon</h1>');
    });
}

// app.get('/',(req,res) => {
//     res.send('<h1>Hello From Node Server Via Nodemon</h1>');
// });



const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server Running On ${process.env.NODE_ENV} Mode And On Port ${port}`.bgMagenta.white);
});