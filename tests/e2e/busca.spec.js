import { test, expect } from '@playwright/test';

test('deve abrir a home e salvar evidência', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Hub de Leitura/);
  await page.screenshot({ path: 'reports/evidencia-home.png', fullPage: true });
});
