import React from 'react';

const FormAction = () => {
    const handleAction = (formData) =>{
        console.log(formData.get("name"));
    }
    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" id="" placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email'/>
                <input type="submit" name="" id="" />
            </form>
        </div>
    );
};

export default FormAction;