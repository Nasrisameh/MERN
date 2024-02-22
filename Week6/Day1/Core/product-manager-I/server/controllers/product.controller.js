// ======the controller does the CRUD for the DB=====
// import the model here
const Product = require("../models/product.model")

// =============OUR CRUD============

// *************CREATE *************
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => {
            console.log(">>> Product.create()= >>>", newProduct)
            res.json(newProduct)
        })
        .catch((err) => {
            res.json(err)
        })
}

