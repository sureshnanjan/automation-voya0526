import {test,expect,} from "@playwright/test";
import type { ABTestingOperations } from "../operations/abtesting_operations.js";
import type { HomePageOperation } from "../operations/home_page_operations.js";
import { HomePage } from "../implementation/home_page.js";

test("Title is OK",async ({page})=>{
    // Title is either AB Test Control | AB Test Variation 1
    const herokuapp:HomePageOperation = HomePage.Create(page)
    const resultPage:ABTestingOperations = herokuapp.goToExample("A/B Testing")
    const expected_result = ["AB Test Control", "AB Test Variation 1"]
    const actual = abtestPage.getTitle();
    expect(expected_result).toContain(actual)

});
test("Title is will always be NO ABTest if AB Testing disabled",()=>{
    // Title is either AB Test Control | AB Test Variation 1
    const abtestPage:ABTestingOperations;
    abtestPage.disableABTesting();
    const expected_result = "No AB Test"
    const actual = abtestPage.getTitle();
    expect(expected_result).toEqual(actual)

});
test("Title be Eother of the 2 options when AB Testing is enabled",()=>{
    // Title is either AB Test Control | AB Test Variation 1
    const abtestPage:ABTestingOperations;
    abtestPage.enableABTesting();
    const expected_result = ["AB Test Variation1","AB Testcontrol"]
    const actual = abtestPage.getTitle();
    expect(expected_result).toContain(actual)

});