// import the mongoose lib to build the schema
const mongoose = require("mongoose");

// the model - the rules  the entries need to follow
const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
    // This line adds a "createdAt" and "updatedAt" field when our document is created.
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);
// export our model
module.exports = Product;