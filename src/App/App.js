import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import movieData from '../mockData';
import './App.css';
import MovieDetail from '../MovieDetail/MovieDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      clickedMovieId: null
    }
  }

  handleClick = event => {
    this.setState({ clickedMovieId: event.target.id });
  }

  findMovieFromId = () => {
    return this.state.movies.find(movie => movie.id === this.state.clickedMovieId);
  }

  render() {
    return (
      <main className='main'>
      <Header />
        {!this.state.movieClicked && <MovieList movies={ this.state.movies } handleClick={this.handleClick()}/>}
        <MovieDetail movie={this.findMovieFromId()}/>
      </main>
    )
  }
}

export default App
