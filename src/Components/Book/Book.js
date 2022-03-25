import React from 'react';

const Book = (props) => {
    const { id, name, img, price } = props.book;
    return (
        <div>
            <h1>Name:{name} </h1>
            <img src={img} alt=''/>
        </div>
    );
};

export default Book;