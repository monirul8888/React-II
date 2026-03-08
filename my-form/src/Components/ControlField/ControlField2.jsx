import React, { useState } from 'react';

const ControlField2 = () => {
    const handleControlField = (e) =>{
        e.preventDefault();
        console.log("Name : ", name);
        console.log("ID : ", id);

    }

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    

    const handleNameOnChange = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleIdOnChange = (e) =>{
        console.log(e.target.value);
        setId(e.target.value);
    }
    return (
        <div>

            <form onSubmit={handleControlField}>
                <input type="text" name="name" id="" 
                placeholder='Name'
                onChange={handleNameOnChange}
                defaultValue={name}
                
                />
                <br />

                <input type="number" name="" id="" placeholder='ID'
                onChange={handleIdOnChange}
                defaultValue={id} />
                <br />

                <input type="submit" name="" id="" />
            </form>
            
        </div>
    );
};

export default ControlField2;