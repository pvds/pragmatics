const fs = require('fs');
const path = require('path');
const eslint = require('eslint');

describe('configuration', () => {
  const configFolder = '../../config/';
  const configs = [
    'browser',
    'node',
    'test',
    'es6',
    'es6-browser',
    'es6-browser-recommended',
    'es6-node',
    'es6-node-recommended',
  ];

  describe('default', () => {
    const defaultConfigFile = require(path.join(__dirname, '../../index.js'));

    test('to load', () => {
      expect(defaultConfigFile).toBeTruthy();
    });
  });

  describe.each(configs)('%s', (config) => {
    const configFile = require(path.join(__dirname, configFolder + config + '.js'));

    /**
     * Check for valid object
     * @param {Object} obj
     * @return {boolean|boolean}
     */
    const isObject = (obj) => typeof obj === 'object' && obj !== null;

    test('to load', () => {
      expect(configFile).toBeTruthy();
    });

    test('to have valid objects', () => {
      /* eslint-disable jest/no-conditional-expect */
      switch (config) {
        case 'browser':
          expect(isObject(configFile.env)).toBeTruthy();
          expect(isObject(configFile.parserOptions)).toBeTruthy();
          break;
        case 'node':
          expect(isObject(configFile.env)).toBeTruthy();
          expect(isObject(configFile.parserOptions)).toBeTruthy();
          expect(isObject(configFile.rules)).toBeTruthy();
          break;
        case 'test':
          expect(isObject(configFile.env)).toBeTruthy();
          expect(isObject(configFile.plugins)).toBeTruthy();
          expect(isObject(configFile.extends)).toBeTruthy();
          break;
        case 'es6':
          expect(isObject(configFile.env)).toBeTruthy();
          expect(isObject(configFile.parserOptions)).toBeTruthy();
          expect(isObject(configFile.extends)).toBeTruthy();
          break;
        case 'es6-browser':
          expect(isObject(configFile.extends)).toBeTruthy();
          break;
        case 'es6-browser-recommended':
          expect(isObject(configFile.extends)).toBeTruthy();
          break;
        case 'es6-node':
          expect(isObject(configFile.extends)).toBeTruthy();
          break;
        case 'es6-node-recommended':
          expect(isObject(configFile.extends)).toBeTruthy();
          break;
        default:
          expect(configs).toContain(config);
      }
      /* eslint-enable */
    });
  });
});

describe('linted fixture', () => {
  const fixture = fs.readFileSync(path.join(__dirname, 'fixture.js'), 'utf8');
  const expected = fs.readFileSync(path.join(__dirname, 'expected.js'), 'utf8');

  const CLIEngine = eslint.CLIEngine;
  const lint = new CLIEngine({
    configFile: 'index.js',
  });
  const lintFix = new CLIEngine({
    configFile: 'index.js',
    fix: true,
  });

  test('to have 3 errors', () => {
    expect(lint.executeOnText(fixture).errorCount).toEqual(3);
  });

  test('to have 1 fixable error', () => {
    expect(lint.executeOnText(fixture).fixableErrorCount).toEqual(1);
  });

  test('to have 0 fixable warnings', () => {
    expect(lint.executeOnText(fixture).fixableWarningCount).toEqual(0);
  });

  test('to not be equal to expected after lint', () => {
    expect(lint.executeOnText(fixture).results[0].output).not.toStrictEqual(
      lint.executeOnText(fixture).results[0].source
    );
  });

  test('to be equal to expected after lint with fix', () => {
    expect(lintFix.executeOnText(fixture).results[0].output).toStrictEqual(expected);
  });
});
