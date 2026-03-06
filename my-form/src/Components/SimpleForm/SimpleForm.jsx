import React from 'react';

const SimpleForm = () => {
    const handleSubmit = () =>{
        console.log("Form Submitted");
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="" id="" placeholder='Enter Your Name'/>
                <input  type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default SimpleForm;