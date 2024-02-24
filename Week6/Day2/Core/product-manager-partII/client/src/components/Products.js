import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = (props) => {
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { productList, setProductList} = props;

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, [setProductList]); 
    ////////////////////////////////////////
    return (
    <div>
            <header>
            <h1 className="text-center">All Products</h1>
            </header>
            {
                productList.map((product, index) => (
                    <div key={index} className="row mb-2 justify-content-center">
                        <Link to={`/product/${product._id}`} className="col-md-7 p-2 text-center">
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Products