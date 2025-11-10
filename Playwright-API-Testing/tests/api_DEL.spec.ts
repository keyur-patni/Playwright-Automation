import { test, expect } from "@playwright/test";

test("Delete API Req", async ({ request }) => {
  const response = await request.delete("https://jsonplaceholder.typicode.com/posts/1");
  expect(response.status()).toBe(200);
  console.log("DELETE Response Status:", response.status());
});
