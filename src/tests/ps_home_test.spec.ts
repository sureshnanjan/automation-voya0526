import {test,expect,} from "@playwright/test";
import { PSHomeOperations } from "../operations/petstore_home_operations.js";

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

test("SignIN works ok for correct credential",async ()=>{
    const hp:PSHomeOperations;
    const correctuname = "sureshn"
    const correctpwd = "pass"
const expectedWelcomeText = "Welcome Suresh" 
    hp.signIn(correctuname,correctpwd);
    const actual_result = hp.getSignInResult();
    expect(actual_result).toEqual(expectedWelcomeText)

});
test("Sign In  fails for incorrect credential",async ()=>{
    const hp:PSHomeOperations;
    const correctuname = "not"
    const correctpwd = "nopass"
const expectedWelcomeText = "Invalid username or password. Signon failed" 
    hp.signIn(correctuname,correctpwd);
    const actual_result = hp.getSignInResult();
    expect(actual_result).toEqual(expectedWelcomeText)
});

test('Buying Angel fish works OK with PO', async ({ page }) => {
  const hp:PSHomeOperations;
  hp.signIn("sureshn", "pass");
  hp.accessCategory("fish")
  hp.addPetToCart("EST-1",3)
  hp.checkOut();

});