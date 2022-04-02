import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    let quantity = 0;
    for (const book of cart) {
        quantity = quantity + book.quantity;
    }

    return (
        <div>
            <div className='cart'>
            <h2>Selected items</h2>
            <p>Books: {quantity} </p>
                <button>Choose One </button>
                <button>Choose Again</button>
        </div>
        </div>
    );
};

export default Cart;