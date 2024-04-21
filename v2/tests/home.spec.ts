import { expect, test } from "@playwright/test";

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Check for main elements visibility", async ({ page }) => {
    // Check if the top banner text is visible
    await expect(page.locator("text=Get started by editing")).toBeVisible();

    // Check if the Vercel link at the bottom is correctly attributed
    const vercelLink = page.locator("a >> text=By Vercel");
    await expect(vercelLink).toBeVisible();
    await expect(vercelLink).toHaveAttribute(
      "href",
      "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );
    await expect(vercelLink).toHaveAttribute("target", "_blank");

    // Check visibility of Next.js logo
    const nextJsLogo = page.locator('img[alt="Next.js Logo"]');
    await expect(nextJsLogo).toBeVisible();
  });

  test("Ensure navigation links work", async ({ page }) => {
    // Ensure that the Docs link is interactive and navigates correctly
    const docsLink = page.locator("text=Docs");
    await expect(docsLink).toBeVisible();
    await docsLink.click();
    // Use a response check or URL check here if possible
  });

  // Additional tests can include functionality for hovering, clicking,
  // and checking response actions or routing.
});
