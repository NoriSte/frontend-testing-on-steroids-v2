/// <reference types="Cypress" />

context('Authentication', () => {
  const username = 'smagni@workwave.com'
  const password = 'mysupersecretpassword'

  before(() => {
    cy.request('POST', `http://localhost:3001/e2e-tests/wipe-data`)
    cy.request('POST', `http://localhost:3001/e2e-tests/seed-data`, {
      username,
      password,
    })
  })

  it('should work with the right credentials', () => {
    cy.viewport(300, 600)
    cy.visit('/')

    cy.findByPlaceholderText('Your username').type(username)
    cy.findByPlaceholderText('Your password').type(password)
    cy.findByRole('button', { name: 'Login' }).click()

    cy.findByText('Welcome back!').should('be.visible')
  })
})
