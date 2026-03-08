import React from 'react';
import UseInput from '../../Hooks/UseInput';

const HookForm = () => {

    const [name, nameOnChange] = UseInput("");
    const [id, idOnChange] = UseInput("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submitted", name, id);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="name" id=""
                onChange={nameOnChange}
                defaultValue={name}
                 />
                 <br />
                 <input type="number" name="id" id="" placeholder='ID'
                 onChange={idOnChange}
                 defaultValue={id} />
                 <input type="submit" name="" id="" />

            </form>
        </div>
    );
};

export default HookForm;