import { expect, test } from '@playwright/test';

test.describe('portfolio homepage', () => {
  test('loads with the QA introduction', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Ashen Kavinda/i);
    await expect(page.getByTestId('role-kicker')).toHaveText(
      /Senior Software Quality Assurance Engineer/i,
    );
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Ashen Kavinda/i);
    await expect(page.locator('#hero')).toContainText(
      /test automation strategy and build quality systems/i,
    );
    await expect(page.locator('#hero')).toContainText(/CTAL-TAE/i);
    await expect(page.locator('#hero')).toContainText(/Test Automation Engineering/i);
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  });

  test('renders experience, lab, certifications, GENKI, and roadmap', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#experience')).toContainText('WealthOS');
    await expect(page.locator('#experience')).toContainText('Pearson Lanka');

    await expect(page.locator('#lab')).toContainText(/Playwright/i);
    await expect(page.locator('#lab')).toContainText(/homepage\.spec\.ts/i);
    await expect(page.getByTestId('run-sanity-check')).toBeVisible();

    await expect(page.locator('#certifications')).toContainText(/ISTQB Certified Tester/i);
    await expect(page.locator('#certifications')).toContainText(/Test Automation Engineering/i);
    await expect(page.locator('#certifications')).toContainText(/Foundation Level/i);

    await expect(page.locator('#education')).toContainText(/Master of Science in Information Technology/i);
    await expect(page.locator('#education')).toContainText(/In progress/i);

    const genki = page.locator('[data-project="genki"]');
    await expect(genki).toBeVisible();
    await expect(genki).toContainText('GENKI');
    await expect(genki).toContainText(/streetwear and anime-inspired apparel/i);
    await expect(genki).toContainText(/Visual regressions gated/i);

    await expect(page.locator('[data-project="wealthos-automation"]')).toContainText(
      /40%/,
    );
    await expect(page.locator('[data-project="wealthos-automation"]')).toContainText(
      /Faster deploy confidence/i,
    );

    await expect(page.locator('#roadmap')).toContainText(/Advanced Level Test Automation Engineering/i);
    await expect(page.locator('#roadmap')).toContainText(/ISTQB AI Testing/i);
    await expect(page.locator('#roadmap')).toContainText(/Master of Science in IT/i);
    await expect(page.locator('#roadmap')).toContainText(/in progress/i);

    await expect(page.locator('#stack')).toContainText(/Playwright fixture/i);
    await expect(page.locator('#stack')).toContainText(/fixtures\/portfolio\.ts/i);
    await expect(page.locator('[data-tech="Playwright"]')).toBeVisible();
    await expect(page.locator('[data-tech="TypeScript"]')).toBeVisible();
    await expect(page.locator('[data-tech="Cursor"]')).toBeVisible();
  });

  test('lab sanity check prints a green run', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#lab')).toHaveAttribute('data-lab-ready', 'true');
    await page.getByTestId('run-sanity-check').click();
    await expect(page.getByTestId('lab-score')).toHaveText('3/3 passed', { timeout: 10_000 });
    await expect(page.locator('#lab')).toContainText(/3 passed \(6\.2s\)/i);
  });

  test('primary navigation jumps to each section', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation', { name: 'Primary' });

    await nav.getByRole('link', { name: 'Experience' }).click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator('#experience')).toBeInViewport();

    await nav.getByRole('link', { name: 'Lab' }).click();
    await expect(page).toHaveURL(/#lab$/);
    await expect(page.locator('#lab')).toBeInViewport();

    await nav.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('#projects')).toBeInViewport();

    await nav.getByRole('link', { name: 'Roadmap' }).click();
    await expect(page).toHaveURL(/#roadmap$/);
    await expect(page.locator('#roadmap')).toBeInViewport();

    await nav.getByRole('link', { name: 'Tech stack' }).click();
    await expect(page).toHaveURL(/#stack$/);
    await expect(page.locator('#stack')).toBeInViewport();
  });
});
