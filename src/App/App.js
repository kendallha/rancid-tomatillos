import React, { Component } from 'react'
import MovieList from '../MovieList/MovieList'
import movieData from '../mockData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <MovieList movies={ this.state.movies }/>
        <h1>Placeholder!</h1>
      </main>
    )
  }
}

export default App
