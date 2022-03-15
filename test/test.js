let assert = require("assert");
const add = require("../index");

it("should return 0 when empty string is passed", function () {
  assert.equal(add(""), 0);
});
