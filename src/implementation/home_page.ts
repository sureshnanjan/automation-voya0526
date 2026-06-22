import { HomePageOperation, type LogoDetail } from "../operations/home_page_opertions.js";
import { Locator, type Page } from "@playwright/test";
export class HomePage implements HomePageOperation{
    private title_locator:Locator;
    private page:Page;

    constructor(page:Page){
        this.page = page;
        this.title_locator = page.locator('h1');
        this.goToHome();
    }
     private async goToHome(){
        this.page.goto('https://the-internet.herokuapp.com/');
     }

    async getTitle(): Promise<string|null> {
        return this.title_locator.textContent();
    }
    async getSubTitle(): Promise<string> {
        return (await this.page.locator('h2').textContent()) ?? "";
    }
    getLogoDetail(): Promise<LogoDetail> {
        throw new Error("Method not implemented.");
    }
    getAvailableExamples(): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    goToExample(examplename: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}