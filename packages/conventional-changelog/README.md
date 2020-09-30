# @pragmatics/conventional-changelog-preset

[![NPM version][version-shield]][version-url]
[![Maintenance][maintenance-shield]][maintenance-url]
[![Package size][package-size-shield]][package-size-url] \
[![Release Status][release-status-shield]][release-status-url]
[![Dependencies][dependencies-shield]][dependencies-url]
[![Issues open][issues-shield]][issues-url]
[![Code coverage][coverage-shield]][coverage-url]
[![Quality Gate Status][quality-shield]][quality-url]

[Conventional changelog](https://github.com/ajoslin/conventional-changelog) preset based on [Angular commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

As opposed to the [Angular preset](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular#readme),
when bumping a version, this preset will always generate the appropriate changelog entries.

## Summary

- [Getting Started](#getting-started)
- [Built With](#built-with)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [Acknowledgments](#acknowledgements)

## Getting started

### Installation

```sh
yarn add @pragmatics/conventional-changelog-preset -D
```

### Usage

Use the [Conventional Changelog CLI Quick Start](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli#quick-start) with the `-p conventionalcommits` option.

#### Lerna

When using with [lerna](https://lerna.js.org/) [version](https://github.com/lerna/lerna/tree/master/commands/version) Set the `--changelog-preset` flag.

```
$ lerna version --conventional-commits --changelog-preset @pragmatics/preset
```

When using [`lerna.json`](https://github.com/lerna/lerna#lernajson), set the following:

```json
{
  "command": {
    "version": {
      "conventionalCommits": true,
      "changelogPreset": "@pragmatics/preset"
    }
  }
}
```

Lerna automatically evaluates & prepends `conventional-changelog-` to the preset, so node module resolution resolves to the correct package.

#### Commit messages

This preset follows message formats as described in [commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

##### Supported Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `perf`: A code change that improves performance
- `revert`: Reverts a previous commit
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (like linter changes)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify source or test files

## Built With

- [Webstorm](https://www.jetbrains.com/webstorm/) - for development
- [Github](https://github.com) - for versioning and deployment
- [Contributor Covenant](https://www.contributor-covenant.org/) - for the Code of Conduct
- [Creative Commons](https://creativecommons.org/) - to choose the license

## Contributing

Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our the process for submitting issues and pull requests to us.
This repository has a [code of conduct](docs/CODE_OF_CONDUCT.md), we will remove things that do not respect it.

## Versioning

We use [SemVer](http://semver.org/) for versioning.
For the available versions, see the [tags on this repository](https://github.com/pvds/pragmatics/tags).

## Authors

See the list of [contributors](https://github.com/pvds/pragmatics/contributors)
who participated in this project.

## License

This project is licensed under the [ISC License](LICENSE.md).

## Acknowledgements

The following guidelines, methodologies and architectures have been used as inspiration for this package:

- [Conventional changelog Angular preset](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular#readme)

[version-shield]: https://img.shields.io/npm/v/@pragmatics/conventional-changelog-preset.svg
[version-url]: https://www.npmjs.com/package/@pragmatics/conventional-changelog-preset
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg?color=blue
[maintenance-url]: https://github.com/pvds/pragmatics/graphs/commit-activity
[package-size-shield]: https://img.shields.io/bundlephobia/min/@pragmatics/conventional-changelog-preset.svg?label=size
[package-size-url]: https://bundlephobia.com/result?p=@pragmatics/conventional-changelog-preset
[release-status-shield]: https://img.shields.io/github/workflow/status/pvds/pragmatics/release.svg
[release-status-url]: https://github.com/pvds/pragmatics/actions?query=workflow%3Arelease
[dependencies-shield]: https://img.shields.io/david/pvds/pragmatics.svg
[dependencies-url]: https://github.com/pvds/pragmatics
[issues-shield]: https://img.shields.io/github/issues/pvds/pragmatics.svg
[issues-url]: https://github.com/pvds/pragmatics/issues
[coverage-shield]: https://img.shields.io/codecov/c/github/pvds/pragmatics.svg
[coverage-url]: https://codecov.io/gh/pvds/pragmatics
[quality-shield]: https://img.shields.io/sonar/quality_gate/pvds_pragmatics.svg?server=https%3A%2F%2Fsonarcloud.io
[quality-url]: https://sonarcloud.io/dashboard?id=pvds_pragmatics
