import React from 'react';

const Bottle = ({bottle}) => {

    console.log(bottle);
    const {img, name, seller, price } = bottle;
    return (
        <div className='card'>
            <h3>Name : {name}</h3>
            <p>Seller : {seller}</p>

            <img src= {img} alt="" />
            <p><b>Price : {price}</b></p>
            
        </div>
    );
};

export default Bottle;











// {
//     "id": "9e7cda87-8160-458f-bd32-ecf253a2d86a",
//     "category": "Bottle",
//     "name": "Steel Metal Bottle 1L",
//     "seller": "Addidas",
//     "price": 33,
//     "stock": 7,
//     "ratings": 4,
//     "ratingsCount": 62,
//     "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
//     "shipping": 15,
//     "quantity": 0
// }