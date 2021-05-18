describe('AllMovieView', () => {
  beforeEach(() => {
    cy.fixture('movies').then((movies) => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', { body: movies }).as('movies')
    })
    cy.visit('http://localhost:3000/')
     cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', { 
        movie: {
        id: 1, 
        title: "Fakest Movie Title", 
        poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
        backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
        release_date: "2019-12-04", 
        overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
        average_rating: 6, 
        genres: ["Drama"], 
        budget: 63000000, 
        revenue: 100853753, 
        runtime: 139, 
        tagline: "It's a movie!"
        }
      }) 

    cy.get('#1').click();
  })

  it('should display all of the information for a single movie', () => {
    cy.get('.movie-title').contains('Fakest Movie Title')
      .contains('2019')
      .get('.overview').contains('Some overview that is full of buzzwords')
      .get('.average-rating').contains('6')
      .get('.main-details').contains('Drama')
      .get('.main-details').contains('139 minutes')
      .get('.movie-details-aside').contains('63,000,000')
      .get('.movie-details-aside').contains('100,853,753')
      .get('.tagline').contains('It\'s a movie!')
      .get('.poster-wrapper').find('img')
  })

  it('should not display the other movies when one is selected', () => {
    cy.get('.movie').should('not.exist');
  })

  it('should go back to showing all movies when the back button is clicked', () => {
    cy.get('i').click()
      .get('.app-name').contains('Rancid Tomatillos')
      .get('.page-title').contains('Popular Movies this Month')
      .get('.movie-list').children().should('have.length', 41)
      .get('.movie-expanded').should('not.exist');
  })
})