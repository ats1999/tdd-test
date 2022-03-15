let assert = require("assert");
const add = require("../index");

it("should return 0 when empty string is passed", function () {
  assert.equal(add(""), 0);
});

it("should return 5 when '5' is passed", function () {
  assert.equal(add("5"), 5);
});

it("should return 10 when '2,8' is passed", function () {
  assert.equal(add("2,8"), 10);
});

it("should return 10 when '2\n3,5' is passed", function () {
  assert.equal(add("2\n3,5"), 10);
});
s