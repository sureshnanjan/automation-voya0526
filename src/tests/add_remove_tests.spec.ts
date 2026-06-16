import {test,expect,} from "@playwright/test";import
import { AddRemoveOperations } from "../operations/add_remove_operations.js";
test("Title is correct for Addd Remove Page",()=>{
    const adPage:AddRemoveOperations;
    const expected = "Add/Remove Elements";
    const actual_result = adPage.getTitle();
    expect(actual_result).toEqual(expected);
});
test("Adding a element works",()=>{
     const adPage:AddRemoveOperations;
     const expected = 1;
     adPage.addElement();
     const actual = adPage.getAddedElementsCount();
     expect(actual).toEqual(expected)
});
test("Adding more than one elment works",()=>{
    const adPage:AddRemoveOperations;
     const expected = 5;
     adPage.addElement();
     adPage.addElement();
     adPage.addElement();
     adPage.addElement();
     adPage.addElement();
     const actual = adPage.getAddedElementsCount();
     expect(actual).toEqual(expected)
});