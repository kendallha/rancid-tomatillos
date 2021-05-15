export const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movie')
    .then(response => response.json())
}

export const getMovieDetails = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
}
