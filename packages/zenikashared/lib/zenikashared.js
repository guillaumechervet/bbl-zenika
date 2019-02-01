"use strict";

const R = require("ramda");
module.exports = zenikashared;

function zenikashared(a, b) {
  return R.add(a)(b);
}
