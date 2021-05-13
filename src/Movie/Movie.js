import React from 'react';
import './Movie.css';

const Movie = ({ id, poster, rating, releaseDate, title }) => {
  return(
    <article className='movie'>
      <div className='poster-section'>
      <img className='poster-image' src={poster} />
      <p className='rating'>{rating.toFixed(1)}</p>
      </div>
      {/* <div className='rating'></div> */}
      <div className='movie-label'>
        {/* <p className='rating'>{Math.round(rating)}</p> */}
        <h3 className='title'>{title}</h3>
        <p>Release date: {releaseDate}</p>
      </div>
    </article>
  )
}

export default Movie
