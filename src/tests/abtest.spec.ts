import {test,expect,} from "@playwright/test";
import { ABTestingOperations } from "../operations/abtesting_operations.js";
test("Title is OK",()=>{
    // Title is either AB Test Control | AB Test Variation 1
    const abtestPage:ABTestingOperations;
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