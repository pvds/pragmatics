# Stylelint Config Semantic Order

[![NPM version][version-img]][npm-url]
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/pvds/stylelint-config-semantic-order/Node.js%20Package)
[![License][license-img]][npm-url]

Opinionated stylelint config order semantically grouping related css properties.

## Installation

**NPM**

```sh
npm i -D stylelint-config-semantic-order
```

**Yarn**

```sh
yarn add -D stylelint-config-semantic-order
```

## Usage

Add `stylelint-config-semantic-order` your Stylelint config [extends](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md#extends):

```json
{
  "extends": "stylelint-config-semantic-order"
}
```

> Learn more about [Stylelint](https://stylelint.io/).

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

The following sources have been used as inspiration for this config:

- [Idiomatic CSS]
- [ITCSS]
- [Code Guide by @mdo](https://codeguide.co/#css)
- [High-level advice and guidelines for writing sane, manageable, scalable CSS](https://cssguidelin.es/)
- ["Outside-in" method (logical ordering)](https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685)
- [CSS rule order @9elements](https://9elements.com/css-rule-order/)
- [Google HTML/CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)
- [CSS-Tricks - CSS Style Guides](https://css-tricks.com/css-style-guides/)

[idiomatic css]: https://github.com/necolas/idiomatic-css
[itcss]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/
[npm-url]: https://www.npmjs.com/package/stylelint-config-semantic-order
[version-img]: https://img.shields.io/npm/v/stylelint-config-semantic-order.svg?style=flat-square
[license-img]: https://img.shields.io/npm/l/stylelint-config-semantic-order.svg?style=flat-square
