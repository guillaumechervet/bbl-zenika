"use strict";

const shared = require("@guillaume.chervet/zenikashared");

module.exports = zenika;

function zenika(a, b) {
  return shared(a, b + 2);
}
