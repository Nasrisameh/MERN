import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {
    //BEcause we named the variable in our app.js path id, that is its key.
    //We gave that variable its value in Display.js when we traveled here via "Link".
        //That will allow us to deconstruct the value from props using the id key.
    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
     //function to handle the button that will delete a product
    function handleDelete(id) {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log('Deleted Product', res.data);
            }).catch((err)=>console.log(err));  
    };

    ////////////////////////////////////////////
    return (
        <div className="oneProduct-component">
            <h2>{oneProduct.title}</h2>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            {/* create a button to delete the product */}
            <button 
                className="btn btn-outline-danger"
                onClick={ e => {handleDelete(oneProduct._id)}}>Delete this product</button>
        </div>
    );
};

export default OneProduct;