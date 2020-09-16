const mongoose = require('mongoose')
const Schema = mongoose.Schema

const positionScheme = new Schema({
    name: String
})

module.exports = mongoose.model('Position', positionScheme)