import React from 'react';
import Book from '../Book/Book';


const Books = () => {
    const books = [
        { id: 1, name: 'Children Author', price: '$200', img: '/src/images/children-author.jpg' },
        { id: 2, name: 'fallen Tide', price: '$150', img: '' },
        { id: 3, name: 'Helmet', price: '$350', img: '' },
        { id: 4, name: 'Harry Poter', price: '$250', img: '' },
        { id: 5, name: 'Matilda Childrens', price: '$245', img: '' },
        { id: 6, name: 'Neil Gaimen', price: '$220', img: '' },
        { id: 7, name: 'Nelson Mendela', price: '$350', img: '' },
        { id: 8, name: 'Owl and Moon', price: '$150', img: '' },
        { id: 9, name: 'Romio & Joliet', price: '$270', img: '' },
        {id:10,name:'The Book Theif',price:'$100',img:''}
    ]


    return (
        <div className='books-container'>
            {
                books.map(book => <Book
                    book={book}
                    key={book.id}
                ></Book>)
            }
        </div>
    );
};

export default Books;