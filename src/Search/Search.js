import React from 'react';
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
    this.setState({searchInput = e.target.value});
  }

  render() {
    return (
      <form className='form'>
        <input type='text' placeholder='Search for a movie title' name='search' value={this.state.searchInput} onChange={e => this.handleChange(e)}/>
        <Link>
          <button className='search-button' type='submit' name='search'>Search Movies</button>
        </Link>
      </form>
    )
  }
}