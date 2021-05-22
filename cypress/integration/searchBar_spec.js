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

  it('should be able to hit search with nothing in the input and have it display all the movies', () => {
    cy.get('button').click()
      .location('pathname').should('eq', '/')
      .get('.movie-list').children().should('have.length', 41)
      .get('.page-title').contains('Popular Movies this Month')
  })

  it('should be able to hit search with nothing in the input and have it display all the movies, after searching for a movie', () => {
    cy.get('input').type('Money')
      .get('button').click()
      .get('input').clear()
      .get('button').click()
      .get('.movie-list').children().should('have.length', 41)
      .get('.page-title').contains('Popular Movies this Month')
  })

  it('should be able to return to the main page by clicking the title, after searching for a movie', () => {
    cy.get('input').type('Money')
      .get('button').click()
      .get('.app-name').click()
      .location('pathname').should('eq', '/')
      .get('.movie-list').children().should('have.length', 41)
      .get('.page-title').contains('Popular Movies this Month')
  })

  it('should take the user to a page with it\'s own url when the user searches', () => {
    cy.location('pathname').should('eq', '/')
      .get('input').type('Money')
      .get('button').click()
      .location('pathname').should('eq', '/search/Money')
  })

  it('should show the user what they had typed as a search, on the search results page', () => {
    cy.get('input').type('Money')
      .get('button').click()
      .get('.page-title').contains('Search results for "Money"')
  })

  it ('should inform the user if there aren\'nt any titles that match their search input', () => {
    
  })
})
