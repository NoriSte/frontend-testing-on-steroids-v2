/// <reference types="Cypress" />

context('Talk', () => {
  it('Waiting before interacting', () => {
    cy.visit('/?delayElements=1')

    cy.get('[data-testid="Your username"]').type('smagni@workwave.com')
    cy.get('[data-testid="Your password"]').type('wrongpassword')
    cy.get('[data-testid="Login"]').click()

    cy.contains('The credentials are wrong').should('be.visible')
  })
})
