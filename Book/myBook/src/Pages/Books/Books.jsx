import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

     const [allBooks, setAllBooks] = useState([]);
     

    // useEffect(()=>{
    //     fetch("data/booksData.json").then(res=>res.json()).then(data=>{
    //         console.log(data);
    //         setAllBooks(data);
    //     })
    // }, [])

    // console.log("AllBooks ", allBooks);

    const bookPromise = fetch("/data/booksData.json").then(res=>res.json());

    return (
        <div>
            <h1 className='text-3xl text-center py-6 '> Books</h1>
            <Suspense fallback= {<span>Loading.....</span>}>

            <Book bookPromise = {bookPromise}>

            </Book>

            </Suspense>
            
        </div>
    );
};

export default Books;