//import mongoose because we will use mongoose to enforce a structure to our models so when we insert a document, mongoose will check if it has all the key/value pairs that are required. If not, we will give an error message.
const mongoose = require("mongoose");

//make a new instance of a schema or class
const ProductSchema = new mongoose.Schema({
        title: {
            type: String,
            // "{PATH}" will be replaced  with the field name, here that will be "name". You can hard code it but if you ever update the key name you have to update the hard code too
            required: [true, "{PATH} is required."],//error message/validation
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
        },
        price: {
            type: Number,
            required: [true, "{PATH} is required"],
            min: [0, "{PATH} must be {MIN} at minimum"]
        },
        description: {
            type: String,
            required: [true, "{PATH} is required"]
        }
    },
    { timestamps: true}//this is optional and will automatically add a timestamp with created_at and updated_at to our model
);

const Product = mongoose.model("Product", ProductSchema);

//finally, let's export it so we can use it in the CRUD functions we will create
module.exports = Product;