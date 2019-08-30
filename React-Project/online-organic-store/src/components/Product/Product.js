import React from 'react';
import ProductStyle from './Product.css'; 
const Product = props => {
    return(
        <div className="ProductStyle" key={props.post.id}>
                            <div>Caregory:{props.post.category}</div>
                            <div>Name:{props.post.title}</div>
                            <div><img src={props.post.imageUrl} ></img></div>
                            <div>Price:{props.post.price}</div>
                            <div><button className="btn btn-primary" key={props.post.id}  onClick={props.clicked}>Add to Cart</button>
                            </div>
                            
    </div>
    );
}

export default Product;