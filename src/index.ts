import assert from "node:assert";
import { test, describe } from "node:test";

describe("test", () => {
  test("syncronous passing teest", (t) => {
    assert.strictEqual(1, 100);
  });
});
