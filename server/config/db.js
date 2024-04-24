const mongoose = require('mongoose');
require("dotenv").config()


const connectToMongo = ()=>{
    mongoose.connect(process.env.mongoURI)
    .then(() => console.log('Connected Successfully To Database'))
    .catch(error => console.log('Failed to connect', error))
}

module.exports = connectToMongo ;