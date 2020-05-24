/// <reference types="Cypress" />

context('Authentication', () => {
  it('should work with the right credentials', () => {
    const username = 'smagni@workwave.com'
    const password = 'mysupersecretpassword'

    cy.viewport(300, 600)
    cy.server()
    cy.visit('/')

    cy.route({
      method: 'POST',
      url: `**/api/authentication`,
      response: 'fixture:authentication/authentication-success.json',
    })

    cy.findByPlaceholderText('Your username').type(username)
    cy.findByPlaceholderText('Your password').type(password)
    cy.findByRole('button', { name: 'Login' }).click()

    cy.findByText('Welcome back!').should('be.visible')
  })
})
