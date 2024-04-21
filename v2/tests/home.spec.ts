import { expect, test } from "@playwright/test";

test.describe("Home Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
  });

  test("Check for main elements visibility", async ({ page }) => {
    // Check if the banner text is visible and contains correct text
    const bannerText = page.locator('[data-testid="banner-text"]');
    await expect(bannerText).toBeVisible();
    await expect(bannerText).toContainText(
      "Get started by editing src/app/page.tsx"
    );

    // Check Vercel logo link visibility and attributes
    const vercelLogoLink = page.locator('[data-testid="vercel-logo-link"]');
    await expect(vercelLogoLink).toBeVisible();
    await expect(vercelLogoLink).toHaveAttribute(
      "href",
      "https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    );

    // Check Vercel logo image visibility
    const vercelLogo = page.locator('[data-testid="vercel-logo"]');
    await expect(vercelLogo).toBeVisible();

    // Check Next.js logo visibility
    const nextJsLogo = page.locator('[data-testid="nextjs-logo"]');
    await expect(nextJsLogo).toBeVisible();
  });

  test("Navigation Links Functionality", async ({ page }) => {
    // Testing each navigation link for visibility and correct URL
    const links = [
      { testid: "docs-link", expectedHref: "https://nextjs.org/docs" },
      { testid: "learn-link", expectedHref: "https://nextjs.org/learn" },
      {
        testid: "templates-link",
        expectedHref: "https://vercel.com/templates?framework=next.js",
      },
      { testid: "deploy-link", expectedHref: "https://vercel.com/new" },
    ];

    for (const link of links) {
      const navLink = page.locator(`[data-testid="${link.testid}"]`);
      await expect(navLink).toBeVisible();
      await expect(navLink).toHaveAttribute("href", link.expectedHref);
    }
  });
});
