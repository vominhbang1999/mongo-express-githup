var express = require('express');
var router = express.Router();
var Product = require("../models/product.model")

/* GET users listing. */
router.get('/:id', function (req, res, next) {

	Product.find({ key: req.params.id }, function (err, item) {
		if (err) {
			return next(err);
		}
		res.render('productdetails', {
			data: item[0]
		});
		// res.json(items); // Dòng này chỉ bật khi viết API
	});

});

module.exports = router;
