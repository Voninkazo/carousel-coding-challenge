const LOCALHOST = 'https://sandy-carousel-slider.netlify.app/'

describe('App component', () => {
  it('Visits the App component', () => {
    cy.visit(LOCALHOST)
  })

  it('Must have four blocks in carousel on load', () => {
    cy.get('div#card').should('length', '4')
  })

  it('Must have blocks with h2 elements as subdheaders', () => {
    cy.get('div#card-container')
      .find('div.shadow-contentCardShadow')
      .each(($block) => {
        expect($block.children('h2').length).to.be.greaterThan(0)
      })
  })

  it('Must have an image in each block', () => {
    cy.get('div#card-container')
      .find('#card')
      .each(($block) => {
        expect($block.children('img').length).to.be.greaterThan(0)
      })
  })

  it('Shoud disable previous button on load but enable it on next button click', () => {
    cy.get('button#prev').should('exist')
    cy.get('button#prev').should('is.disabled')
    cy.get('button#next').click()
    cy.get('button#prev').should('is.not.disabled')
  })

  it('Shoud enable next button on load but disable it at the end of the carousel', () => {
    cy.get('button#next').should('is.not.disabled')
    // The loop generates the number of click events that are permissable
    const numberOfPermissableClicks = 3
    for (let clickNum = 1; clickNum < numberOfPermissableClicks; clickNum++) {
      cy.get('button#next').click()
    }
    cy.get('button#next').should('is.disabled')
  })
})
