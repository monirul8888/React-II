import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Submitted");
        console.log(e.target.abir.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="abir" id="" placeholder='Enter Your Name'/>
                <br />
                <input  type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default SimpleForm;