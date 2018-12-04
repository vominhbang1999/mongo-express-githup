var express = require('express');
var bcrypt = require("bcrypt")
var crypto = require("crypto")
var router = express.Router();
var Product = require("../models/product.model")

router.post('/', function (req, res, next) {
	let {
		ten,
		gia,
		code
	} = req.body;

	var myData = new Product({
		ten: ten,
		gia: gia,
		code: code,
	});
	myData.save().then(item => {
		res.redirect("/productlist")
			// res.send(item); // Chỉ bật lên khi viết APIs
		})
		.catch(err => {
			next(err);
			res.status(400).send("unable to save to database");
		});
})

module.exports = router;
