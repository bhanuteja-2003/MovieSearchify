import React from 'react';


const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for movies..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
