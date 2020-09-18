# Pragmatics Eleventy boilerplate

[![Release version][release-version-shield]][release-version-url]
[![Release status][deploy-status-shield]][deploy-status-url]
[![Quality Gate Status][quality-shield]][quality-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]

Pragmatics boilerplate for 11ty projects.

[![Demo Site][demo-shield]][demo-url] [![Deploy to Netlify][deploy-netlify-shield]][deploy-netlify-url]

## Summary

- [Getting Started](#getting-started)
- [Features](#features)
- [Testing](#testing)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgements)

## Getting started

### Installation

To install the necessary packages, run this command in the root folder of the site:

```sh
yarn
```

### Usage

- Run `yarn start` for a development server and live reloading
- Run `yarn build` to generate a production build

## Features

- HTML Minification
- CSS Pipeline (Sass, CleanCSS, Critical CSS)
- JS Bundling (Webpack)
- SVG Icon Sprite Generation
- No external builds, everything runs through 11ty

## Testing

We use [Jest](https://jestjs.io/) for testing, run `npm test` to run all tests.

## Built With

- [Eleventy](https://11ty.dev) - for static site generation
- [Webstorm](https://www.jetbrains.com/webstorm) - for development
- [Github](https://github.com) - for versioning and deployment
- [Jest](https://jestjs.io/) - for testing
- [Contributor Covenant](https://www.contributor-covenant.org/) - for the Code of Conduct
- [Creative Commons](https://creativecommons.org/) - to choose the license

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our the process for submitting issues and pull requests to us.
This repository has a [code of conduct](CODE_OF_CONDUCT.md), we will remove things that do not respect it.

## Versioning

We use [SemVer](http://semver.org/) for versioning.
For the available versions, see the [tags on this repository](https://github.com/pvds/eleventy-boilerplate/tags).

## Authors

See the list of [contributors](https://github.com/pvds/package-boilerplate/contributors)
who participated in this project.

## License

This project is licensed under the [ISC License](LICENSE.md).

## Acknowledgements

The following guidelines, methodologies and architectures have been used as inspiration for this package:

[list of acknowledgement links]

[release-version-shield]: https://img.shields.io/github/v/release/pvds/eleventy-boilerplate.svg
[release-version-url]: https://github.com/pvds/eleventy-boilerplate
[deploy-status-shield]: https://img.shields.io/netlify/ebe17a53-61ef-4e3f-bd50-baa4f503ad3a.svg?label=deploy
[deploy-status-url]: https://app.netlify.com/sites/pragmatics/deploys
[dependencies-shield]: https://img.shields.io/librariesio/github/pvds/eleventy-boilerplate.svg
[dependencies-url]: https://github.com/pvds/eleventy-boilerplate
[issues-shield]: https://img.shields.io/github/issues/pvds/eleventy-boilerplate.svg
[issues-url]: https://github.com/pvds/eleventy-boilerplate/issues
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_eleventy-boilerplate.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_eleventy-boilerplate
[deploy-netlify-shield]: https://img.shields.io/badge/Deploy%20to%20Netlify-blue?style=for-the-badge&logo=netlify&logoColor=white
[deploy-netlify-url]: https://app.netlify.com/start/deploy?repository=https://github.com/pvds/eleventy-boilerplate
[demo-shield]: https://img.shields.io/badge/Demo%20site-blueviolet?style=for-the-badge&logo=netlify&logoColor=white
[demo-url]: https://app.netlify.com/sites/pragmatics
