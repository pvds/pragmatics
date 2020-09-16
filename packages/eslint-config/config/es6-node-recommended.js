'use strict';

const resolvedExtends = ['./es6-node', './test', 'prettier'].map((extend) =>
  require.resolve(extend)
);

module.exports = {
  extends: resolvedExtends,
};
