Front-end Testing on Steroids

TODO:

- replace Working SOftware references
- prepare this readme
- prepare the tests
- check that renovate and travis are running
- steps description

---

## Talk walkthrough:

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

---

---

---

[![Build Status](https://travis-ci.com/NoriSte/frontend-testing-on-steroids.svg?branch=master)](https://travis-ci.com/NoriSte/frontend-testing-on-steroids)
[![Build
Status](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/frontend-testing-on-steroids)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

- [Goal of this repository](#Goal-of-this-repository)
- [About this repository](#About-this-repository)
- [How to play with it](#How-to-play-with-it)
- [How to read it](#How-to-read-it)
- [UI Testing Best Practices book](#UI-Testing-Best-Practices-book)
- [Notes for the talk](#Notes-for-the-talk)

<br />

You can find the slides of the talk [here](https://slides.com/noriste/working-software-2019-mastering-ui-testing).

## Goal of this repository

I made this repository to follow up with the best practices I highlighted during my talk at the
[Working Software conference](https://www.agilemovement.it/workingsoftware/).

## About this repository

- I bootstrapped this project with [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started)
- it contains a super-simple authentication form
- it contains a fake server with artificial delays to simulate E2E testing slowness
- it runs the tests in Travis too to show a complete UI Testing project
- all the code is well commented, with a lot of links to the slide explanations
- I wrote the front-end app with a outside-in approach writing the acceptance test at the beginning.
  I have not tested it manually at all! Remember to use your [testing tool as your primary development tool](https://slides.com/noriste/working-software-2019-mastering-ui-testing#testing-tool-as-development-tool)
- the `talk` branch is helpful only for the day of the conference, do not consider it

## How to play with it

There are four main commands:

- `npm run start`: starts the (super simple) front-end app
- `npm run start:server`: starts the (fake) back-end app
- `npm run cy:open`: opens the Cypress UI
- `npm test`: launches both the front-end and the back-end apps, and runs cypress in the non-visual
  mode. Remember killing the manually launched apps since it uses the same ports

Please note: if you have the [Autolaunch
extension](https://marketplace.visualstudio.com/items?itemName=philfontaine.autolaunch) for VS Code,
it proposes you to launch these scripts automatically.

## How to read it

- read the [slides of the talk](https://slides.com/noriste/working-software-2019-mastering-ui-testing)
- launch the front-end app and take a look at the `src/App.js` file
- launch both the back-end app and Cypress
- launch the `authentication.integration.test.js` in Cypress and watch it running
- open the `cypress/integration/authentication.integration.test.js` and explore it
- then, move to the `cypress/integration/authentication.e2e.test.js`
- in the end: run the `npm test` command

## UI Testing Best Practices book

Do not forge to add a star to my (work in progress) [UI Testing Best
Practices](https://github.com/NoriSte/ui-testing-best-practices) book on GitHub 😊

## Notes for the talk

- checkout the `talk` branch
- launch all the scripts except for `npx cypress open`
- you will launch `npx cypress open` as soon as you start showing the code at the talk
- show cypress and VSCode side-by-side on the same screen
- prepare the browser opened on the slides
- if you need, take a look at the `transcription.md` file on the `talk` branch
- take a look at the ["How to Talk to Developers"](https://www.youtube.com/watch?v=l9JXH7JPjR4) talk by Ben Orenstein
