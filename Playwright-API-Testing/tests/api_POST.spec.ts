import { test, expect } from "@playwright/test";

test("POST API Req", async ({ request }) => {
  const response = await request.post("https://jsonplaceholder.typicode.com/posts", {
    data: {
      name: "Tyler",
      job: "Fighter",
    },
  });

  expect(response.status()).toBe(201);

  const text = await response.text();
  expect(text).toContain("Tyler");

  console.log(await response.json());
});
