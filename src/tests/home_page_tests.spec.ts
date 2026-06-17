import { test, expect } from '@playwright/test';
import type { HomePageOperation } from "../operations/home_page_opertions.js";
import { HomePage } from '../implementation/home_page.js';
import { HomePageWDIO } from '../implementation/home_page_WDIO.js';

test('Heroku Page has Main Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});

test("Heroku Title Check with PO", async ({page})=>{
    const hp:HomePageOperation = new HomePage(page)
   // const hp:HomePageOperation = new HomePageWDIO();
    const expected_title = "Welcome to the-internet1";
    const actual_title = await hp.getTitle();
    await expect(actual_title).toEqual(expected_title)
})