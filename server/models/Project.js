const mongoose = require('mongoose')

const projects = mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    status:{
        type:String,
        enum : ['not started','in Progress','completed']
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Client'
    }
})

module.exports = mongoose.model('Project',projects);