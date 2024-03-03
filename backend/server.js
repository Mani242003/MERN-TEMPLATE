const app = require('./app');
const express = require('express');

const connectDatabase = require('./config/database');

const path = require('path')
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,"config/config.env")});


connectDatabase();



// Example server.js



// Define routes
// http://localhost:8000/api/v1/product
// app.get('/api/v1/product', (req, res) => {
//     // Handle the request and send a response
//     res.send('This is the product route');
// });

// Start the server

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});


// app.listen(process.env.PORT,()=>{
//     console.log(`server listening to the port :${process.env.PORT} in ${process.env.NODE_ENV}`);
// });