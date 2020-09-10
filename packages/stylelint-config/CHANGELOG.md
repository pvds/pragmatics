# Changelog - [Stylelint config pragmatic]

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.3]

### Fixed

- readme
  - badges not indexed by npms.io
  - correct json format for stylelint extends

## [1.2.2]

### Fixed

- empty .prettierignore removed
- update dependencies
- cleanup test file

## [1.2.1]

### Fixed

- remove yarn caching from release workflow;  
  `action/cache` only supports `push` and `pull_request` events
- .gitattributes
  - mark lock files as binary
  - remove test scss files from Github statistics
- system test

## [1.2.0]

### Added

- caching to ci workflow

### Changed

- setup-node to v2-beta
- updated lock file
- readme badges and sources

### Removed

- publish to GPR from release workflow

## [1.1.5]

### Fixed

- run NPM and GPR release as separate jobs

## [1.1.4]

### Fixed

- set GPR registry for yarn publish explicitly

## [1.1.3]

### Fixed

- GPR package scope

## [1.1.2]

### Fixed

- Use npm instead of yarn for GPR publish

## [1.1.1]

### Fixed

- changelog package name link
- GPR package scope

## [1.1.0]

### Added

- sonarcloud analysis
- badges to readme

## [1.0.0]

### Added

- stylelint rules
- workflows
  - ci
  - release
- linters
  - eslint
  - prettier
- tests
- readme
- license

[stylelint config pragmatic]: https://github.com/pvds/stylelint-config-pragmatic
[1.0.0]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.0.0
[1.1.0]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.1.0
[1.1.1]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.1.1
[1.1.2]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.1.2
[1.1.3]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.1.3
[1.1.4]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.1.4
[1.1.5]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.1.5
[1.2.0]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.2.0
[1.2.1]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.2.1
[1.2.2]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.2.2
[1.2.3]: https://github.com/pvds/stylelint-config-pragmatic/tree/1.2.3
