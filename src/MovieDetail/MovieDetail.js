import React, { Component } from 'react';
import { getMovieDetails } from '../api-calls/api-calls'
import './MovieDetail.css';

class MovieDetail extends Component{
  constructor() {
    super()
    this.state = {
      movie: null,
      error: ''
    }
  }

  componentDidMount() {
    getMovieDetails(this.props.id)
      .then(data => {
        this.setState({ movie: data.movie })
      })
      .catch(() => this.setState(
        { error: 'Something went wrong, please try again later.' }))
  }

  render() {
    const { movie } = this.state;
    console.log(movie);
    if (!this.state.movie) {
    return (<h1>Loading...</h1>)
    }
    return (
      <div className='movie-detail-wrapper' style={{
          backgroundImage: 'url('+ movie.backdrop_path +')'
        }}>
        <article className='movie-expanded'>
        <i className="fas fa-arrow-circle-left fa-3x"
        role='button'></i>
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
  
}

export default MovieDetail;
