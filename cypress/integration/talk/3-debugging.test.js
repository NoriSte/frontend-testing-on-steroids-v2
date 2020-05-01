/// <reference types="Cypress" />

context('Talk', () => {
  it.only('Pausing the test and time travelling', () => {
    cy.visit('/')

    cy.findByPlaceholderText('Your username').type('smagni@workwave.com')
    cy.findByPlaceholderText('Your password').type('wrongpassword')
    cy.pause()
    cy.findByText('Login').click()

    cy.findByText('The credentials are wrong').should('be.visible')
  })

  it('DOM-related errors', () => {
    cy.visit('/?fixeddiv=1')

    cy.findByPlaceholderText('Your username').type('smagni@workwave.com')
    cy.findByPlaceholderText('Your password').type('wrongpassword')
    cy.findByText('Login').click()

    cy.findByText('The credentials are wrong').should('be.visible')
  })
})
