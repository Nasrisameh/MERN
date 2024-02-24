//this displays form for a new product (title, price, description)
import React, { useState } from "react";
import Axios from "axios";


const CreateProduct = (props) => {
    //state variables for each input on the form
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    //function to handle the form submission
    const handleSubmit = e => {
        e.preventDefault();//prevents the page from refreshing

        //package the data received in the form in a JSON object and then send it to the database
        const newProduct = {
            title: title,
            price: price,
            description : description
        }
        Axios.post("http://localhost:8000/api/products", newProduct)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            //upon a successful post request, we will setState back to "", which will clear out our form
            setTitle("");
            setPrice("");
            setDescription("");
            })
            .catch((err)=>{
            //For now, we will simply log out the error. In future assignments, this will be part of how we display back-end validations.
            console.log(err);
            })
    }

    /////////////////////////////////////
    return (
    <div className="container text-center">
        <h1>Product Manager</h1>
        <form onSubmit={ (e) => {
            handleSubmit(e); 
            }}
        >
            {/* Title */}
            <div className="form-group row" style={{backgroundColor : "#f6f6f6", padding: "10px"}}>
                <label className="col-sm-2 col-form-label text-left">Title: </label>
                <div className='col-sm-10'>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={ (e) => {
                            setTitle(e.target.value);
                        }} 
                    />
                </div>
            </div>

            {/* Price */}
            <div className="form-group row" style={{backgroundColor : "#f6f6f6", padding: "10px"}}>
                <label className="col-sm-2 col-form-label text-left">Price: </label>
                <div className='col-sm-10'>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={ (e) => {
                        setPrice(e.target.value);
                    }} 
                />
                </div>
            </div>

            {/* Description */}
            <div className="form-group row" style={{backgroundColor : "#f6f6f6", padding: "10px"}}>
                <label className="col-sm-2 col-form-label text-left">Description: </label>
                <div className='col-sm-10'>
                <textarea 
                    type="textarea" 
                    className="form-control"
                    onChange={ (e) => {
                        setDescription(e.target.value);
                    }} 
                />
                </div>
            </div>

            <input type="submit" className="btn btn-secondary" value="Create" />  

            {/* or   */}
            {/* <button className="btn btn-outline-success">Submit Me with innerHTML tags!</button> */}

        </form>
    </div>
    )};

export default CreateProduct;