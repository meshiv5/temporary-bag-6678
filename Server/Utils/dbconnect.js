const mongoose = require('mongoose');

const connect = () =>{
    return  mongoose.connect("mongodb+srv://mongo:mongo@cluster0.6tqvbax.mongodb.net/zee5?retryWrites=true&w=majority");
}

module.exports = connect;