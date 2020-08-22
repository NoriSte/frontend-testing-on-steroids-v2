/// <reference types="Cypress" />

const fillFormAndClick = ({ username, password }) => {}

context('Authentication', () => {
  it('should alert the user it the login lasts long', () => {
    cy.viewport(300, 600)
    cy.server()
    cy.visit('/')

    // cy.clock()

    cy.route({
      method: 'POST',
      url: `**/api/authentication`,
      response: {},
      delay: 20000,
    }).as('auth-xhr')

    cy.findByPlaceholderText('Your username').type('smagni@workwave.com')
    cy.findByPlaceholderText('Your password').type('mysupersecretpassword')
    cy.findByRole('button', { name: 'Login' }).click()

    // cy.tick(1000)

    cy.findByText('Loading').should('be.visible')
    cy.findByText('Be patient...').should('be.visible')
  })
})
