import React from 'react';
import Movie from '../Movie/Movie';
import { Redirect } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies }) => {
  if (!movies) {
    return (
      <>
      <Redirect to='/' />
      <h1>Refreshing the main page...</h1>
      </>
    )
  } else { 
   const movieTiles = movies.map(movie => {
    return (
      <Movie
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
        key={movie.id}
      />
    )
  })
  return <div className="movie-list">{movieTiles}</div>
  }
}

export default MovieList
