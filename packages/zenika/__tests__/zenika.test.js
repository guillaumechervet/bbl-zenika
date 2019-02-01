"use strict";

const zenika = require("..");

const assert = require("assert");

describe("zenika", () => {
  it("needs tests", () => {
    const r = zenika(10, 3);
    assert.equal(r, 14);
  });
});
