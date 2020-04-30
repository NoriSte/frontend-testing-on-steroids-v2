/// <reference types="Cypress" />

context('Talk', () => {
  it('Logs everything in the console', () => {
    cy.visit('/')
    cy.log('cy.log from the test')
    cy.log('cy.log an array', [1, 2, 3])
    cy.log('cy.log an object', { foo: 'foo', bar: 'bar', baz: 'baz' })

    console.log('%c  console.log from the test ', 'background: #08BE8A; color: #FFF')
    console.log('%c  console.log from the test ', 'background: #08BE8A; color: #FFF', [1, 2, 3])
    console.log('%c  console.log from the test ', 'background: #08BE8A; color: #FFF', {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
    })

    cy.window().then((win) => {
      console.log(
        '%c Logging window.location from the test ',
        'background: #08BE8A; color: #FFF',
        win.location
      )
    })

    cy.log('Clicking on an assertion logs the result in console')
    cy.wrap({ foo: 'foo', bar: 'bar', baz: 'baz' }).should('deep.equal', {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz',
      nestedObject: { foo: 'foo', bar: 'bar', baz: 'baz' },
    })
  })
})
