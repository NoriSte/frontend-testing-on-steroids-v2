/// <reference types="Cypress" />

context('Talk', () => {
  it('Waiting before interacting', () => {
    cy.visit('/?delayElements=1')

    cy.findByPlaceholderText('Your username').type('smagni@workwave.com')
    cy.findByPlaceholderText('Your password').type('wrongpassword')
    cy.findByText('Login').click()

    cy.findByText('The credentials are wrong').should('be.visible')
  })
})
