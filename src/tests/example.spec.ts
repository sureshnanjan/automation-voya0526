import { test, expect } from '@playwright/test';
test('Heroku Page has correct title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});
test('Heroku Page has Main Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});
test('Heroku Page has Sub Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h2')).toContainText('Available Examples');
});
test('Heroku Page has Correct number of Examples', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  const noofExamples = (await page.getByRole("listitem").all()).length 
    await expect(noofExamples).toEqual(50);
});

test("AB Test Navigates to One of 2 sites whem enabled",()=>{});
test("AB Test always Navigates NO ABTest sites whem Disabled",()=>{});
test('sample txt link', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');
  const downloadPromise = page.waitForEvent('download');
  //page.waitForEvent("")
  await page.getByRole('link', { name: 'random_data.txt' }).click();
  const download = await downloadPromise;
  console.log(await download.path())
  console.log(download.suggestedFilename())
  console.log(download.url())
  expect(await download.path()).toContain("random_data.txt")
  
});

test('Add Remove Element Page works OK', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await expect(page.getByRole('heading')).toContainText('Add/Remove Elements');
  // Do The Add Operation
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(await page.getByRole('button', { name: 'Delete' }).count()).toBe(2)
  await expect(1).toBe(1)
});

test('Buying Angel fish works OK', async ({ page }) => {
  await page.locator('html').click();
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#stripes-1601714372').click();
  await page.locator('#stripes-1601714372').fill('sureshn');
  await page.locator('#stripes-1601714372').press('Tab');
  await page.locator('input[name="password"]').fill('pass');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link').nth(5).click();
  await page.getByRole('link', { name: 'FI-SW-01' }).click();
  await page.getByRole('link', { name: 'Add to Cart' }).first().click();
  await page.locator('input[name="EST-1"]').click();
  await page.locator('input[name="EST-1"]').fill('3');
  await page.getByRole('button', { name: 'Update Cart' }).click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await expect(page.getByRole('rowgroup')).toContainText('Payment Details');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Order').click();
  await expect(page.getByRole('rowgroup')).toContainText('Order');
});



