import type { ContextMenuOperations } from "../operations/context_menu_operations.js";
import type { Page, Locator, Dialog } from '@playwright/test'

export class ContextMenuPage implements ContextMenuOperations{
    private page: Page;
    private titleLocator: Locator;
    private detailsLocator: Locator;
    private hotSpot: Locator;
    private _lastDialogMessage: string | null = null;
    private _lastDialog: Dialog | null = null;

    constructor(page: Page){
        this.page = page;
        // generic selectors that match typical context-menu example pages
        this.titleLocator = this.page.locator('h3');
        this.detailsLocator = this.page.locator('div.example p');
        this.hotSpot = this.page.locator('#hot-spot');

        // capture any dialog that appears so tests can inspect/accept it
        this.page.on('dialog', async (dialog) => {
            this._lastDialogMessage = dialog.message();
            this._lastDialog = dialog;
            await dialog.accept()
        });
        this.page.goto("https://the-internet.herokuapp.com/context_menu");
        this.page.waitForLoadState("domcontentloaded")
    }

    async getTitle(): Promise<string | null> {
        return await this.titleLocator.first().textContent();
    }

    async getFirstDetails(): Promise<string | null> {
        return await this.detailsLocator.first().textContent();
    }

    async getSecondDetails(): Promise<string | null> {
        const count = await this.detailsLocator.count();
        if (count > 1) return await this.detailsLocator.nth(1).textContent();
        return null;
    }

    async invokeContextMenu(): Promise<void> {
        // right-click the hotspot; if selector isn't present this will throw which is fine
        await this.hotSpot.click({ button: 'right' });
    }

    async getContextMenuMessage(): Promise<string | null> {
        // return the last dialog message captured (if any)
        return this._lastDialogMessage;
    }

    async acceptContextMenu(): Promise<void> {
        if (this._lastDialog) {
            await this._lastDialog.accept();
            // clear after accepting
            this._lastDialog = null;
            this._lastDialogMessage = null;
        }
    }
}