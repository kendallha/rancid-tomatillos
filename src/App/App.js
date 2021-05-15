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

  goBacktoMainView = () => {
    this.setState({ selectedMovie: null });
  }

  render() {
    return (
      <div className="container">
      <main className='main'>
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
