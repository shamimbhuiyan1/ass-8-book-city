import React from 'react';
import Book from '../Book/Book';

const Books = () => {
    const books = [
        {id:1,name:'Helmet',price:'$200',img:'/src/Components/images/children-author.jpg'}
    ]


    return (
        <div>
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