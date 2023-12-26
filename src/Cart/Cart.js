import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props;
    let total =0;
    for(const product of cart){
        total = total+product.price;
    }
    return (
        <div className='card-containner'>
            <div className='order-title' >
                <h2>Order Summary</h2>
                <hr/>
            </div>
            <div className='order-item'>
            <h3>Order Item : {props.cart.length}</h3>
                <h3>Total: {total}$</h3>
                <button className='btn'>order now</button>
            </div>
        </div>
    );
};

export default Cart;