import type { ABTestingOperations } from "../operations/abtesting_operations";
import type {Page,Locator} from "@playwright/test"

export class ABTestingPage implements ABTestingOperations{
    private titleLocator:Locator;
    private descriptionLocator:Locator;
    private page:Page

    constructor(page:Page){
        this.page = page;
        this.descriptionLocator = this.page.getByRole("paragraph")
        this.titleLocator = this.page.getByRole("heading")
    }
    getTitle(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getDescription(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    disableABTesting(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    enableABTesting(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}