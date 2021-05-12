import React from 'react';
import './Movie.css';

const Movie = ({ id, poster, rating, releaseDate, title }) => {
  return(
    <article className='movie'>
      <img className='poster-image' src={poster} />
      <div className='movie-label'>
        <h3 className='title'>{title}</h3>
        <div className='movie-details'>
          <p>Rating: {rating} out of 10 </p>
          <p>Release date: {releaseDate}</p>
        </div>
      </div>
    </article>
  )
}

export default Movie
