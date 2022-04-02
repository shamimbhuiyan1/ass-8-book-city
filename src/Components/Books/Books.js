import React, { useEffect, useState } from 'react';

import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css'

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data=>setBooks(data))
    }, [])

    // cart
    const [cart,setCart]=useState([])

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        // array er modde cart add korar way
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart=[...cart.selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart=[...rest,exists]
        }
        setCart(newCart);



    }




    return (
        <div className='books-container'>
            <div className="book-container">
            {
                books.map(book => <Book
                    book={book}
                    key={book.id}
                    handleAddToCart={handleAddToCart}
                ></Book>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Books;