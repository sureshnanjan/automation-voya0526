import type { Download, Page } from '@playwright/test';

export class DownloadSecurePage {
  private page: Page;
  private url = 'https://admin:admin@the-internet.herokuapp.com/download_secure';

  constructor(page: Page) {
    this.page = page;
  }

  async open(): Promise<void> {
    await this.page.goto(this.url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getAvailableDownloadNames(): Promise<string[]> {
    // Target only the example container which lists downloadable files
    return await this.page.locator('div.example a').allTextContents();
  }

  async downloadFile(filename: string): Promise<Download> {
    const downloadPromise = this.page.waitForEvent('download');
    // Click the file link inside the example container matching the filename
    const fileLink = this.page.locator('div.example a', { hasText: filename }).first();
    await fileLink.click();
    return await downloadPromise;
  }
}
