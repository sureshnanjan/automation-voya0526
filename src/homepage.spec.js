const { test, expect } = require('@playwright/test');

test('verify homepage loads and shows expected content', async ({ page }) => {
  // Replace this URL with your actual homepage URL
  await page.goto('https://example.com');

  // Verify the page title contains expected text
  await expect(page).toHaveTitle(/Example Domain/);

  // Example selector check: update to match your homepage
  await expect(page.locator('h1')).toContainText('Example Domain');
});
