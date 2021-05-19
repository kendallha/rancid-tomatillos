import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

const Movie = ({ id, poster, rating, releaseDate, title }) => {

  return(
    <Link to={`/${id}`}>
    <article id={id} className='movie'>
      <div className='poster-section'>
      <img className='poster-image' src={poster} />
      <p className='rating'>{rating.toFixed(1)}</p>
      </div>
      <div className='movie-label'>
        <h3 className='title'>{title}</h3>
        <p className='release-date'>Release date: {releaseDate}</p>
      </div>
    </article>
    </Link>
  )
}

export default Movie
