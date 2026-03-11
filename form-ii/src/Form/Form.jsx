import React from "react";
import FormHook from "./FormHook";

const Form = ({ handleStudent }) => {

  const [name, nameOnChange] = FormHook("");
  const [id, idOnChange] = FormHook("");
  const [dept, deptOnChange] = FormHook("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      id,
      dept
    };

    handleStudent(newStudent);

    e.target.reset();
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Student Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Student Name"
          onChange={nameOnChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Student ID"
          onChange={idOnChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          placeholder="Department"
          onChange={deptOnChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Student
        </button>

      </form>
    </div>
  );
};

export default Form;