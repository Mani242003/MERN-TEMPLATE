// Example database.js

const mongoose = require('mongoose');
// const { MONGODB_URI } = require('./config'); // Assuming you have a separate config file

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to MongoDB ${process.env.MONGODB_URI} `);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDatabase;
