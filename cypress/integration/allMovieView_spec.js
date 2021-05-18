describe('AllMovieView', () => {
  beforeEach(() => {
    cy.fixture('movies').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { body: movies }).as('movies')
    })
    cy.visit('http://localhost:3000/')

  })

  it('should display the app name when the page loads', () => {
    cy.get('.app-name').contains('Rancid Tomatillos')
  })

  it('should display the page heading when the page loads', () => {
    cy.get('.page-title').contains('Popular Movies this Month')
  })

  it('should display all of the movies when the page loads', () => {
    cy.get('.movie-list').children().should('have.length', 41)
  })

  it('should show basic information for each movie displayed', () => {
    cy.get('.movie').find('img')
    cy.get('.movie').find('p')
    cy.get('.movie').find('h3')
    cy.get('.movie').contains('Release date')
  })
})