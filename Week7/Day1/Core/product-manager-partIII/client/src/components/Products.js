import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = (props) => {
    //Any change that happens in create, is available here as well due to state lifted and passed down from their common parent (Main)
    const { productList, setProductList} = props;
    // const navigate = useNavigate();

    //On initial render of this component, this useEffect will run its request to our Server
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, [setProductList]); 
        //funtion to handle the button that will delete a product
        function handleDelete(delete_id){
            //to delete from the database, we will run the delete URL we defined
            axios.delete(`http://localhost:8000/api/products/${delete_id}`)
            .then( res => {
                console.log("deleted product", res.data);
    
                //after the product is deleted from the DB, it is still showing on the page because we didn't update the state
                //let's use filter instead of map to iterate through the list of products and tell it which products to keep and which one to remove
                //filter will filter out anything returned as false (true if you want to keep something, false if you want to remove it)
                const filteredProducts = Products.filter( (product) => {
                        //check if the product id is equal to the one that was just deleted
                        //will return tru on all the products that were not deleted
                        //will return false on the product that was deleted
                        return product._id !== delete_id;
                    }
                )
                //update state now that you have an updated array of products
                setProductList(filteredProducts);
            })
            .catch( err => {console.error(err)})
    
        }

    /////////////////////////////////////////////
    return (
    <div>
            <header>
            <h1 className="text-center">All Products:</h1>
            </header>
            {
                productList.map((product, index) => (
                    <div key={index} className="row mb-2 justify-content-center">
                        {/* This is where :id in our app.js path gets its value... We can access this info via props */}
                        {/* Note: when styling, the DOM read "Link" as an a tag */}
                        <Link to={`/product/${product._id}`} className="col-md-7 p-2 text-center">
                            {product.title}
                        </Link>
                        {/* create a button to delete the product */}
                        <button 
                        className="btn btn-outline-danger"
                        onClick={ e => {handleDelete(product._id)}}>Delete this product</button>

                        {/* link to update */}
                        <Link to={`/product/update/${product._id}`} className="btn btn-outline-success">
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Products