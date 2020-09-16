const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personScheme = new Schema({
    firstname: String,
    lastname: String,
    age: Number,
    position: { type: mongoose.Schema.Types.ObjectId, ref: 'Position'}
})

module.exports = mongoose.model('Person', personScheme)