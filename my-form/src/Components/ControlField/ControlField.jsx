import React from 'react';
import { useState } from 'react';

const ControlField = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.email.value);
    }
    const [password, setPassword] = useState("")
    const [error, setError] =useState("");

    const handlePasswordOnChange = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);
        if (password.length < 6){
            console.log("Password Must be 6 Char or Longer")
            setError("Password Must be 6 Char or Longer")
        }
        else{
            setError("")
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
               
                <input type="email" name="email" id="" required placeholder='Email'/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' defaultValue={password} onChange={handlePasswordOnChange} />
                <input type="submit" name="" id="" />
            </form>
            <p style={{color: "red"}}>{error}</p>
        </div>
    );
};

export default ControlField;