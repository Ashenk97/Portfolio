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
    await expect(page.locator('#hero')).toContainText(/Test strategy/i);
    await expect(page.locator('#hero')).toContainText(/Graphic design/i);
    await expect(page.locator('#hero')).toContainText(/manual and exploratory testing/i);
    await expect(page.getByTestId('highlights')).toContainText(/Years in quality engineering/i);
    await expect(page.getByTestId('highlights')).toContainText(/Hackathon winner/i);
    await expect(page.getByTestId('highlights')).toContainText(/Second Class|2nd Upper/i);
    await expect(page.locator('#hero')).not.toContainText(/CTAL-TAE/i);
    await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
  });

  test('renders experience, lab, certifications, GENKI, and roadmap', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('#experience')).toContainText('WealthOS');
    await expect(page.locator('#experience')).toContainText('Pearson Lanka');
    await expect(page.locator('#experience')).toContainText(/Sep 2024/i);
    await expect(page.locator('#experience')).toContainText(/User Engagement/i);
    await expect(page.locator('#experience')).toContainText(/Associate Software Quality Engineer/i);

    await expect(page.locator('#lab')).toContainText(/Playwright/i);
    await expect(page.locator('#lab')).toContainText(/homepage\.spec\.ts/i);
    await expect(page.getByTestId('run-sanity-check')).toBeVisible();

    await expect(page.locator('#certifications')).toContainText(/ISTQB Certified Tester/i);
    await expect(page.locator('#certifications')).toContainText(/Test Automation Engineering/i);
    await expect(page.locator('#certifications')).toContainText(/Foundation Level/i);
    await expect(page.locator('#certifications')).toContainText(/Lean Awareness/i);
    await expect(page.locator('#certifications')).toContainText(/Pearson\+ Hackathon Winner/i);
    await expect(page.locator('#certifications')).toContainText(/Inclusive Learning Experience Explorer/i);

    await expect(page.locator('#education')).toContainText(/B\.Sc \(Hons\) in Information Technology/i);
    await expect(page.locator('#education')).toContainText(/Second Class Upper Division/i);
    await expect(page.locator('#education')).toContainText(/Wijeya Graphics/i);
    await expect(page.locator('#education')).toContainText(/Diploma in Multimedia/i);
    await expect(page.locator('#education')).not.toContainText(/Master of Science/i);
    await expect(page.locator('#education')).not.toContainText(/In progress/i);

    const genki = page.locator('[data-project="genki"]');
    await expect(genki).toBeVisible();
    await expect(genki).toContainText('GENKI');
    await expect(genki).toContainText(/streetwear and anime-inspired apparel/i);
    await expect(genki).toContainText(/I design and quality-gate/i);
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
    await expect(page.locator('#roadmap')).toContainText(/Planning to do/i);
    await expect(page.locator('#roadmap')).not.toContainText(/In progress/i);

    await expect(page.locator('#stack')).toContainText(/The toolkit/i);
    await expect(page.locator('#stack')).not.toContainText(/Playwright fixture/i);
    await expect(page.locator('[data-tech="Playwright"]')).toBeVisible();
    await expect(page.locator('[data-tech="TypeScript"]')).toBeVisible();
    await expect(page.locator('[data-tech="Cursor"]')).toBeVisible();
    await expect(page.locator('#stack')).toContainText(/Android/i);
    await expect(page.locator('#stack')).toContainText(/Firebase/i);
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
    await expect(page.locator('#experience')).toBeVisible();

    await nav.getByRole('link', { name: 'Lab' }).click();
    await expect(page).toHaveURL(/#lab$/);
    await expect(page.locator('#lab')).toBeVisible();

    await nav.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator('#projects')).toBeVisible();

    await nav.getByRole('link', { name: 'Roadmap' }).click();
    await expect(page).toHaveURL(/#roadmap$/);
    await expect(page.locator('#roadmap')).toBeVisible();

    await nav.getByRole('link', { name: 'Tech stack' }).click();
    await expect(page).toHaveURL(/#stack$/);
    await expect(page.locator('#stack')).toBeVisible();
  });
});
