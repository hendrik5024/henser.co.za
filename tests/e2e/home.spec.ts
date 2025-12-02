import { test, expect } from "@playwright/test";

test("home page has title and nav", async ({ page }) => {
  await page.goto("/");
  // Title should include the brand name; be lenient on case
  await expect(page).toHaveTitle(/Henser Innovations/i);
  await expect(page.getByRole("link", { name: "Services" })).toBeVisible();
});
