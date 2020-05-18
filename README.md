![Node.js CI](https://github.com/davezen1/js-library-starter/workflows/Node.js%20CI/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/davezen1/js-library-starter/badge.svg?branch=master)](https://coveralls.io/github/davezen1/js-library-starter?branch=master)

# JS Starter Library

Javascript Starter Library with common tasks setup for testing, linting, formatting, building, and minifying. This library is meant as a starter for building a reusable javascript library for use in the browser. The principles like testing and linting will remain but libraries may change over time.

##

## Ingredients

- Continuous Integration with GitHub Actions
- build using [Rollup.js](https://rollupjs.org/guide/en/)
- [Babel](https://babeljs.io/)
- lint using [eslint](https://eslint.org/)
- code formating using [prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky) for precommit
- Lint commit messages - [CommitLint](https://commitlint.js.org/#/)
- tests using [jest](https://jestjs.io/)
- code coverage with jest
- [Coveralls](https://coveralls.io/) for reporting code coverage from Jest

Notes:

If jest hangs:
`brew reinstall watchman`

## Use

Clone contents of repo and adjust.

## Roadmap

Tentative to do list

- Add npm publishing automation with GitHub Actions
- Typescript support
- Accessibility support through jest-axe
