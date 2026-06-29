import {test,expect} from '@playwright/test'
//import { HomePage } from '../implementation/home_page';
//import { HomePageWDIO } from '../implementation/home_page_WDIO';
import { GetHerokuAppHomePage } from '../utilities/AppHelper';
import type { HomePageOperation } from '../operations/home_page_operations';
import type { ABTestingOperations } from '../operations/abtesting_operations';
import type { HoversPageOperation } from '../operations/hovers_page_operations';

// setup teardown
test.beforeEach
test('Heroku Page has Main Heading Correct', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
});

test("Heroku Title Check with PO", async ({page})=>{
    //const hompage = new HomePage(page)
    const hp = await GetHerokuAppHomePage(page);
   // const hp = new HomePageWDIO();
    const expected_title = "Welcome to the-internet1";
    const actual_title = await hp.getTitle();
    await expect(actual_title).toEqual(expected_title)
});
test("Subtitle Check works OK",async ({page})=>{
    const hp = await GetHerokuAppHomePage(page);
   // const hp = new HomePageWDIO();
    const expected_sub_title = "Available Examples";
    const actual_sub_title = await hp.getSubTitle();
    await expect(actual_sub_title).toEqual(expected_sub_title)
});
test("Available Examples Count is 44",async ({page})=>{
    const hp = await GetHerokuAppHomePage(page);
   // const hp = new HomePageWDIO();
    const expected_example_count = 44;
    const available_examples = await hp.getAvailableExamples();
    console.log(available_examples);
    const actual_example_count = available_examples.length;
    await expect(actual_example_count).toEqual(expected_example_count)
});

test("Navigating to AB Testing works",async ({page})=>{
    const herokuhome:HomePageOperation | undefined = await GetHerokuAppHomePage(page);
    const expected = ["AB Test Control", "AB Test Variation1"]
    const resultPage:ABTestingOperations| undefined = await herokuhome.goToExample("A/B Testing") as ABTestingOperations;
    const resultTitle = resultPage.getTitle()
    expect(expected).toContain(resultPage) 
});

test("Navigating to Hovers  Testing works",async ({page})=>{
    const herokuhome:HomePageOperation| undefined = await GetHerokuAppHomePage(page);
    const expected = "Hovers";//"AB Test Control", "AB Test Variation1"]""
    const resultPage:HoversPageOperation = await herokuhome.goToExample("Hovers") as HoversPageOperation;
    const resultTitle = resultPage.getTitle()
    expect(expected).toContain(resultPage) 
});
