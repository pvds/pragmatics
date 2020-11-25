# Stylelint Config

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

Stylelint config enforcing an understandable and consistent code style.

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

Install `prettier`, `stylelint` and this config as part of your `devDependencies`.

```sh
yarn add prettier stylelint @pragmatics/stylelint-config -D
```

### Usage

#### Stylelint config

Add `@pragmatics/stylelint-config` to your [Stylelint configuration file](https://stylelint.io/user-guide/configure):

```yaml
extends:
  - '@pragmatics/stylelint-config'
```

#### Extend with Prettier config

In order to [play nicely with Prettier](https://prettier.io/docs/en/integrating-with-linters.html) we disable all formatting related Stylelint rules with [stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier).

Add a [prettier configuration file](https://prettier.io/docs/en/configuration.html) with your formatting preferences, for example:

```yaml
# .prettier.yml
singleQuote: true
tabWidth: 2
printWidth: 100
```

#### Automation

We recommend configuring your editor to automatically format your code by on save.

You can use Prettier and Stylelint with a pre-commit tool. This can re-format your files that are marked as “staged” via git add before you commit.

_Make sure Prettier and Stylelint are installed and in your devDependencies before you proceed_

```
npx mrm lint-staged
```

This will install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), then add a configuration to the project’s package.json that will automatically format supported files in a pre-commit
hook.

#### Customization

Being opinionated it's best to limit the amount of rules you use yourself.

**The following rule extensions are already part of this module:**

```yaml
extends:
  - stylelint-config-standard
  - '@pragmatics/stylelint-config-order'
  - stylelint-prettier/recommended
```

A number of rules are defined to make Stylelint play nicely with Scss and Prettier.
We recommend you **add rules which do not manipulate the order or code format** to get maximum benefit of this config.

> Use [@pragmatics/stylelint-config-order](https://www.npmjs.com/package/@pragmatics/stylelint-config-order) if you only want the ordering rules.

Learn more about [Stylelint](https://stylelint.io/).

## Testing

We use [Jest](https://jestjs.io/) for testing, run `npm test` to run all tests.

### System test

By running this stylelint config in `tests/system/system.test.js` on an unformatted `fixture.scss` we test whether it matches our `expected.scss` file.
We are planning to:

- [use Jest snapshots for system tests like Stylelint does](https://github.com/stylelint/stylelint/tree/master/system-tests)
- add more common use cases.

## Vision

Inspired by [pragmatism](https://en.wikipedia.org/wiki/Pragmatism) and [pracmatics](https://en.wikipedia.org/wiki/Pragmatics), the aim of this stylelint config is:

- to format `css`/`scss` to be understandable, scannable and consistent
- to let developers focus on writing code, instead of adhering to a styleguide
- to simplify [stylelint configuration](https://stylelint.io/user-guide/configure)
- to avoid changing [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

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

See the list of [contributors](https://github.com/pvds/pragmatics/contributors)
who participated in this project.

## License

This project is licensed under the [ISC License](LICENSE.md).

## Acknowledgements

The name was inspired by [pragmatism](https://en.wikipedia.org/wiki/Pragmatism) and [pracmatics](https://en.wikipedia.org/wiki/Pragmatics).

The following guidelines, methodologies and architectures have been used as inspiration for this config:

- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS guidelines](https://cssguidelin.es/)
- [Code Guide by @mdo](https://codeguide.co/#css)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)
- [Google HTML/CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [CSS-Tricks - CSS Style Guides](https://css-tricks.com/css-style-guides/)

[version-shield]: https://img.shields.io/npm/v/@pragmatics/stylelint-config.svg
[version-url]: https://www.npmjs.com/package/@pragmatics/stylelint-config
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/pragmatics/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/@pragmatics/stylelint-config.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=@pragmatics/stylelint-config
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/pragmatics/release.svg
[release-status-url]: https://github.com/pvds/pragmatics/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/pragmatics.svg
[dependencies-url]: https://github.com/pvds/pragmatics
[issues-shield]: https://img.shields.io/github/issues/pvds/pragmatics.svg
[issues-url]: https://github.com/pvds/pragmatics/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/pragmatics.svg
[coverage-url]: https://codecov.io/gh/pvds/pragmatics
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_pragmatics.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_pragmatics
