const mongoose = require('mongoose')

const clients = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    }
})

module.exports = mongoose.model('Client',clients);