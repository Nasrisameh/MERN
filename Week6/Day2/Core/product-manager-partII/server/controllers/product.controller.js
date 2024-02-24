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
        .then( (products) => {
            res.json(products);
        })
        .catch( (err) => {
            res.json(err);
        })
    }
}