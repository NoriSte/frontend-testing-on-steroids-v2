/// <reference types="Cypress" />

import { SERVER_URL } from '../../../src/constants'

const username = 'smagni@workwave.com'
const password = 'mysupersecretpassword'

context('Authentication E2E', () => {
  before(() => {
    cy.request('POST', `${SERVER_URL}/e2e-tests/wipe-data`)
    cy.request('POST', `${SERVER_URL}/e2e-tests/seed-data`, {
      username,
      password,
    })
  })

  beforeEach(() => {
    cy.viewport(300, 600)
    cy.visit('/')
  })

  it('should work with the right credentials', () => {
    cy.get('[data-testid="Your username"]').type(username)
    cy.get('[data-testid="Your password"]').type(password)
    cy.get('[data-testid="Login"]').click()

    cy.contains('Welcome back!').should('be.visible')
  })
})

context('Authentication Integration', () => {
  beforeEach(() => {
    cy.viewport(300, 600)
    cy.server()
    cy.visit('/')
  })

  it('should work with the right credentials', () => {
    cy.route({
      method: 'POST',
      response: 'fixture:authentication/authentication-success.json',
      url: `**/api/authentication`,
    })

    cy.get('[data-testid="Your username"]').type(username)
    cy.get('[data-testid="Your password"]').type(password)
    cy.get('[data-testid="Login"]').click()

    cy.contains('Welcome back!').should('be.visible')
  })

  it('should alert the user it the credentials are wrong', () => {
    cy.route({
      method: 'POST',
      response: {},
      url: `**/api/authentication`,
      status: 401,
    }).as('auth-xhr')

    cy.get('[data-testid="Your username"]').type(username)
    cy.get('[data-testid="Your password"]').type(password)
    cy.get('[data-testid="Login"]').click()

    cy.findByText('The credentials are wrong').should('be.visible')
  })
})
