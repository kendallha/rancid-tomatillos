import React, { Component } from 'react'
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import movieData from '../mockData'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main className='main'>
      <Header />
        <MovieList movies={ this.state.movies }/>
      </main>
    )
  }
}

export default App
