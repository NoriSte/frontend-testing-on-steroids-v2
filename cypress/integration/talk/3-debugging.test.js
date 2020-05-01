/// <reference types="Cypress" />

context('Talk', () => {
  it.only('Pausing the test and time travelling', () => {
    cy.visit('/')

    cy.get('[data-testid="Your username"]').type('smagni@workwave.com')
    cy.get('[data-testid="Your password"]').type('wrongpassword')
    cy.pause()
    cy.get('[data-testid="Login"]').click()

    cy.contains('The credentials are wrong').should('be.visible')
  })

  it('DOM-related errors', () => {
    cy.visit('/?fixeddiv=1')

    cy.get('[data-testid="Your username"]').type('smagni@workwave.com')
    cy.get('[data-testid="Your password"]').type('wrongpassword')
    cy.get('[data-testid="Login"]').click()

    cy.contains('The credentials are wrong').should('be.visible')
  })
})
