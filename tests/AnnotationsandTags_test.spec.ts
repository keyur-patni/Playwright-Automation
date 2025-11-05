import { test, expect } from "@playwright/test";

// Annotations

test.skip("Test One", async ({ page }) => {
  // this test will be in the skipped bucket
});

test("Not Ready Yet", async ({ page }) => {
  test.fail();
  // this test will be in the failed bucket
});

test.fixme("Test To Be Fixed", async ({ page }) => {
  // this test will be in the skipped bucket
});

test("Slow Test", async ({ page }) => {
  test.slow();
});

test("Run Only This Test", async ({ page }) => {
  //this test will be the only one that is executed if you add .only (test.only)
});

// Tags
// Examples: // @smoke, @sanity, @fast, @slow

test("The Login Test @smoke", async ({ page }) => {
  // adding a tag will only run tests with the same tag from the file
  // executing test with --grep "@tagname", will execute such tests
  // executing test with --grep-invert "@tagname", will execute tests that do not have the tag
});
