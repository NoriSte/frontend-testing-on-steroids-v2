# Front-end Testing on Steroids (V2)

[![Build Status](https://travis-ci.com/NoriSte/frontend-testing-on-steroids-v2.svg?branch=master)](https://travis-ci.com/NoriSte/frontend-testing-on-steroids-v2)
[![Build
Status](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/frontend-testing-on-steroids-v2)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

The [first version of this talk](https://github.com/NoriSte/frontend-testing-on-steroids) was about the main reasons that make UI Testing hard, this second part is more about how to leverage Cypress to improve front-end development productivity.

Please note: this is the spoken version of my ["Front-end productivity boost: Cypress as your main development browser"](https://dev.to/noriste/front-end-productivity-boost-cypress-as-your-main-development-browser-5cdk) article.

## Talk walkthrough

- Replacing E2E tests with UI Integration tests
- Controlling the clock to test long waitings in a while
- Testing corner cases by simulating network requests failure
- Leveraging Chrome and React DevTools in UI tests
- Using Cypress as the main development browser

During the talk, some interesting Cypress' features will be shown:
- The Cypress UI
- The amazing Test Runner
- Actions are asynchronous by default
- Elements retrieval by contents
- The test and app use the same *console.log*
- Time-travelling the test steps and pausing the test

Take a look at the complete [authentication.e2e.test](./cypress/integration/authentication/authentication.e2e.test.js) test and the [authentication.integration.test](./cypress/integration/authentication/authentication.integration.test.js) one. They contains everything shown in the talk and a lot of comments.

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
