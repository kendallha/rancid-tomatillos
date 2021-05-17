describe('AllMovieView', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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
})