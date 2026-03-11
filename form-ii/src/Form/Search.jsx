import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div className="max-w-xl mx-auto mt-6">

      <input
        type="text"
        placeholder="Search student..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
};

export default Search;