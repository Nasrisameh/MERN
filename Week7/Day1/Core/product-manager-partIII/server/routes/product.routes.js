//import the controller so when a URL is visited, the request will be routed to a particular function in the controller which triggers the object with all the mothods on it
const productController = require("../controllers/product.controller");

//export a function that needs access to our app since it will add the HTTP methods and URL to it
module.exports = (app) => {
    app.post("/api/products", productController.createProduct);
    app.get("/api/products", productController.getAll);
    app.get("/api/products/:id", productController.getOne);// :id is a url parameter that will be added to req.params.id
    app.delete("/api/products/:id", productController.deleteProduct);
    app.put("/api/products/:id", productController.updateProduct);
}
