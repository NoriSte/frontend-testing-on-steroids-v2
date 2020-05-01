/// <reference types="Cypress" />

context('Talk', () => {
  it('Logs everything in the console', () => {
    cy.visit('/')
    cy.log('cy.log from the test')

    console.log('%c  console.log from the test ', 'background: #08BE8A; color: #FFF')

    cy.window().then((win) => {
      console.log(
        '%c Logging window.location from the test ',
        'background: #08BE8A; color: #FFF',
        win.location
      )
    })

    cy.wrap({ foo: 'foo', bar: 'bar', baz: 'baz' }).should('deep.equal', {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
      nestedObject: { foo: 'foo', bar: 'bar', baz: 'baz' },
    })
  })
})
