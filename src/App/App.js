import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
// import movieData from '../mockData';
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
      { error: 'There was an issue connnecting to the server. Please try again later' }))
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
        { error: 'There was an issue connnecting to the server. Please try again later' }))
  }


  render() {
    return (
      <div className="container">
      <main className='main'>
        {this.state.error &&
          <h1>{this.state.error}</h1>}
        {!this.state.selectedMovie && <>
          <Header />
          <MovieList movies={ this.state.movies } handleClick={this.handleClick}/>
        </>}
      </main>
      {this.state.selectedMovie && <MovieDetail movie={this.state.selectedMovie} goBack={this.goBacktoMainView}/>}
      </div>
    )
  }
}

export default App
