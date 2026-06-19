import type { HomePageOperation,  LogoDetail } from "../operations/home_page_operations.js";
import type { Locator, Page } from "@playwright/test";
export class HomePage implements HomePageOperation{
    private title_locator:Locator;
    private sub_title_locator:Locator;
    private example_locator:Locator;
    private page:Page;

    constructor(page:Page){
        this.page = page;
        this.title_locator = page.locator('heading').filter().first();
        this.sub_title_locator = page.locator('h2');
        this.example_locator = page.getByRole("listitem").getByRole("link");
        this.goToHome();
        //this.page.goto('https://the-internet.herokuapp.com/')
    }
     private async goToHome(){
        await this.page.goto('https://the-internet.herokuapp.com/');
        await this.page.waitForLoadState("domcontentloaded")
     }

    getTitle(): Promise<string|null> {
        return this.title_locator.textContent();
    }
    getSubTitle(): Promise<string|null> {
        return this.sub_title_locator.textContent();
    }
    getLogoDetail(): Promise<LogoDetail> {
        throw new Error("Method not implemented.");
    }
    getAvailableExamples(): Promise<string[]> {
        return this.example_locator.allTextContents();
    }
    goToExample(examplename: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}