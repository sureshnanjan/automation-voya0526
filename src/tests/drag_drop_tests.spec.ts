import {test,expect} from '@playwright/test'
import type {Page} from "@playwright/test"
import type { HomePageOperation } from '../operations/home_page_operations';
import type { DragDropOperations } from '../operations/drag_drop_operations';
import { GetHerokuAppHomePage } from '../utilities/AppHelper';
async function testTitle({page:Page}){
    /// AAA
    // Launch Heroku App
    const herokuhome:HomePageOperation| undefined = await GetHerokuAppHomePage(page);
    herokuhome?.goToExample("Drag and Drop");
    // NAvigate to Drag And Drop
    // Expected is "Drag and Drop"
    const expected_title = "Drag and Drop"
    const dragdropPage:DragDropOperations;
    // Get The title displayed on the page
    //const dragdroppage 
    const actual_ttle = dragdropPage.fetchTitle()
    // If it matches the expected pass / fail
    expect(actual_ttle).toEqual(expected_title)
}
test("Validate Title is Drag Drop", testTitle);
// Fixture
test("Validate there are 2 element A and B on page",async ({page})=>{
    // AAA
    const herokuhome:HomePageOperation| undefined = await GetHerokuAppHomePage(page);
    herokuhome?.goToExample("Drag and Drop");
    const expected_elements = ["A","B"]
    const d
    const actual_element = dragdropPage.fetchElements()
    expect(actual_element).toEqual(expected_elements)

})

test("A id first element when I open the Page" ,async ()=>{
    const herokuhome:HomePageOperation| undefined = await GetHerokuAppHomePage(page);
    herokuhome?.goToExample("Drag and Drop");
    const expected = "A"
    const actual_element = dragdropPage.fetchElements()[0]
    expect(expected).toEqual(actual_element)
});

test("Draging first element to 2nd works", async ()=>{
    // AAA
    const herokuhome:HomePageOperation| undefined = await GetHerokuAppHomePage(page);
    herokuhome?.goToExample("Drag and Drop");
    const expected = ["B", "A"]
    // Perform the drag drop
    drapDropPage.dragElement(1,2)
    const after_result = dragdropPage.fetchElements()
    expect(after_result).toEqual(expected)
})



