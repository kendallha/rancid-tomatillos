describe('searchBar', () => {
  beforeEach(() => {
    cy.fixture('movies').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { body: movies }).as('movies')
    })
    cy.visit('http://localhost:3000/')
  })

  it('should have a search input and button on the page', () => {
    cy.get('form').find('input')
      .get('form').find('button')
  })

  it('should be able to search the movie titles that contain what is in the search input', () => {
    cy.get('input').type('Money')
      .get('button').click()
      .get('.movie-list').children().should('have.length', 1)
      .get('.title').contains('Money')
  })
})
