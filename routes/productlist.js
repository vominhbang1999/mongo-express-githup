var express = require('express');
var router = express.Router();
var Product = require("../models/product.model")

/* GET users listing. */
router.get('/', function (req, res, next) {
	Product.find(function (err, items) {
		if (err) {
			return next(err);
		}
		res.render('productlist', {
			title: 'Products List',
			data: items
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;
