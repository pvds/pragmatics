'use strict';

module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  // TODO: replace google config with custom rules in `pragmatic/rules/es2021`
  extends: ['google'],
};
