import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(()=>{
  //     fetch("data/booksData.json").then(res=>res.json()).then(data=>{
  //         console.log(data);
  //         setAllBooks(data);
  //     })
  // }, [])

  // console.log("AllBooks ", allBooks);

  // const bookPromise = fetch("/data/booksData.json").then(res=>res.json());

  return (
    <div>
      <h1 className="text-3xl text-center py-6 "> Books</h1>
      <Suspense fallback={<span>Loading.....</span>}>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {data.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
       </div>
      </Suspense>
    </div>
  );
};

export default Books;
