const fs = require('fs');
const path = require('path');
const stylelint = require('stylelint');

describe('configuration', () => {
  const configFile = require(path.join(__dirname, '..', 'index.js'));

  test('to load', () => {
    expect(configFile).toBeTruthy();
  });
});

describe('linted file', () => {
  const fixture = fs.readFileSync(path.join(__dirname, 'system/fixture.scss'), 'utf8');
  const expected = fs.readFileSync(path.join(__dirname, 'system/expected.scss'), 'utf8');

  test('to be properly formatted', () => {
    return stylelint
      .lint({
        code: fixture,
        config: require('..'),
        fix: true,
      })
      .then((result) => {
        // expect(result.errored).toStrictEqual(false);
        expect(result.output).toStrictEqual(expected);
      });
  });
});
