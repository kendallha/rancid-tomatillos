import React from 'react';
import './MovieDetail.css';

const MovieDetail = ( {movie, goBack} ) => {
  return (
    <div>
      <button onClick={() => goBack()}>Back to All</button>
      <article className='movie-expanded'>
        <img className='poster-image' src={movie.poster_path} />
        <p className='rating'>{movie.average_rating.toFixed(1)}</p>
        <h3 className='title'>{movie.title}</h3>
        <p>Release date: {movie.release_date}</p>
        <p>{movie.genres}</p>
        <p>{movie.tagline}</p>
        <p>Budget: {movie.budget}</p>
        <p>Revenue: {movie.revenue}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>{movie.overview}</p>
        <img src={movie.backdrop_path} />
      </article>
    </div>
  )
}

export default MovieDetail;