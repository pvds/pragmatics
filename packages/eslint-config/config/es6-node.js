'use strict';

const resolvedExtends = ['./es6', './node'].map((extend) => require.resolve(extend));

module.exports = {
  extends: resolvedExtends,
};
