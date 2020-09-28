# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.1.3 (2020-09-28)


### Bug Fixes

* correct main entry file in copy script ([8b98e58](https://github.com/pvds/pragmatics/commit/8b98e587a67430f04902933e0b7bddbceb757c0a))





## 1.1.2 (2020-09-27)


### Bug Fixes

* correct stub path ([c069d0b](https://github.com/pvds/pragmatics/commit/c069d0bc220ea9fc7b563a7c7921b85bf46c8ef0))
* resolve stub path ([f95bae8](https://github.com/pvds/pragmatics/commit/f95bae89028539b0aec7a4b85e7dae2bf6950bd9))
* revert stub path to using path.join instead of path.resolve ([9ed2822](https://github.com/pvds/pragmatics/commit/9ed2822bd9ff3bec1371db52519d2a89cc0be0e8))
* stub path by joining with __dirname ([0f477f4](https://github.com/pvds/pragmatics/commit/0f477f4cb30e177b73534dc7344098c1869fcbd9))





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
