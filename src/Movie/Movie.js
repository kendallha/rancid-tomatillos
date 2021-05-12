import React from 'react';
import './Movie.css';

const Movie = ({ id, poster, rating, releaseDate, title }) => {
  return(
    <article className='movie'>
      <img className='poster-image' src={poster} />
      <p>Rating: {rating} out of 10 </p>
      <p>Release date: {releaseDate}</p>
      <h3>{title}</h3>
    </article>
  )
}

export default Movie
