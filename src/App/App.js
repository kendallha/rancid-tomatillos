import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import './App.css';
import MovieDetail from '../MovieDetail/MovieDetail';
import Search from '../Search/Search';
import { getAllMovies } from '../api-calls/api-calls';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error:''
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => this.setState({ movies: data.movies }))
    .catch(() => this.setState({ error: 'Something went wrong, please try again later.' }))
  }

  handleSearch = (searchInput)  => {
    !searchInput && {searchedMovies: this.state.movies}
    const searchedMovies = this.state.movies.filter(movie => movie.title.toUpperCase().includes(searchInput.toUpperCase()));
    searchedMovies !== [] &&
    this.setState({searchedMovies: searchedMovies});
  }

  render() {
    return (
      <main className='main'>
        {this.state.error &&
          <h1 className='error-message'>{this.state.error}</h1>}
        {!this.state.movies.length && !this.state.error &&
          <h1 className='loading-message'>Movies are on the way!</h1>}
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <Header />
                <Search handleSearch={this.handleSearch}/>
                <MovieList movies={ this.state.movies } />
              </>
            )
          }}/>
          <Route path='/:id' render={({ match }) => {
            const { id } = match.params
            return <MovieDetail id={ parseInt(id) } />
          }}/>
        </Switch>
      </main>
    )
  }
}

export default App
