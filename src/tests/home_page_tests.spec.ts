import { test, expect } from '@playwright/test';
import type { HomePageOperation } from "../operations/home_page_opertions.js";

test('Heroku Page has Main Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});

test("Heroku Title Check with PO", async ()=>{
    const hp:HomePageOperation;
    const expected_title = "Welcome to the-internet";
    const actual_title = hp.getTitle();
    await expect(actual_title).toEqual(expected_title)
})