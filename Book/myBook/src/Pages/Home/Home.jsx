import React, { useEffect, useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(()=>{
        fetch("data/booksData.json").then(res=>res.json()).then(data=>{
            console.log(data);
            setAllBooks(data);
        })
    }, [])

    console.log("AllBooks ", allBooks);
    return (
        <div>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;