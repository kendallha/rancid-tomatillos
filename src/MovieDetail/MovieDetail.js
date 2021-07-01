import React, { Component } from 'react';
import { getMovieDetails } from '../api-calls/api-calls'
import './MovieDetail.css';
import { Link } from 'react-router-dom'

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
      .then(response => this.handleErrors(response))
      .then(data => this.setState({ movie: data.movie }))
      .catch(error => this.setState({ error: 'Something went wrong, please try again.' }))
  }

  handleErrors = (response) => {
    if (!response.ok) {
      this.setState(
        { error: 'Something went wrong, please try again.'}
      )
    } else {
      return response.json()
    }
  }

  render() {
    const { movie } = this.state;
    if (!this.state.movie && this.state.error) {
      return <h1 className='error-message'>{this.state.error}</h1>
    } else if (!this.state.movie) {
      return (<h1>Loading...</h1>)
    }
    return (
      <article className='movie-expanded' style={{
          backgroundImage: 'url('+ movie.backdrop_path +')'}}>
        <Link to ={'/'}>
          <i className='fas fa-arrow-circle-left fa-3x'
          aria-label='Back Button' role='button'>
          </i>
        </Link>
        <div className='double-poster-wrapper'>
          <div className='poster-wrapper'>
            <img alt={`${movie.title} movie poster`} className='poster' src={movie.poster_path} />
            <p className='average-rating'>{movie.average_rating.toFixed(1)}</p>
          </div>
        </div>
        <div className='info-section'>
          <h3 className='movie-title'>{movie.title} ({movie.release_date.substring(0,4)})</h3>
          <p className='tagline'>{movie.tagline}</p>
          <div className='top-card'>
            <div className='main-details'>
              <p>{movie.genres.join('/ ')}</p>
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
    )
  }

}

export default MovieDetail;
