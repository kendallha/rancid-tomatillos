export const getAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2')
    .then(response => response.json())
}
