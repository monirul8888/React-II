import React, { use } from 'react';

const Book = ({bookPromise}) => {
    
    const books = use(bookPromise);
   
   
    return (
        <div>
                <h1>Available Books : {books.length}</h1>
        </div>
    );
};

export default Book;