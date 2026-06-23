import {test,expect} from "@playwright/test";
import type { BrowserContext, Page } from "@playwright/test";
test("Experiment Authenication",async ({browser})=>{
    const context: BrowserContext = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
    });
    const page:Page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/download_secure");
    const result = await page.getByRole("heading").textContent();
    expect(result).toContain("Not Secure")

});
/*
extraHTTPHeaders: {
      'Authorization': 'Basic YWRtaW46YWRtaW4='
    }
*/

test("Setting Extra HTTP Headers", async ({browser})=>{
  const context:BrowserContext = await browser.newContext({
    extraHTTPHeaders: {'Authorization':'Basic YWRtaW46YWRtaW4='}
  });
  const page: Page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/download_secure");
  const head = await page.getByRole("heading").textContent()
  expect(head).toEqual("Secure Dowload")

});