import React from 'react';
import './MovieDetail.css';

const MovieDetail = ( {movie, goBack} ) => {
  return (
    <div className='movie-detail-wrapper'>
      <button onClick={() => goBack()}>Back to All</button>
      <article className='movie-expanded' style={{
        backgroundImage: 'url('+ movie.backdrop_path +')'
      }} >
      {/* <div className='background' style={{
        backgroundImage: 'url('+ movie.backdrop_path +')'
      }}></div> */}
        <div className='double-poster-wrapper'>
          <div className='poster-wrapper'>
            <img className='poster' src={movie.poster_path} />
            <p className='average-rating'>{movie.average_rating.toFixed(1)}</p>
          </div>
        </div>
        <div className='info-section'>
        <div className='top-card'>
          <div className='main-details'>
            <h3 className='movie-title'>{movie.title}</h3>
            <p className='tagline'>{movie.tagline}</p>
            <p>{movie.genres}</p>
          </div>
          <div className='movie-details-aside'>
            <p>Runtime: {movie.runtime} minutes</p>
            <p>Release date: {movie.release_date}</p>
            <p>Budget: ${movie.budget.toLocaleString()}</p>
            <p>Revenue: ${movie.revenue.toLocaleString()}</p>
          </div>
          </div>
          <p>{movie.overview}</p>
        </div>
      </article>
    </div>
  )
}

export default MovieDetail;
