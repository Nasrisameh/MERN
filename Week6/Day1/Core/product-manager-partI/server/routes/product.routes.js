//import the controller so when a URL is visited, the request will be routed to a particular function in the controller which triggers the object with all the mothods on it
const ProductController = require("../controllers/product.controller")

module.exports = app => {
    // ========Create=====
    app.post("/api/products", ProductController.createProduct)
    }