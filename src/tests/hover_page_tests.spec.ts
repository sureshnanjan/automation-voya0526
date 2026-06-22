import {test,expect} from '@playwright/test'
import type { HoversPageOperation } from '../operations/hovers_page_operations';
import { HoversPage } from '../implementation/hover_page';
test("Title is OK", async ({page})=>{
    // Pre Condition
    //   - Access the hovers page
    // - What to expect - Hovers
    // Action
    // What exactly is displayed
    // Validate its meet expectation
    const hoverpage:HoversPageOperation = await HoversPage.Create(page);
    const expected = "Hovers1";
    const actual_title = await hoverpage.getTitle();
    expect(actual_title).toEqual(expected)

});
test("Correct number on IMages are shown", async ({page})=>{
    // AAA  Arrange Act Assert
    // Given When Then
    const hoverpage:HoversPageOperation = await HoversPage.Create(page);
    const expected_count = 3;
    const actual_count = await hoverpage.getAvailableImageCount();
    expect(actual_count).toEqual(expected_count);
})
//test("Hover works for Image1");
//test("Hover works for Image2");
//test("Hover works for Image3");