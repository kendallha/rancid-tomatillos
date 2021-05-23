import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({searchInput: e.target.value});
  }

  render() {
    return (
      <form className='form'>
        <input type='text' placeholder='Search for a movie title' name='search' value={this.state.searchInput} onChange={e => this.handleChange(e)}/>
        <Link to={`/search/${this.state.searchInput}`}>
            <i className='fas fa-search fa-2x' type='submit' name='search' onClick={e => this.props.handleSearch(this.state.searchInput)}></i>
        </Link>
      </form>
    )
  }
}

export default Search;
