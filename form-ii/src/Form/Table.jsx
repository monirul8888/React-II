import React from "react";

const Table = ({ students, handleDelete }) => {

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">

      <h3 className="text-xl font-bold mb-4 text-gray-700">
        Available Students : {students.length}
      </h3>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">ID</th>
              <th className="p-3">Department</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student, index) => (

              <tr
                key={index}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.id}</td>
                <td className="p-3">{student.dept}</td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Table;