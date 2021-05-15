import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import './App.css';
import MovieDetail from '../MovieDetail/MovieDetail';
import { getAllMovies, getMovieDetails } from '../api-calls/api-calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      error:''
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => {
      this.setState({ movies: data.movies })
    })
    .catch(() => this.setState(
      { error: 'Something went wrong, please try again later.' }))
  }

  goBacktoMainView = () => {
    this.setState({ selectedMovie: null });
  }


  handleClick = (id) => {
    getMovieDetails(id)
      .then(data => {
        this.setState({ selectedMovie: data.movie })
      })
      .catch(() => this.setState(
        { error: 'Something went wrong, please try again later.' }))
  }


  render() {
    return (
      <div className="container">
      <main className='main'>
        {this.state.error &&
          <h1 className='error-message'>{this.state.error}</h1>}
        {!this.state.selectedMovie && !this.state.error && <>
          <Header />
          <MovieList movies={ this.state.movies } handleClick={this.handleClick}/>
        </>}
        {!this.state.movies.length && !this.state.error && <>
          <h1 className='loading-message'>Movies are on the way!</h1>
          </>}
      </main>
      {this.state.selectedMovie && <MovieDetail movie={this.state.selectedMovie} goBack={this.goBacktoMainView}/>}
      </div>
    )
  }
}

export default App
