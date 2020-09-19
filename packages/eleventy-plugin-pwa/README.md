# @pragmatics/eleventy-plugin-pwa

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

> An [Eleventy](https://11ty.io) plugin to generate service worker.
> Using Google Workbox to generate service-worker.js based on your `dir.output`.

Since (at this moment) `eleventy` doesn't have any API to do things after build process, this plugin is using monkey patch method to wrap into the `finish` function in order to run workbox properly.

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

```sh
yarn add @pragmatics/eleventy-plugin-pwa
```

### Usage

#### Add to eleventy config file

```js
const pluginPWA = require('eleventy-plugin-pwa');
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginPWA);
};
```

Read more about [Eleventy plugins](https://www.11ty.io/docs/plugins/)

#### Registering Service Worker

```html
// in your header templates
<script>
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker.js');
</script>
```

#### Adding Web App Manifest

Read [The Web App Manifest Guide](https://developers.google.com/web/fundamentals/web-app-manifest/)

## Options

You can also pass workbox generateSW options directly into the plugin.
For example :

```js
// overwriting destination file and more
const pluginPWA = require('eleventy-plugin-pwa');
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginPWA, {
    swDest: './build/sw.js',
    globDirectory: './build',
  });
};
```

Read more about it on [workbox generateSW module page](https://developers.google.com/web/tools/workbox/modules/workbox-build#full_generatesw_config)

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

See the list of [contributors](https://github.com/pvds/eleventy-plugin-pwa/contributors)
who participated in this project.

## License

This code is available under the [MIT license](LICENSE).

## Acknowledgements

- Nanda Oktavera: [okitavera](https://github.com/okitavera), [eleventy-plugin-pwa](https://github.com/okitavera/eleventy-plugin-pwa)
- Mike Riethmuller: [Supermaya](https://github.com/MadeByMike/supermaya)
- Zach Leatherman: [zachleat.com](https://github.com/zachleat/zachleat.com)

[version-shield]: https://img.shields.io/npm/v/@pragmatics/eleventy-plugin-pwa.svg
[version-url]: https://www.npmjs.com/package/@pragmatics/eleventy-plugin-pwa
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/eleventy-plugin-pwa/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/eleventy-plugin-pwa.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=eleventy-plugin-pwa
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/eleventy-plugin-pwa/release.svg
[release-status-url]: https://github.com/pvds/eleventy-plugin-pwa/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/librariesio/github/pvds/eleventy-plugin-pwa.svg
[dependencies-url]: https://github.com/pvds/eleventy-plugin-pwa
[issues-shield]: https://img.shields.io/github/issues/pvds/eleventy-plugin-pwa.svg
[issues-url]: https://github.com/pvds/eleventy-plugin-pwa/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/eleventy-plugin-pwa.svg
[coverage-url]: https://codecov.io/gh/pvds/eleventy-plugin-pwa
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_eleventy-plugin-pwa.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_eleventy-plugin-pwa
