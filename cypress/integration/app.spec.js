const LOCALHOST = 'http://localhost:3000/'

describe('App component', () => {
  it('Visits the App component', () => {
    cy.visit(LOCALHOST)
    // cy.get('div').should('exist')
  })
  it('must have a div container', () => {
    cy.get('div#card-container').should('exist')
  })
  it('have h2 subheadings', () => {
    cy.get('div#card-container')
      .children('div.shadow-contentCardShadow')
      .children('h2')
      .should('exist')
  })
  it('must have image tags', () => {
    cy.get('img').should('exist')
  })
  it('has img tags with src attributes', () => {
    cy.get('img').should('have.attr', 'src')
  })
  it('has image tags with alt attribute', () => {
    cy.get('img').should('have.attr', 'alt')
  })
  it('has a div that contains two buttons', () => {
    cy.get('div#button-container').should('exist')
  })
  it('has a button with Prev text', () => {
    cy.get('div#button-container > button').contains('Prev')
  })
  it('has a button with Nexttext', () => {
    cy.get('div#button-container > button').contains('Next')
  })
})
