// example-test.spec.js
import { test, expect } from '@playwright/test';

test('singletone test ', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Google-এর টাইটল চেক (অপশনাল)
  await expect(page).toHaveTitle(/Google/);
await page.waitForTimeout(1000);
  // // সার্চ বক্সে টেক্সট লেখা (সবচেয়ে সিম্পল)
  await page.locator('#APjFqb')
    .fill('SelectorsHub');

  // Google Search বাটন ক্লিক
  await page
    .getByRole('button', { name: 'Google Search' })
    .click();

  // রেজাল্ট পেজ লোড হওয়ার জন্য অপেক্ষা
  await page.waitForURL('**/search**');

  // অপেক্ষা করা (দেখার জন্য)
  await page.waitForTimeout(3000);

  // চেক করা যে রেজাল্ট এসেছে (অপশনাল)
  await expect(page.getByText('SelectorsHub')).toBeVisible();
});