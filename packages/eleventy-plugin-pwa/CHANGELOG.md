# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1]

### Fixed

- release workflow: publish as public package

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

[1.1.1]: https://github.com/pvds/eleventy-plugin-pwa/tree/1.1.1
[1.1.0]: https://github.com/pvds/eleventy-plugin-pwa/tree/1.1.0
[1.0.8]: https://github.com/okitavera/eleventy-plugin-pwa/tree/1.0.8
