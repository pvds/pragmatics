'use strict';

const resolvedExtends = ['./es6-browser', './test', 'eslint-config-prettier'].map((extend) =>
  require.resolve(extend)
);

module.exports = {
  extends: resolvedExtends,
};
