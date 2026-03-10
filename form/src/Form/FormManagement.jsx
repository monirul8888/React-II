import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const FormManagement = () => {
    const [students, setStudents] = useState([]);

    const handleStudent = (newStudent) =>{
    
        const newStudents = [...students, newStudent];
        setStudents(newStudents);
    }

    return(
        <div>
            <Form handleStudent = {handleStudent}></Form>

            <Table students = {students}></Table>
            
        </div>
    )
   
};

export default FormManagement;