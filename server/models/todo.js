const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    name : {
        type: String,
        required: true,
        trim:true
    },
    description :{
        type: String
    },
    status :{
        type: String,
        default: 'pending'
    },
    createdBy : {
        type:String,
        required: true  
    },
    createdOn : { type: Date, default: Date.now },
    type : {
        type : String,
        default: 'general'
    },
    tags : [String]
})

var Tasks = mongoose.model('Tasks', todoSchema);

module.exports = {Tasks};