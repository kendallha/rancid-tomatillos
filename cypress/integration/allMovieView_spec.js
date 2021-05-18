describe('AllMovieView', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      cy.fixture('movies').then((movies) => {
      cy.intercept("GET", 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { body: movies })
      })
  })

  it('should display the app name when the page loads', () => {
    cy.get('.app-name').contains('Rancid Tomatillos')
  })

  it('should display the page heading when the page loads', () => {
    cy.get('.page-title').contains('Popular Movies this Month')
  })

  it('should display all of the movies when the page loads', () => {
    cy.get('.movie-list').children().should('have.length', 40)
  })

  it('should show basic information for each movie displayed', () => {
    cy.get('.movie').contains('img')
  })
})