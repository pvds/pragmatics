'use strict';

const resolvedExtends = ['./es6', './browser'].map((extend) => require.resolve(extend));

module.exports = {
  extends: resolvedExtends,
};
