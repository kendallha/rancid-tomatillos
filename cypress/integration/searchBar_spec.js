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
})
