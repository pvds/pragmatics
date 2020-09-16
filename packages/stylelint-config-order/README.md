# Stylelint Config Pragmatic Order

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

Pragmatic stylelint config enforcing an understandable and consistent code order.

## Summary

- [Getting Started](#getting-started)
- [Testing](#testing)
- [Vision](#vision)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting started

### Installation

> `@pragmatics/stylelint-config-order` does not install Stylelint for you.

Install `stylelint` and this config as part of your `devDependencies`.

**NPM**

```sh
npm i stylelint @pragmatics/stylelint-config-order -D
```

**Yarn**

```sh
yarn add stylelint @pragmatics/stylelint-config-order -D
```

### Usage

#### Stylelint config

Add `@pragmatics/stylelint-config-order` to your [Stylelint configuration file](https://stylelint.io/user-guide/configure):

JSON (`.stylelintrc`):

```json
{
  "extends": ["@pragmatics/stylelint-config-order"]
}
```

YAML (`.stylelintrc.yml`)

```yaml
extends:
  - @pragmatics/stylelint-config-order
```

> Use [@pragmatics/stylelint-config](https://www.npmjs.com/package/@pragmatics/stylelint-config) to apply pragmatic code style to the full extend (`@pragmatics/stylelint-config-order` is already a part
> of that config).

Learn more about [Stylelint](https://stylelint.io/).

#### Automation

We recommend configuring your editor to automatically format your code by on save.

You can use Stylelint with a pre-commit tool. This can re-format your files that are marked as “staged” via git add before you commit.

_Make sure Stylelint is installed and in your devDependencies before you proceed_

```
npx mrm lint-staged
```

This will install [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged), then add a configuration to the project’s package.json that will automatically format supported files in a pre-commit
hook.

## Testing

We use [Jest](https://jestjs.io/) for testing, use `npm test` to run all tests.

### System test

By running this stylelint config in `test/system.test.js` on an unformatted `fixture.scss` we test whether it matches our `expected.scss` file.
We are planning to:

- [use Jest snapshots for system tests like Stylelint does](https://github.com/stylelint/stylelint/tree/master/system-tests)
- add more common use cases.

## Vision

Inspired by [pragmatism](https://en.wikipedia.org/wiki/Pragmatism) and [pracmatics](https://en.wikipedia.org/wiki/Pragmatics), the aim of this stylelint config is:

- to format `css`/`scss` to be understandable, scannable and consistent
- to let developers focus on writing code, instead of adhering to a styleguide

### Rationale

Properties with the largest impact (scope and/or importance) are put first.
Using concepts from both [Idiomatic CSS] and [ITCSS] we setup our config by:

1. **Ordering on impact**\
   Rules with a larger scope or more effect on the layout and box size have more impact on the UI.
   Seeing rules with more impact first increases understanding.
2. **Grouping by relationship**\
   Grouping all properties related to `typography` and `theming` makes them easier to find.

#### Groups

Related property declarations are grouped in the following order:

1. **Specials**
1. **Positioning**
1. **Display**
1. **Box**
1. **Box model**
1. **Table**
1. **Typography**
1. **Theming**
1. **Accessibility & Interactions**
1. **SVG presentation**
1. **Transition & animation**

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

See the list of [contributors](https://github.com/pvds/stylelint-config-order/contributors)
who participated in this project.

## License

This project is licensed under the [ISC License](LICENSE.md).

## Acknowledgements

The name is inspired by [pragmatism](https://en.wikipedia.org/wiki/Pragmatism) and [pracmatics](https://en.wikipedia.org/wiki/Pragmatics).

The following guidelines, methodologies and architectures have been used as inspiration for this config:

### Ordering

- [CSSComb](https://github.com/csscomb/csscomb.js)
- [CSS rule order @9elements](https://9elements.com/css-rule-order/)
- ["Outside-in" method (logical ordering)](https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685)
- [Harry Potter and the order of CSS](https://dev.to/thekashey/happy-potter-and-the-order-of-css-5ec)
- [Concentric CSS](https://github.com/brandon-rhodes/Concentric-CSS/blob/master/style3.css)

### General

- [ITCSS]
- [Idiomatic CSS]
- [Code Guide by @mdo](https://codeguide.co/#css)
- [CSS guidelines](https://cssguidelin.es/)
- [Code Guide by @mdo](https://codeguide.co/#css)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)
- [Google HTML/CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [CSS-Tricks - CSS Style Guides](https://css-tricks.com/css-style-guides/)

[idiomatic css]: https://github.com/necolas/idiomatic-css
[itcss]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
[version-shield]: https://img.shields.io/npm/v/@pragmatics/stylelint-config-order.svg
[version-url]: https://www.npmjs.com/package/@pragmatics/stylelint-config-order
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/stylelint-config-order/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/@pragmatics/stylelint-config-order.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=@pragmatics/stylelint-config-order
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/stylelint-config-order/release.svg
[release-status-url]: https://github.com/pvds/stylelint-config-order/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/stylelint-config-order.svg
[dependencies-url]: https://github.com/pvds/stylelint-config-order
[issues-shield]: https://img.shields.io/github/issues/pvds/stylelint-config-order.svg
[issues-url]: https://github.com/pvds/stylelint-config-order/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/stylelint-config-order.svg
[coverage-url]: https://codecov.io/gh/pvds/stylelint-config-order
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_@pragmatics/stylelint-config-order.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_@pragmatics/stylelint-config-order
