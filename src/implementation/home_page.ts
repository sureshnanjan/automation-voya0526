import type { ABTestingOperations } from "../operations/abtesting_operations.js";
import type { HomePageOperation } from "../operations/home_page_operations.js";
import type { Locator, Page } from "@playwright/test";
import { ABTestingPage } from "./ABTestingPage.js";
import type { HerokuAppOperations } from "../operations/heroku_app_operations.js";
import { HoversPage } from "./hovers_page.js";
import { HerokuConfig } from "../../app.config.js";
export class HomePage implements HomePageOperation{
    private title_locator:Locator;
    private sub_title_locator:Locator;
    private example_locator:Locator;
    private page:Page;

    private constructor(page:Page){
        this.page = page;
        this.title_locator = page.getByRole('heading').filter().first();
        this.sub_title_locator = page.locator('h2');
        this.example_locator = page.getByRole("listitem").getByRole("link");
        //this.goToHome();
        //this.page.goto('https://the-internet.herokuapp.com/')
    }
    static async Create(page:Page):Promise<HomePageOperation>{
        const instance = new HomePage(page);
        await instance.goToHome();
        return instance;
    }
     private async goToHome(){
        await this.page.goto(HerokuConfig.url);
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
    goToExample(examplename: string): Promise<HerokuAppOperations> {
        this.page.getByRole("link",{name:`${examplename}`}).click();
        switch (examplename) {
            case "A/B Testing":
                return new Promise(resolve=>{
                    resolve(new ABTestingPage(this.page))
                });
            case "Add/ Remove Elements":
                return new Promise(resolve=>{
                    resolve(new AddRemovePage(this.page))
                });  
            case "Hovers":
                return new Promise(resolve=>{
                    resolve(new HoversPage(this.page))
                });                 
        
            default:
                return new Promise(resolve=>{
                    resolve(this);
                });       ;
        }
         
    }
}