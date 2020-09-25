# Changelog - Package boilerplate

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0]

### Changed

- use `@pragmatics/styles` for all styles not specific to the boilerplate

### Removed

- `scss` partials not specific to the boilerplate

## [1.2.0]

### Changed

- use `@pragmatics/eleventy-plugin-pwa` in order to use latest workbox version
- set workbox property `inlineWorkboxRuntime` to true

## [1.1.1]

### Fixed

- `meta.njk` syntax error

## [1.1.0]

### Added

- offline mode
- missing favicons

### Changed

- use `babel-eslint` parser
- `package.json` meta properties

## [1.0.0]

### Added

- linters with ignore files
  - [prettier](.prettierrc.yml)
  - [stylelint](.stylelintrc.yml)
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

### Changed

- run eslint and fix errors
- run stylelint and fix errors
- format with Prettier
- set dependencies as devDependencies
- build to use Yarn instead of NPM
- [readme](README.md) to package-boilerplate format

### Fixed

- sourcemap files not accessible
- `$grid-breakpoints` sass variable renamed to `$breakpoints`

[0.1.0]

### Added

- eleventastic boilerplate template

[1.3.0]: https://github.com/pvds/package-boilerplate/tree/1.3.0
[1.2.0]: https://github.com/pvds/package-boilerplate/tree/1.2.0
[1.1.1]: https://github.com/pvds/package-boilerplate/tree/1.1.1
[1.1.0]: https://github.com/pvds/package-boilerplate/tree/1.1.0
[1.0.0]: https://github.com/pvds/package-boilerplate/tree/1.0.0
[0.1.0]: https://github.com/pvds/package-boilerplate/tree/0.1.0
[package-boilerplate]: https://github.com/pvds/package-boilerplate
