import React from 'react'

const Movie = ({ id, poster, rating, releaseDate, title }) => {
  return(
    <article>
      <img src={poster} />
      <p>Rating: {rating} out of 10 </p>
      <p>Release date: {releaseDate}</p>
      <h3>{title}</h3>
    </article>
  )
}

export default Movie
