import React from 'react';

const Book = (props) => {
    const { id, name, img, price } = props.book;
    return (
        <div className='book-container'>
            <img src={img} alt='' />
            <div>
            <h1>Name:{name} </h1>
                <h3>Id:{id} </h3>
                <h2>Price: {price} </h2>
            </div>
        </div>
    );
};

export default Book;