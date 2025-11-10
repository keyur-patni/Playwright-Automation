import { test, expect } from "@playwright/test";

test("PUT API Req", async ({ request }) => {
  const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
    data: {
      name: "Tyler",
      job: "Durden",
    },
  });

  expect(response.status()).toBe(200);

  const text = await response.text();
  expect(text).toContain("Tyler");

  console.log(await response.json());
});
