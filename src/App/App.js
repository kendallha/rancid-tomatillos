import React, { Component } from 'react';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import './App.css';
import MovieDetail from '../MovieDetail/MovieDetail';
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
    .then(data => {
      this.setState({ movies: data.movies })
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

          {!this.state.movies.length && !this.state.error &&
            <h1 className='loading-message'>Movies are on the way!</h1>
            }
        <Switch>
         <Route exact path='/' render={() =>
           { return ( <>
              <Header />
              <MovieList movies={ this.state.movies } />
            </>
           )
          }
          }/>
        <Route path='/:id' render={({ match }) => {
          const { id } = match.params
           return <MovieDetail id={ parseInt(id) } />
        }
        }/>
          </Switch>
         </main>
      </div>
    )
  }
}

export default App
