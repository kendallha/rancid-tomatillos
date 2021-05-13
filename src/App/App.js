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
      selectedMovie: null
    }
  }

  handleClick = (id) => {
    const clickedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: clickedMovie });
  }

  render() {
    return (
      <main className='main'>
      <Header />
        {!this.state.selectedMovie && <MovieList movies={ this.state.movies } handleClick={this.handleClick}/>}
        <MovieDetail movie={this.state.selectedMovie}/>
      </main>
    )
  }
}

export default App
