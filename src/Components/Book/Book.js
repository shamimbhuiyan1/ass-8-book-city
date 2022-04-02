import React from 'react';
import './Book.css'
const Book = (props) => {
    const {book,handleAddToCart}=props
    const { id, name, img, price } = props.book;
    return (
        <div className='book'>
            <img src={img} alt='' />
            <div className='book-info'>
            <h1 className='book-name'>Name:{name} </h1>
                <h3>Id:{id} </h3>
                <h2>Price: {price} </h2>
                <button onClick={() => handleAddToCart(book)} className='btn-cart' >
                <p className='btn-text'>Add to Cart</p>
                </button>
            </div>
        </div>
    );
};

export default Book;