const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');

const configFile = path.join(__dirname, '..', 'index.js');
const fixtureFile = path.join(__dirname, 'system/fixture.scss');
const expectedFile = path.join(__dirname, 'system/expected.scss');

describe('configuration', () => {
  test('to load', () => {
    expect(require(configFile)).toBeTruthy();
  });
});

describe('linted file', () => {
  const fixture = fs.readFileSync(fixtureFile, 'utf8');
  const expected = fs.readFileSync(expectedFile, 'utf8');

  test('to be properly formatted', () => {
    return stylelint
      .lint({
        code: fixture,
        config: require(configFile),
        fix: true,
      })
      .then((result) => {
        expect(result.errored).toStrictEqual(false);
        expect(result.output).toStrictEqual(expected);
      });
  });
});
