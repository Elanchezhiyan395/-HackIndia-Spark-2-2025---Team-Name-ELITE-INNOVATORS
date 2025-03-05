import React, { useState } from "react";

const JobSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h2>Search Jobs</h2>
      <input
        type="text"
        placeholder="Search by skill, budget, etc."
        value={search}
        onChange={handleSearch}
      />
      <button>Search</button>
    </div>
  );
};

export default JobSearch;
