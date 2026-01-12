import { test, expect } from '@playwright/test';

test.describe('Portfolio navigation', () => {
  test('loads home page', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/portfolio/i)).toBeVisible();
  });

  test('shows resume timeline', async ({ page }) => {
    await page.goto('/resume');
    await expect(page.getByRole('heading', { name: /working experience/i })).toBeVisible();
    await expect(page.getByText(/2015/)).toBeVisible();
  });

  test('shows contact form headline', async ({ page }) => {
    await page.goto('/contacts');
    await expect(page.getByText(/hire or contact me/i)).toBeVisible();
  });
});
