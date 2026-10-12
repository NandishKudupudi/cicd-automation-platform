
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { getAppStatus } = require("./app");

test("application should report healthy status", () => {
  const result = getAppStatus();

  assert.equal(result.status, "healthy");
  assert.equal(
    result.application,
    "CI/CD Automation Platform"
  );
});
