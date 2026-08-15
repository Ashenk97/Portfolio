import { expect, test } from '@playwright/test';

test.describe('portfolio homepage', () => {
  test('loads with the QA introduction', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Ashen Kavinda/i);
    await expect(page.getByTestId('role-kicker')).toHaveText(
      /Software Quality Assurance Engineer/i,
    );
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Ashen Kavinda/i);
    await expect(page.getByText(/test automation and building reliable repositories/i)).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  });

  test('renders experience, certifications, GENKI, and core tooling', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#experience')).toContainText('WealthOS');
    await expect(page.locator('#experience')).toContainText('Pearson Lanka');
    await expect(page.locator('#experience')).toContainText(/Playwright with TypeScript/i);

    await expect(page.locator('#certifications')).toContainText(/ISTQB Certified Tester/i);
    await expect(page.locator('#certifications')).toContainText(/Foundation Level/i);

    const genki = page.locator('[data-project="genki"]');
    await expect(genki).toBeVisible();
    await expect(genki).toContainText('GENKI');
    await expect(genki).toContainText(/streetwear and anime-inspired apparel/i);

    await expect(page.locator('[data-tech="Playwright"]')).toBeVisible();
    await expect(page.locator('[data-tech="TypeScript"]')).toBeVisible();
    await expect(page.locator('[data-tech="Cursor"]')).toBeVisible();

    await expect(page.locator('#education')).toContainText('SLIIT');
  });

  test('primary navigation jumps to each section', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Primary' });

    await nav.getByRole('link', { name: 'Experience' }).click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator('#experience')).toBeInViewport();

    await nav.getByRole('link', { name: 'Certifications' }).click();
    await expect(page).toHaveURL(/#certifications$/);
    await expect(page.locator('#certifications')).toBeInViewport();

    await nav.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('#projects')).toBeInViewport();

    await nav.getByRole('link', { name: 'Tech stack' }).click();
    await expect(page).toHaveURL(/#stack$/);
    await expect(page.locator('#stack')).toBeInViewport();

    await nav.getByRole('link', { name: 'Education' }).click();
    await expect(page).toHaveURL(/#education$/);
    await expect(page.locator('#education')).toBeInViewport();
  });
});
