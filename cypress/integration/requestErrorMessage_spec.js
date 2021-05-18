describe('AllMovieView', () => {
  beforeEach(() => {
    cy.fixture('movies').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { forceNetworkError: true }).as('err')
    })
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/ 1', { forceNetworkError: true }).as('err') 
  })

  it('should display an error if there is a problem with the network request', () => {
    cy.get('.error-message').contains('Something went wrong, please try again later.')
  })
})