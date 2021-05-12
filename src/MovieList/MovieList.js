import React from 'react'
import Movie from '../Movie/Movie'

const MovieList = ({ movies }) => {
  const movieTiles = props.movies.map(movie => {
    return (
      <Movie
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        releaseDate={movie.release_date}
      />
    )
  })
  return <p>Movies go here!</p>
}

export default MovieList
