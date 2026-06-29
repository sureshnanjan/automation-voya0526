import type { DragDropOperations } from "../operations/drag_drop_operations";
import type { Locator, Page } from "@playwright/test";

export class DragDropPage implements DragDropOperations{
    private title_locator:Locator;
    private elments_locator:Locator;
    private page:Page;
    constructor(page:Page){
        this.page = page;
        this.title_locator = page.getByRole('heading')
        this.elments_locator = page.locator('.column');
    }
    fetchTitle(): Promise<string|null> {
        return this.title_locator.textContent();
    }
    fetchElements(): Promise<string[]> {
        return this.elments_locator.allTextContents()
    }
    dragElement(pos1: number, pos2: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}