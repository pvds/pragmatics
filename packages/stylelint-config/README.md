# Stylelint Config Pragmatic

[![NPM version][version-img]][npm-url]
[![Maintenance](https://img.shields.io/maintenance/yes/2020?color=blue)](https://github.com/pvds/stylelint-config-pragmatic/graphs/commit-activity)
![Package size](https://img.shields.io/bundlephobia/min/stylelint-config-pragmatic?label=size) \
![Status](https://img.shields.io/github/workflow/status/pvds/stylelint-config-pragmatic/release)
![Dependencies](https://img.shields.io/david/pvds/stylelint-config-pragmatic)
![Issues open](https://img.shields.io/github/issues/pvds/stylelint-config-pragmatic)
[![Code coverage](https://img.shields.io/codecov/c/github/pvds/stylelint-config-pragmatic)](https://codecov.io/gh/pvds/stylelint-config-pragmatic)
[![Quality Gate Status](https://img.shields.io/sonar/quality_gate/pvds_stylelint-config-pragmatic?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=pvds_stylelint-config-pragmatic)

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

```js
extends: [
  'stylelint-config-standard',
  'stylelint-config-pragmatic-order',
  'stylelint-prettier/recommended',
]
```

A number of rules are defined to make Stylelint play nicely with Scss and Prettier.
We recommend you **add rules which to not manipulate the order or code format** to get maximum benefit of this config.

> Use [stylelint-config-pragmatic-order](https://www.npmjs.com/package/stylelint-config-pragmatic-order) if you only want the ordering rules.

Learn more about [Stylelint](https://stylelint.io/).

## Rationale

We aim for understandable, scannable and consistent code without changing the specificity.

## Sources

The following sources have been used as inspiration for this config:

- [Idiomatic CSS]
- [ITCSS]
- [Code Guide by @mdo](https://codeguide.co/#css)
- [High-level advice and guidelines for writing sane, manageable, scalable CSS](https://cssguidelin.es/)
- [Google HTML/CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)
- [CSS-Tricks - CSS Style Guides](https://css-tricks.com/css-style-guides/)

[idiomatic css]: https://github.com/necolas/idiomatic-css
[itcss]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
[npm-url]: https://www.npmjs.com/package/stylelint-config-pragmatic
[version-img]: https://img.shields.io/npm/v/stylelint-config-pragmatic.svg?style=flat-square
