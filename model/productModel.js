const mongoose = require('mongoose')

const productModel = new mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    qnt:{type:Number},

})

module.exports = mongoose.model("product",productModel)