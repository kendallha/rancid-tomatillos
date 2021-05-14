import React from 'react';
import './MovieDetail.css';

const MovieDetail = ( {movie, goBack} ) => {
  return (
    <div style={{
      backgroundImage: 'url('+ movie.backdrop_path +')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundColor: '#324653'
    }}>
      <button onClick={() => goBack()}>Back to All</button>

      <article className='movie-expanded'>
        {/* <img className='backdrop-image' src={movie.backdrop_path} /> */}
        <img className='poster' src={movie.poster_path} />
        <p className='average-rating'>{movie.average_rating.toFixed(1)}</p>
        <h3 className='movie-title'>{movie.title}</h3>
        <p>Release date: {movie.release_date}</p>
        <p>{movie.genres}</p>
        <p>{movie.tagline}</p>
        <p>Budget: {movie.budget}</p>
        <p>Revenue: {movie.revenue}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>{movie.overview}</p>
      </article>
      <div className='divider'>/</div>
    </div>
  )
}

export default MovieDetail;
