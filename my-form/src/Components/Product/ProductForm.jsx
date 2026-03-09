import React from 'react';

const ProductForm = ({handleProduct}) => {

    const handleProductSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log(name, price, quantity);

        const newProduct = {
            name:name,
            price:price,
            quantity:quantity
        }

        // console.log(newProduct);

        handleProduct(newProduct);

    }
    return (
        <div>
            <h2>Add a Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="" placeholder='Product Name' />
                <br />
                
                <input type="text" name="price" id="" placeholder='Product Price' />
                <br />
                <input type="text" name="quantity" id="" placeholder='Product Quantity' />
                <br />

                <input type="submit" name="" id="" />

            </form>
        </div>
    );
};

export default ProductForm;