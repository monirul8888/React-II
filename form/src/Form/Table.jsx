import React from "react";

const Table = ({ students }) => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h3 className="text-xl font-semibold mb-4">
        Students Available : {students.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Department</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gray-100 transition"
              >
                <td className="py-2 px-4 border">{student.name}</td>
                <td className="py-2 px-4 border">{student.id}</td>
                <td className="py-2 px-4 border">{student.dept}</td>
                <td className="py-2 px-4 border">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                    View
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