'use strict';

const resolvedExtends = ['./index'].map((extend) => require.resolve(extend));

module.exports = {
  extends: resolvedExtends,
};
