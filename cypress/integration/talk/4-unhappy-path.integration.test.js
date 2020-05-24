/// <reference types="Cypress" />

context('Authentication', () => {
  it('should alert the user it the credentials are wrong', () => {
    cy.viewport(300, 600)
    cy.server()
    cy.visit('/')

    cy.route({
      method: 'POST',
      response: {},
      url: `**/api/authentication`,
      status: 401,
    }).as('auth-xhr')

    cy.findByPlaceholderText('Your username').type('smagni@workwave.com')
    cy.findByPlaceholderText('Your password').type('mysupersecretpassword')
    cy.findByRole('button', { name: 'Login' }).click()

    cy.findByText('The credentials are wrong').should('be.visible')
  })
})
