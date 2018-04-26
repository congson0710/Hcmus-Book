const mongoose = require('mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({
    name: String,
    quantityLeft: {type: Number, default: 200},
    category: String,
    price: Number
})