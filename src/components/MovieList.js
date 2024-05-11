import React, { useState } from "react";
import { Link } from "react-router-dom";

const MovieList = ({ searchQuery, filters, movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(5);

  // Filtering movies based on search and filters
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre = filters.genre ? movie.genre === filters.genre : true;
    const matchesDirector = filters.director
      ? movie.director === filters.director
      : true;
    const matchesLanguage = filters.language
      ? movie.language === filters.language
      : true;

    return matchesSearch && matchesGenre && matchesDirector && matchesLanguage;
  });

  // Pagination logic
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = currentPage * moviesPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="movie-list">
        {paginatedMovies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="movie-card-link"
          >
            <div className="movie-card">
              <img
                src={movie.thumbnail}
                alt={movie.name}
                className="movie-thumbnail"
              />
              <h3>{movie.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>    
    </>
  );
};

export default MovieList;
