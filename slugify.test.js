import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "./slugify.js";

test("lowercases and joins words", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("strips accents", () => {
  assert.equal(slugify("Crème Brûlée"), "creme-brulee");
});

test("drops characters that are not letters, digits or hyphens", () => {
  assert.equal(slugify("Hello, World! 2026?"), "hello-world-2026");
});
