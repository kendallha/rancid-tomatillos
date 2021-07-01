describe('Error message', () => {
  it('should display an error if there is a problem with the network request on the main page', () => {
    cy.fixture('movies').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { forceNetworkError: true }).as('err')
    })
    cy.visit('http://localhost:3000/')
    cy.get('.error-message').contains('Something went wrong, please try again later.')
  })

  it('should display an error if there is a problem with the network request on the movie detail page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', { forceNetworkError: true }).as('err')
    cy.visit('http://localhost:3000/1')
    cy.get('.error-message').contains('Something went wrong, please try again.')
  })
})
