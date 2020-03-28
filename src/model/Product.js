const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    category:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:String
    },
    cover:{
        type:String
    }
})

module.exports  = model('Product',productSchema)