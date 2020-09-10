# Stylelint Config Pragmatic Order

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

Opinionated stylelint config pragmatically ordering related css properties.

## Installation

You need to have `stylelint` and this config as part of your `devDependencies`.

**NPM**

```sh
npm i stylelint stylelint-config-pragmatic-order -D
```

**Yarn**

```sh
yarn add stylelint stylelint-config-pragmatic-order -D
```

## Usage

Add `stylelint-config-pragmatic-order` your Stylelint config [extends](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends):

```json
{
  "extends": ["stylelint-config-pragmatic-order"]
}
```

> Use [stylelint-config-pragmatic](https://www.npmjs.com/package/stylelint-config-pragmatic) to apply pragmatic code style to the full extend (`stylelint-config-pragmatic-order` is already a part
> of this config).

Learn more about [Stylelint](https://stylelint.io/).

## Rationale

We aim for understandable, scannable and consistent code without changing the specificity.
A logical ordering of rules and declarations allows you to “scan” quickly.

### Properties

Properties with the largest impact (scope and/or importance) are put first.
Using concepts from both [Idiomatic CSS] and [ITCSS] we setup our config by:

1. **Ordering on impact**\
   Rules with a larger scope or more effect on the layout and box size have more impact on the UI.
   Seeing rules with more impact first increases understanding.
2. **Grouping by relationship**\
   Grouping all properties related to `typography` and `theming` makes them easier to find.

### Groups

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

## Sources

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
[version-shield]: https://img.shields.io/npm/v/stylelint-config-pragmatic-order.svg
[version-url]: https://www.npmjs.com/package/stylelint-config-pragmatic-order
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/stylelint-config-pragmatic-order/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/stylelint-config-pragmatic-order.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=stylelint-config-pragmatic-order
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/stylelint-config-pragmatic-order/release.svg
[release-status-url]: https://github.com/pvds/stylelint-config-pragmatic-order/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/stylelint-config-pragmatic-order.svg
[dependencies-url]: https://github.com/pvds/stylelint-config-pragmatic-order
[issues-shield]: https://img.shields.io/github/issues/pvds/stylelint-config-pragmatic-order.svg
[issues-url]: https://github.com/pvds/stylelint-config-pragmatic-order/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/stylelint-config-pragmatic-order.svg
[coverage-url]: https://codecov.io/gh/pvds/stylelint-config-pragmatic-order
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_stylelint-config-pragmatic-order.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_stylelint-config-pragmatic-order
