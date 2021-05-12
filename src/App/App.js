import { Component } from 'react'
import movieData from '../mockData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return <h1>Placeholder!</h1>
  }
}

export default App
