const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    comission:{
        type:Number,
        required:true
    }
});
module.exports = mongoose.model('Service', serviceSchema);