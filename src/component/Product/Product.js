import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const {
        title,
        description,images,price,
        brand,category
    } = props.product
    //console.log(props.product)
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
           <div className='image-container'>
                 <img src={images[0]} alt=''/>
            </div>
            
            <div className='discription'>
                <h2>Title:{title}</h2>
                <h3>Description:{description}</h3>
                <p>Brand: {brand}</p>
                <p>Price: {price}$</p>
                <p>Category: {category}</p>
                <button 
                onClick={()=>props.handelAddToCart(props.product)}
                className='btn-regular'>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;