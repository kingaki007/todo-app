const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required: true
    },
    dob: {
        type: Date,
        default: Date.now()
    },
    mobile : {
        type : Number
    }
})

var Users = mongoose.model('Users',userSchema);

module.exports = {Users};