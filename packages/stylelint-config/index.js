module.exports = {
  extends: [
    'stylelint-config-standard',
    '@pragmatics/stylelint-config-order',
    'stylelint-config-prettier',
  ],
  rules: {
    // Disabled for SCSS as it prevents SCSS specific @ rules (such as @if)
    // https://stylelint.io/user-guide/rules/at-rule-no-unknown
    'at-rule-no-unknown': null,

    // Enabled to play well with both CSS and SCSS at-rules for readability.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment', 'blockless-after-blockless'],
        ignoreAtRules: ['else'],
      },
    ],

    // Disabled to avoid cases where semantic or
    // pragmatic grouping is more practical
    // https://stylelint.io/user-guide/rules/no-descending-specificity
    'no-descending-specificity': null,

    // Enabled to improve consistency and readability.
    // https://stylelint.io/user-guide/rules/at-rule-empty-line-before
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
      },
    ],

    // Ignore custom elements to play well with popular frameworks.
    // https://stylelint.io/user-guide/rules/selector-type-no-unknown
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
  },
};
