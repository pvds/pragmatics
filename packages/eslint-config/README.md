# ESlint config pragmatic

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

Pragmatic stylelint config enforcing an understandable and consistent code style.

## Summary

- [Getting Started](#getting-started)
- [Testing](#testing)
- [Vision](#vision)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgements)

## Getting started

### Installation

The default config uses Prettier and Jest, when using the default configuration install:

```sh
yarn add eslint @pragmatics/eslint-config prettier jest eslint-plugin-jest -D
```

#### Custom configuration

When using a custom configuration install:

```sh
yarn add eslint @pragmatics/eslint-config -D
```

Depending on the [configutation](#usage) you choose, might need to install [additional dependencies](#dependencies).

## Usage

To consume and extend a config in ESLint just add the extends attribute to your `.eslintrc`.
For more details about how shareable configs work, see the [ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

#### Default configuration

```yaml
---
'extends':
  - '@pragmatics'
```

### All configurations

Default configuration uses `@pragmatics/config/es6-browser-recommended`

- `@pragmatics` - ES6 + browser + prettier + test

You can also use one or more custom configurations:

- `@pragmatics/config/browser` - browser
- `@pragmatics/config/node` - node
- `@pragmatics/config/test` - test
- `@pragmatics/config/es6` - ES6
- `@pragmatics/config/es6-browser` - ES6 + browser
- `@pragmatics/config/es6-browser-recommended` - ES6 + browser + prettier + test
- `@pragmatics/config/es6-node` - ES6 + node
- `@pragmatics/config/es6-browser-recommended` - ES6 + node + prettier + test

#### Dependencies

Depending on the [configutation](#usage) you choose, might need to install additional dependencies.

##### Test configuration

When using a configuration which uses **test** install the following extra dependencies:

```sh
yarn jest eslint-plugin-jest -D
```

##### Recommended configuration

When using a recommended configuration install the following extra dependency:

```sh
yarn prettier -D
```

### Automation

We recommend configuring your editor to automatically format your code by on save.

You can use Prettier and Eslint with a pre-commit tool. This can re-format your files that are marked as “staged” via git add before you commit.

_Make sure Prettier and Stylelint are installed and in your devDependencies before you proceed_

```
npx mrm lint-staged
```

This will install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), then add a configuration to the project’s package.json that will automatically format supported files in a pre-commit
hook.

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": "eslint --fix",
    "*": "prettier --write --ignore-unknown"
  }
}
```

## Testing

We use [Jest](https://jestjs.io/) for testing, run `npm test` to run all tests.

## Vision

## Built With

- [Webstorm](https://www.jetbrains.com/webstorm/) - for development
- [Github](https://github.com) - for versioning and deployment
- [Jest](https://jestjs.io/) - for testing
- [Contributor Covenant](https://www.contributor-covenant.org/) - for the Code of Conduct
- [Creative Commons](https://creativecommons.org/) - to choose the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our the process for submitting issues and pull requests to us.
This repository has a [code of conduct](CODE_OF_CONDUCT.md), we will remove things that do not respect it.

## Versioning

We use [SemVer](http://semver.org/) for versioning.
For the available versions, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

See the list of [contributors](https://github.com/pvds/eslint-config/contributors)
who participated in this project.

## License

This project is licensed under the [ISC License](LICENSE.md).

## Acknowledgements

The following sources have been used as inspiration for this package:

- [eslint.org](https://eslint.org/)
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- [eslint-config-formidable](https://github.com/FormidableLabs/eslint-config-formidable)

[version-shield]: https://img.shields.io/npm/v/@pragmatics/eslint-config.svg
[version-url]: https://www.npmjs.com/package/@pragmatics/eslint-config
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/eslint-config/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/minzip/@pragmatics/eslint-config.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=@pragmatics/eslint-config
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/eslint-config/release.svg
[release-status-url]: https://github.com/pvds/eslint-config/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/eslint-config.svg
[dependencies-url]: https://github.com/pvds/eslint-config
[issues-shield]: https://img.shields.io/github/issues/pvds/eslint-config.svg
[issues-url]: https://github.com/pvds/eslint-config/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/eslint-config.svg
[coverage-url]: https://codecov.io/gh/pvds/eslint-config
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_eslint-config.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_eslint-config
