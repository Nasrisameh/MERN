const ProductController = require("../controllers/product.controller")

module.exports = app => {
    // ========Create=====
    app.post("/api/products", ProductController.createProduct)
    }