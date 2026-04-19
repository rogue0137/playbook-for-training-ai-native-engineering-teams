import { expect, test } from "@playwright/test";

test.describe("Program site navigation", () => {
  test("loads overview and deep links", async ({ page }) => {
    // Given a visitor opens the SPA root.
    await page.goto("/#/");

    // Then the overview document is shown.
    await expect(page.getByRole("heading", { level: 1, name: /program overview/i })).toBeVisible();

    // When they navigate directly to a week page via deep link.
    await page.goto("/#/week-01/week-01-setup-and-baseline");

    // Then week content renders and survives a browser refresh.
    await expect(page.getByRole("heading", { level: 1, name: /week 01 setup and baseline/i })).toBeVisible();
    await page.reload();
    await expect(page.getByRole("heading", { level: 1, name: /week 01 setup and baseline/i })).toBeVisible();
  });
});
