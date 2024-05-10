import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../movies.json'; 
import axios from 'axios';


const MovieCard = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [borrowError, setBorrowError] = useState('');

  useEffect(() => {
    const movieData = movies.find((m) => m.id === parseInt(movieId));
    setMovie(movieData);
  }, [movieId]);


  const handleBorrow = async () => {
    try {
      // Simulate a fake API call that always fails
      await axios.post('https://fake-movie-api.com/borrow', { movieId: movie.id });
    } catch (error) {
      setBorrowError('Failed to borrow the movie. Please try again later.');
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details-container">
      <h2>{movie.name}</h2>
      <img src={movie.thumbnail} alt={movie.name} className="movie-detail-thumbnail" />
      <p>{movie.description}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>


      {/* Borrow Button */}
      <button onClick={handleBorrow} className="borrow-button">Borrow</button>

      {/* Display Error Message if Borrow Fails */}
      {borrowError && <p className="error-message">{borrowError}</p>}

      <Link to="/" className="back-link">Go Back to Home Page</Link>
    </div>
  );
};

export default MovieCard;
