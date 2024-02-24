//import the model
const Product = require("../models/product.model");

// =============OUR CRUD============
//export an object with a bunch of methods in it
module.exports = {
    createProduct:( req, res)=>{
        console.log("create method executed");
        Product.create(req.body)
        .then( (newProduct) => {
            console.log(">>> Product created= >>>", newProduct)
            res.json(newProduct);
        })
        .catch( (err) => {
            res.json(err);
        })
    },
    
    //retrieve all products created in the database
    getAll:(req, res)=>{
        console.log("getAll method executed");
        //if you pass in no arguments, it finds everything
        Product.find()
        .then( (products) => {
            res.json(products);
        })
        .catch( (err) => {
            res.json(err);
        })
    },

    //retrieve a specific record
    getOne:(req,res)=>{
        console.log("getOne method executed");
        //find() always returns an array even if you only have one item. That's why we can use findById() to just get a single object back
        Product.findById({_id:req.params.id})
        .then( (product) => {
            res.json(product);
        })
        .catch( (err) => {
            res.json(err);
        })
    },
    //The logic for updating requires both a parameter (params) and body from the request
        // We must first find the document before we can add in the new info.
        updateProduct: (req, res) => {
            console.log("delete method executed");
            Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
                new: true, //By default, update fill not return a new document. This is necessary to ensure we respond with the newly updated document.
                runValidators: true, //This ensures validators work on a PUT request.
            })
                .then((updatedProduct) => res.json(updatedProduct))
                .catch((err) => console.log(err));
        },
    
        deleteProduct: (req, res) => {
            console.log("update method executed");
            Product.findByIdAndDelete({ _id: req.params.id })
                .then((product) => res.json(product))
                .catch((err) => console.log(err));
        },
}