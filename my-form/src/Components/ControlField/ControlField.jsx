import React from 'react';
import { useState } from 'react';

const ControlField = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email)
    }
    const [password, setPassword] = useState("")
    const [error, setError] =useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNameOnChange = (e) => {
        setName(e.target.value);
    }

    const handlePasswordOnChange = (e) =>{
        setPassword(e.target.value);
        if (password.length < 6){
            console.log("Password Must be 6 Char or Longer")
            setError("Password Must be 6 Char or Longer")
        }
        else{
            setError("")
        }
    }

    const handleOnChangeEmail = (e) =>{
        setEmail(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit} >
               
                <input type="email" name="email" id="" required placeholder='Email'
                onChange={handleOnChangeEmail}/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' defaultValue={password} onChange={handlePasswordOnChange} />
                
                <br />
                <input type="text" name="" id="" placeholder='Name'  defaultValue={name} onChange={handleNameOnChange}/>
                <br />
                <input type="submit" name="" id="" />

            </form>
            <p style={{color: "red"}}>{error}</p>
        </div>
    );
};

export default ControlField;