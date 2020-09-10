# Stylelint Config Pragmatic

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

Opinionated stylelint config providing readable pragmatic code style.

## Installation

You need to have `stylelint` and this config as part of your `devDependencies`.

**NPM**

```sh
npm i stylelint stylelint-config-pragmatic -D
```

**Yarn**

```sh
yarn add stylelint stylelint-config-pragmatic -D
```

## Usage

Add `stylelint-config-pragmatic` your Stylelint config [extends](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends):

```json
{
  "extends": ["stylelint-config-pragmatic"]
}
```

### Customization

Being opinionated it's best to limit the amount of rules you use yourself.
The following rule extensions are already part of this module:

```json
{
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-pragmatic-order",
    "stylelint-prettier/recommended"
  ]
}
```

A number of rules are defined to make Stylelint play nicely with Scss and Prettier.
We recommend you **add rules which to not manipulate the order or code format** to get maximum benefit of this config.

> Use [stylelint-config-pragmatic-order](https://www.npmjs.com/package/stylelint-config-pragmatic-order) if you only want the ordering rules.

Learn more about [Stylelint](https://stylelint.io/).

## Rationale

We aim for understandable, scannable and consistent code without changing the specificity.

## Sources

The following guidelines, methodologies and architectures have been used as inspiration for this config:

- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS guidelines](https://cssguidelin.es/)
- [Code Guide by @mdo](https://codeguide.co/#css)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)
- [Google HTML/CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [CSS-Tricks - CSS Style Guides](https://css-tricks.com/css-style-guides/)

[version-shield]: https://img.shields.io/npm/v/stylelint-config-pragmatic.svg
[version-url]: https://www.npmjs.com/package/stylelint-config-pragmatic
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/stylelint-config-pragmatic/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/stylelint-config-pragmatic.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=stylelint-config-pragmatic
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/stylelint-config-pragmatic/release.svg
[release-status-url]: https://github.com/pvds/stylelint-config-pragmatic/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/stylelint-config-pragmatic.svg
[dependencies-url]: https://github.com/pvds/stylelint-config-pragmatic
[issues-shield]: https://img.shields.io/github/issues/pvds/stylelint-config-pragmatic.svg
[issues-url]: https://github.com/pvds/stylelint-config-pragmatic/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/stylelint-config-pragmatic.svg
[coverage-url]: https://codecov.io/gh/pvds/stylelint-config-pragmatic
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_stylelint-config-pragmatic.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_stylelint-config-pragmatic
