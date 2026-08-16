import { expect, test } from '@playwright/test';

test.describe('uses page', () => {
  test('lists the working setup', async ({ page }) => {
    await page.goto('/uses');

    await expect(page).toHaveTitle(/Uses/i);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/The setup behind the suites/i);
    await expect(page.locator('[data-uses="Cursor"]')).toBeVisible();
    await expect(page.locator('[data-uses="Playwright + TypeScript"]')).toBeVisible();
    await expect(page.locator('[data-uses="Windows Terminal + bash"]')).toBeVisible();
    await expect(page.locator('#uses')).toContainText(/JetBrains Mono/i);
  });

  test('primary navigation reaches uses from the homepage', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Uses' }).click();
    await expect(page).toHaveURL(/\/uses\/?$/);
    await expect(page.locator('#uses')).toBeVisible();
  });
});
