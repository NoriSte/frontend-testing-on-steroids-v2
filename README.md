Front-end Testing on Steroids

TODO:

- prepare the tests
- check that renovate and travis are running
- steps description
- link to the original article
- rebase all the branches on master at the end

---

# Front-end Testing on Steroids

[![Build Status](https://travis-ci.com/NoriSte/frontend-testing-on-steroids.svg?branch=master)](https://travis-ci.com/NoriSte/frontend-testing-on-steroids)
[![Build
Status](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/frontend-testing-on-steroids)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

Why testing a front-end application is so hard? What are the main challenges you need to face? Why do the tests fail without a clear reason?
This talk is about good testing best practices and the tool that is become the de-facto standard of UI Testing: Cypress.

Please note: this is the talk version of my ["Some UI testing problems and the Cypress way"](https://dev.to/noriste/some-ui-testing-problems-and-the-cypress-way-1167) article.

## Talk walkthrough

#### 1 - Cypress UI

Topics:

- the Cypress Test List UI: allows easy test selection
- the Cypress Test Runner UI: allows understanding what happens in the app and in Cypress
- the Cypress [skip-and-only plugin](https://github.com/bahmutov/cypress-skip-and-only-ui): allows to add `skip` and `only` from the Test Runner

#### 2 - Cypress works in the browser

There is not an orchestrating Bash script and an orchestrated browser, the tests work directly in the browser.

Topics:

- everything works in the browser: you do not need to go back and forth from the Bash to the browser
- everything is logged inside the browser' console: you do not need to aggregate logs anymore
- easier command understanding: less tools means more trivial understanding and debugging

Examples:

- logging from the test
- logging from the app
- accessing document.window' properties from the test
- rich assertion results are logged too

#### 3 - Everything is async in UI testing

Everything is asynchronous by definition in browserland

Topics:

- there are not sync/async differences, everything is async by definition
- automatic waiting

Examples:

- retrieving and interacting with an element
- asserting about an element visibility

#### 4 - Debugging

Debugging is typically hard in E2E testing. Cypress comes to the rescue with a lot of first-class utilities.

Topics:

- tests can be paused and resumed later
- the Cypress Test Runner allows time-travelling: you can analyze the DOM at every test step
- tests have not timeouts, commands have: if something goes wrong, you discover it as soon as possible, without waiting for the while test timeout
- DOM-related errors: when interacting with an element is not possible, Cypress tells you the reason why
- automatic screenshot and videos: in case of failures, watching a video is easier than reading the log

Examples:

- pausing a test programmatically
- time travelling in action
- DOM-related errors with a fixed div all over the contents
- checking failure video

#### 5 - UI Integration Tests

E2E Testing is not so important due to its complexity. With full network stubbing, testing only the front-end application is easy and profitable.

Topics:

- full network stubbing
- network error simulation

Examples:

- stubbing the wrong request: how a malformed stub could be detected with Cypress
- stubbing the right request
- happy path testing
- edge case testing

#### Productivity (without a dedicated branch)

Cypress can be used not only as a development tool but as even as the main development browser.

Topics:

- automating manual interactions while developing
- debugging with Chrome devtools
- installing the React and Redux devtools

#### Bonus point (without a dedicated branch)

To leverage Cypress' full potential and have stable and useful tests there are a lot of UI Testing best practices.

Topics:

- retrieving elements by their contents: consuming the app the same way the user does is really important in order to have user-centered tests
- AJAX request and response assertions: asserting about AJAX requests alleviates test failure debugging
- clock management: long duration tasks could be fastly tested by controlling browser clock
- running E2E tests just for the happy path: running a limited number of E2E tests saves you a lot of time

Examples:

- full UI Integration tests
- full E2E tests

---

## About this repository

- I bootstrapped this project with [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)
- it contains a super-simple authentication form
- it contains a fake server with artificial delays to simulate E2E testing slowness
- it runs the tests in Travis too to show a complete UI Testing project
- all the code is well commented, with a lot of links to the slide explanations
- I wrote the front-end app with a outside-in approach writing the acceptance test at the beginning.
  I have not tested it manually at all!

## How to play with it

There are four main commands:

- `npm run start`: starts the (super simple) front-end app and the (fake) back-end app
- `npm run cy:open`: opens the Cypress UI
- `npm test`: launches both the front-end and the back-end apps, and runs cypress in the non-visual
  mode. Remember killing the manually launched apps since it uses the same ports

## How to read it

- launch the front-end app and take a look at the `src/App.js` file
- launch both the back-end app and Cypress
- launch the `authentication.integration.test.js` in Cypress and watch it running
- open the `cypress/integration/authentication.integration.test.js` and explore it
- then, move to the `cypress/integration/authentication.e2e.test.js`
- in the end: run the `npm test` command

## UI Testing Best Practices book

Do not forge to add a star to my (work in progress) [UI Testing Best
Practices](https://github.com/NoriSte/ui-testing-best-practices) book on GitHub 😊
