import type { HoversPageOperation } from "../operations/hovers_page_operations";
import type {Locator,Page} from '@playwright/test'

export class HoversPage implements HoversPageOperation {
    private titleLocator:Locator;
    private imageLocator:Locator;
    private page:Page;

    private constructor(page:Page){
        this.page = page
        this.titleLocator = page.getByRole('heading');
        //this.imageLocator = page.getByRole('img')
        this.imageLocator = page.locator("//*[@id='content']//img")

    }
    async getForkMeDetails(): Promise<string> {
        const forkMeLink = this.page.locator("a[href*='github.com']").first();
        return forkMeLink.getAttribute('href') || '';
    }
    async getFooterDetails(): Promise<string> {
        const footer = this.page.locator('footer');
        return footer.innerText();
    }
    static async Create(page:Page){
        const instance = new HoversPage(page);
        await page.goto('https://the-internet.herokuapp.com/hovers');
        return instance;

    }
    getTitle(): Promise<string> {
        return this.titleLocator.innerText()
    }
    async getAvailableImageCount(): Promise<number> {
        const images = await this.imageLocator.all()
        return images.length
    }
}