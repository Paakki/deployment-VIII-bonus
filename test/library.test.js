import { expect } from "chai";

import add from "../src/add.js";
import divide from "../src/divide.js";
import eq from "../src/eq.js";
import castArray from "../src/castArray.js";
import defaultTo from "../src/defaultTo.js";
import compact from "../src/compact.js";
import clamp from "../src/clamp.js";
import chunk from "../src/chunk.js";

describe("add", function () {
  it("adds two positive numbers", function () {
    expect(add(6, 4)).to.equal(10);
  });

  it("adds negative and positive numbers", function () {
    expect(add(-2, 5)).to.equal(3);
  });

  it("returns the other value when first is undefined", function () {
    expect(add(undefined, 5)).to.equal(5);
  });
});

describe("divide", function () {
  it.skip("divides two numbers", function () {
    expect(divide(6, 4)).to.equal(1.5);
  });

  it.skip("divides evenly", function () {
    expect(divide(8, 2)).to.equal(4);
  });
});

describe("eq", function () {
  it("returns true for the same primitive value", function () {
    expect(eq("a", "a")).to.equal(true);
  });

  it("returns false for different objects with same content", function () {
    expect(eq({ a: 1 }, { a: 1 })).to.equal(false);
  });

  it("returns true for NaN compared with NaN", function () {
    expect(eq(NaN, NaN)).to.equal(true);
  });
});

describe("castArray", function () {
  it("wraps a primitive in an array", function () {
    expect(castArray(1)).to.deep.equal([1]);
  });

  it("returns the same array if value already is an array", function () {
    const arr = [1, 2, 3];
    expect(castArray(arr)).to.equal(arr);
  });

  it.skip("returns empty array when called without arguments", function () {
    expect(castArray()).to.deep.equal([]);
  });
});

describe("defaultTo", function () {
  it("returns original value when it is defined", function () {
    expect(defaultTo(1, 10)).to.equal(1);
  });

  it("returns default value for undefined", function () {
    expect(defaultTo(undefined, 10)).to.equal(10);
  });

  it("returns default value for null", function () {
    expect(defaultTo(null, 10)).to.equal(10);
  });

  it.skip("returns default value for NaN", function () {
    expect(defaultTo(NaN, 10)).to.equal(10);
  });
});

describe("compact", function () {
  it.skip("removes falsey values", function () {
    expect(compact([0, 1, false, 2, "", 3])).to.deep.equal([1, 2, 3]);
  });

  it("returns empty array when all values are falsey", function () {
    expect(compact([false, 0, "", null, undefined, NaN])).to.deep.equal([]);
  });
});

describe("clamp", function () {
  it("clamps to lower bound", function () {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it.skip("clamps to upper bound", function () {
    expect(clamp(10, -5, 5)).to.equal(5);
  });

  it.skip("returns the number when already inside bounds", function () {
    expect(clamp(3, -5, 5)).to.equal(3);
  });
});

describe("chunk", function () {
  it.skip("splits array into chunks of size 2", function () {
    expect(chunk(["a", "b", "c", "d"], 2)).to.deep.equal([
      ["a", "b"],
      ["c", "d"],
    ]);
  });

  it.skip("puts remaining items into the last chunk", function () {
    expect(chunk(["a", "b", "c", "d"], 3)).to.deep.equal([
      ["a", "b", "c"],
      ["d"],
    ]);
  });

  it("returns empty array for null input", function () {
    expect(chunk(null, 2)).to.deep.equal([]);
  });

  it("returns empty array when size is 0", function () {
    expect(chunk(["a", "b"], 0)).to.deep.equal([]);
  });
});
