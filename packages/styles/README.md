# @pragmatics/styles

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Quality Gate Status][quality-shield]][quality-url]

> Pragmatics configurable sass library.
> Zero css output by default

## Summary

- [Getting Started](#getting-started)
- [Testing](#testing)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgements)

## Getting started

### Installation

```sh
yarn add @pragmatics/styles
```

### Usage

Import the library

```scss
@import '@pragmatics/styles';
```

### Configure

Override the default variables according to your needs.

> declare variables in your project before importing `@pragmatics/styles`

##### Override default variables

Override breakpoints, colors, z-index and many more variables.
Refer to [\_global.scss](1-settings/_global.scss) for an overview off all `!default` variables.

#### Configuration map

By default `@pragmatics/styles` only outputs `sass` which does not render `css` (functions/mixins/variables).
Copy the default config below and tweak according to your needs.

```scss
// Default config
$config: (
  debug: false,
  output: (
    all: false,
    custom: $config-output-custom,
  ),
);
```

#### Cherry pick

Cherry pick partials by merging specific options using `$config-output-custom: merge-map($config-output-custom, $your-map)`

For example:

```scss
$my-config-output-custom: (
  utilities: (
    spacing: true,
  ),
);

$config-output-custom: map-merge($config-output-custom, $my-config-output-custom);
```

##### Opt-in

Use a specific partial by setting it's option value to `true`.

##### Opt-out

Set `output:(all:false)` and remove a specific partial by setting it's option value to `false`.

##### Output options

```scss
$config-output-custom: (
  generic: (
    normalize: null,
  ),
  elements: (
    animation: null,
    base: null,
    code: null,
    focus: null,
    interactive: null,
    list: null,
    table: null,
    typography: null,
  ),
  helpers: (
    focus: null,
    link: null,
    list: null,
    plain-text: null,
    screen-reader: null,
    typography: null,
  ),
  objects: (
    container: null,
  ),
  components: (
    offcanvas: null,
    snackbar: null,
  ),
  utilities: (
    spacing: null,
  ),
);
```

## Testing

We use [Jest](https://jestjs.io/) and [Sass](https://github.com/sass/sass) for testing, run `npm test` to run all tests.

## Built With

- [Sass](https://sass-lang.com/)
- [Webstorm](https://www.jetbrains.com/webstorm/) - for development
- [Github](https://github.com) - for versioning and deployment
- [Jest](https://jestjs.io/) - for testing
- [Contributor Covenant](https://www.contributor-covenant.org/) - for the Code of Conduct
- [Creative Commons](https://creativecommons.org/) - to choose the license

## Contributing

Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our the process for submitting issues and pull requests to us.
This repository has a [code of conduct](docs/CODE_OF_CONDUCT.md), we will remove things that do not respect it.

## Versioning

We use [SemVer](http://semver.org/) for versioning.
For the available versions, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## Authors

See the list of [contributors](https://github.com/pvds/styles/contributors)
who participated in this project.

## License

This project is licensed under the [ISC License](docs/LICENSE.md).

## Acknowledgements

The following guidelines, methodologies and architectures have been used as inspiration for this package:

- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
- [Idiomatic CSS](https://github.com/necolas/idiomatic-css)
- [CSS guidelines](https://cssguidelin.es/)
- [Code Guide by @mdo](https://codeguide.co/#css)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css#css)
- [Google HTML/CSS Style guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Formatting_Rules)
- [CSS-Tricks - CSS Style Guides](https://css-tricks.com/css-style-guides/)

### Articles

- [Hugo Giraudel Personal Awesome Sass List](https://github.com/HugoGiraudel/awesome-sass) - Records of Hugo Giraudel's works on Sass.
- [Cubic Bézier Representation in Sass](http://thesassway.com/advanced/cubic-bezier-representation-in-sass)
- [Faster Sass builds with Webpack](http://eng.localytics.com/faster-sass-builds-with-webpack/)
- [Transitioning to SCSS at Scale](https://codeascraft.com/2015/02/02/transitioning-to-scss-at-scale/)
- [Sass Maps to UI Components](https://blog.prototypr.io/sass-maps-to-ui-components-f14e1f34412e#.9zt0s0rxt)
- [Inverse trigonometric functions with Sass](http://thesassway.com/advanced/inverse-trigonometric-functions-with-sass)
- [Stop Arguing So Much with Your Mixins](http://sassbreak.com/stop-arguing-with-your-mixins)
- [Styling React Components in Sass](http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/)
- [A Sass !default use case](https://robots.thoughtbot.com/sass-default)
- [Aesthetic Sass 3: Typography and Vertical Rhythm](https://scotch.io/tutorials/aesthetic-sass-3-typography-and-vertical-rhythm)
- [A Tale of CSS and Sass Precision](https://www.sitepoint.com/a-tale-of-css-and-sass-precision/)
- [Build a Style Guide Straight from Sass](https://css-tricks.com/build-style-guide-straight-sass/)
- [Advanced SCSS, or, 16 cool things you may not have known your stylesheets could do](https://gist.github.com/jareware/4738651)
- [The 80-20 Approach to Sustainable SCSS](https://zendev.com/2018/05/30/the-80-20-approach-to-sustainable-scss.html)
- [Advanced Use of Sass Maps](https://itnext.io/advanced-use-of-sass-maps-bd5a47ca0d1a)

[version-shield]: https://img.shields.io/npm/v/@pragmatics/styles.svg
[version-url]: https://www.npmjs.com/package/@pragmatics/styles
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/styles/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/@pragmatics/styles.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=@pragmatics/styles
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/styles/release.svg
[release-status-url]: https://github.com/pvds/styles/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/styles.svg
[dependencies-url]: https://github.com/pvds/styles
[issues-shield]: https://img.shields.io/github/issues/pvds/styles.svg
[issues-url]: https://github.com/pvds/styles/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/styles.svg
[coverage-url]: https://codecov.io/gh/pvds/styles
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_styles.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_styles
