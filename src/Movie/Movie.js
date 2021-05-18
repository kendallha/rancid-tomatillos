import React from 'react';
import './Movie.css';

const Movie = ({ handleClick, id, poster, rating, releaseDate, title }) => {

  return(
    <article id={id} className='movie' onClick={() => handleClick(id)}>
      <div className='poster-section'>
      <img className='poster-image' src={poster} />
      <p className='rating'>{rating.toFixed(1)}</p>
      </div>
      <div className='movie-label'>
        <h3 className='title'>{title}</h3>
        <p className='release-date'>Release date: {releaseDate}</p>
      </div>
    </article>
  )
}

export default Movie
