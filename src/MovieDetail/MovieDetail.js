import React from 'react';
import './MovieDetail.css';

const MovieDetail = ( {movie, goBack} ) => {
  return (
    <div className='movie-detail-wrapper' style={{
        backgroundImage: 'url('+ movie.backdrop_path +')'
      }}>
      <article className='movie-expanded'>
      <i onClick={() => goBack()} 
      className="fas fa-arrow-circle-left fa-3x"
      role='button'>
      </i>
      <div className='double-poster-wrapper'>
        <div className='poster-wrapper'>
          <img className='poster' src={movie.poster_path} />
          <p className='average-rating'>{movie.average_rating.toFixed(1)}</p>
        </div>
      </div>
      <div className='info-section'>
        <h3 className='movie-title'>{movie.title} ({movie.release_date.substring(0,4)})</h3>
        <p className='tagline'>{movie.tagline}</p>
        <div className='top-card'>
          <div className='main-details'>
            <p>{movie.genres}</p>
            <p>{movie.runtime} minutes</p>
          </div>
          <div className='movie-details-aside'>
            <p>Budget: ${movie.budget.toLocaleString()}</p>
            <p>Revenue: ${movie.revenue.toLocaleString()}</p>
          </div>
        </div>
        <p className='overview'>{movie.overview}</p>
        </div>
      </article>
    </div>
  )
}

export default MovieDetail;
