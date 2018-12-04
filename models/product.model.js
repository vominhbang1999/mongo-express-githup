var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
	ten: String,
	gia: String,
	code: String,
}, {
	timestamps: true
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product
