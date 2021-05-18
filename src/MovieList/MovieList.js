import React from 'react'
import Movie from '../Movie/Movie';
import './MovieList.css';

const MovieList = ({ movies, handleClick }) => {
  const movieTiles = movies.map(movie => {
    return (
      <Movie
        handleClick={handleClick}
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
  console.log("movieTiles",movieTiles.length)
  return <div className="movie-list">{movieTiles}</div>
}

export default MovieList
