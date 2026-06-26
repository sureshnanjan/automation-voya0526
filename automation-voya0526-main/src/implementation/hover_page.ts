import type { HoversPageOperation } from "../operations/hovers_page_operations";
import type {Locator,Page} from '@playwright/test'

export class HoversPage implements HoversPageOperation {
    private titleLocator:Locator;
    private imageLocator:Locator;

    private constructor(page:Page){
        this.titleLocator = page.getByRole('heading');
        //this.imageLocator = page.getByRole('img')
        this.imageLocator = page.locator("//*[@id='content']//img")

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