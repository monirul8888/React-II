import React from "react";
import UseInput from "../UseInput/UseInput";

const Form = ({handleStudent}) => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target)
        console.log("Form Submitted: ", name, id, dept);

        const data = {
            name:name,
            id:id,
            dept:dept
        }
        console.log(data);

        handleStudent(data);

    }

    const [name, handleNameOnChange] = UseInput("")
    const [id, handleIdOnChange] = UseInput("");
    const [dept, handleDeptOnChange] = UseInput("");
    
  return (
    <div>

        <form onSubmit={handleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name"
        onChange={handleNameOnChange}
        defaultValue={name} />

        <label className="label">ID</label>
        <input type="number" className="input" placeholder="ID"
        onChange={handleIdOnChange}
        defaultValue={id} />

        <label className="label">Department</label>
        <input type="text" className="input" placeholder="Department"
        onChange={handleDeptOnChange}
        defaultValue={dept} />

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
        </form>
  
    </div>
  );
};

export default Form;
