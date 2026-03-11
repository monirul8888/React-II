import React from 'react';

import bookimg from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className='flex justify-around items-center p-16 w-full'>
            <div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci illum dignissimos culpa architecto voluptates tenetur</p>
                <button className='btn btn-primary'>Button</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;