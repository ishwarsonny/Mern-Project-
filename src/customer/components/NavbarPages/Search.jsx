import React, { useState } from "react";

const SearchPage = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center py-20 h-[20rem] w-full bg-white text-black">
      <h2 className="text-xl font-semibold mb-2">SEARCH</h2>
      <p className="mb-4">Enter a word to search our products:</p>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
        className="border border-gray-400 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchPage;
