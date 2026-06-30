import { test, expect } from '@playwright/test';
import { DownloadSecurePage } from '../implementation/download_secure_page.js';

test('download secure - expected vs actual', async ({ page }) => {
  const p = new DownloadSecurePage(page);
  await p.open();

  const actual = await p.getAvailableDownloadNames();

  const expected = ['random_data.txt'];

  for (const f of expected) {
    expect(actual).toContain(f);
  }

  if (actual.length > 0) {
    const filename = actual[0];
    const download = await p.downloadFile(filename);
    expect(download.suggestedFilename()).toBe(filename);
  }
});
