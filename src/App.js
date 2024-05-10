import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import movies from './movies.json'; 
import './App.css'; 

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ genre: '', director: '', language: '' });

  return (
    <Router>
      <div className="app-container">
        <div className="search-and-filters">
          <SearchBar setSearchQuery={setSearchQuery} />
          <Filters setFilters={setFilters} />
        </div>
        <Routes>
          <Route
            path="/"
            element={
            <MovieList
              searchQuery={searchQuery}
              filters={filters}
              movies={movies} // Pass the imported movie data
            />
          }
          />
          <Route path="/movie/:movieId" element={<MovieCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
