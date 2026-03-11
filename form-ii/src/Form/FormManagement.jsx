import React, { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

const FormManagement = () => {

  const [students, setStudents] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const storedStudents = localStorage.getItem("students");

    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleDelete = (index) => {
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        Student Management System
      </h1>

      <Form handleStudent={handleStudent} />

      <Table students={students} handleDelete={handleDelete} />

    </div>
  );
};

export default FormManagement;