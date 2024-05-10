import React from 'react';


const Filters = ({ setFilters }) => {
  const handleChange = (e, filterType) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: e.target.value,
    }));
  };

  return (
    <div className="filters">
      <select onChange={(e) => handleChange(e, 'genre')} defaultValue="">
        <option value="">All Genres</option>
        <option value="Action">Action</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
      </select>

      <select onChange={(e) => handleChange(e, 'director')} defaultValue="">
        <option value="">All Directors</option>
        <option value="Frank Darabont">Frank Darabont</option>
        <option value="Mel Gibson">Mel Gibson</option>
        <option value="Jonathan Demme">Jonathan Demme</option>
      </select>

      <select onChange={(e) => handleChange(e, 'language')} defaultValue="">
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>
    </div>
  );
};

export default Filters;
