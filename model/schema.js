const mongoose = require("mongoose")
// const { type } = require("os")
const ngschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobno:{
        type:Number,
        required:true
    },
    country:{
        type:String,
        required:true
    },

})

const ngcollection = new mongoose.model("angular",ngschema)
module.exports = ngcollection;