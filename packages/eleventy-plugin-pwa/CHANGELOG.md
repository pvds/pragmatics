# Changelog - [@pragmatics/eleventy-plugin-pwa]

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0]

### Added

- this changelog
- linters with ignore files
  - [prettier](.prettierrc.yml)
  - [eslint](.eslintrc.yml)
- pre-commit hook and staged file linting
- documentation
  - [changelog](CHANGELOG.md)
  - [code of conduct](CODE_OF_CONDUCT.md)
  - [contributing](CONTRIBUTING.md)
  - [licence](LICENSE.md)
- .github files
  - templates
    - bug report
    - feature request
    - pull request
  - workflows
    - ci
    - release

### Changed

- upgrade `workbox-builder` to `^5.1.4`
  - remove deprecated `importWorkboxFrom`
  - rename `RuntimeCachingEntry` handler class to PascalCase: `StaleWhileRevalidate`
- upgrade other dependencies to latest version
- run eslint and fix errors
- format with Prettier

### Removed

- `travis.yml`

## [1.0.8]

Forked from [https://github.com/okitavera/eleventy-plugin-pwa]

[1.1.0]: https://github.com/pvds/eleventy-plugin-pwa/tree/1.1.0
[1.0.8]: https://github.com/okitavera/eleventy-plugin-pwa/tree/1.0.8
[package-boilerplate]: https://github.com/pvds/eleventy-plugin-pwa
