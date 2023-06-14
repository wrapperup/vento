import { test } from "./utils.ts";

Deno.test("Comment tag", async () => {
  await test({
    template: `
    {{# "Hello world" #}}
    `,
    expected: "",
  });
  await test({
    template: `
    <h1> {{# {{ title }} {{#}}
    `,
    expected: "<h1> ",
  });
});
