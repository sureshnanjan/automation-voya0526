import { test, expect } from '@playwright/test';
test('Heroku Page has correct title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
});
test('Heroku Page has Main Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  //page.
  // Expect a title "to contain" a substring.
  // Read the Main Heading
  // Check the main Heading matches Welcome to the-internet
  //await expect(pageTitle)
});
test('Heroku Page has Sub Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Expect a title "to contain" a substring.
  // Read the Sub Heading
  // Check the Sub Heading matches Available Examples
  //await expect(page).toHaveTitle(/The Internet/);
});
test('Heroku Page has Correct number of Examples', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  // Access all the available examples
  // Check the count matches 44 Examples
  //await expect(page).toHaveTitle(/The Internet/);
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
});



