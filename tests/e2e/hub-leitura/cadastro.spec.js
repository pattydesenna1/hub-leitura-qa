import fs from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';

test.describe('Fluxo de cadastro do Hub de Leitura', () => {
  test.use({ viewport: { width: 1920, height: 1080 } });

  test('deve tentar realizar o cadastro e registrar o estado atual da tela', async ({ page }) => {
    const evidenceDir = process.env.HUB_LEITURA_EVIDENCIAS_DIR || 'tests/evidencias/hub-leitura';
    const timeout = Number(process.env.HUB_LEITURA_TIMEOUT) || 5000;
    const userName = `QA ${Date.now()}`;
    const email = `${Date.now()}-${(process.env.HUB_LEITURA_USER || 'qa@teste.com').replace(/[^a-zA-Z0-9]/g, '-')}`;
    const password = process.env.HUB_LEITURA_PASSWORD || 'Senha123!';

    page.setDefaultTimeout(timeout);

    await test.step('Abrir a página de cadastro', async () => {
      await page.goto('/register.html');
      await expect(page.getByRole('heading', { name: /cadastre-se/i })).toBeVisible();
    });

    await test.step('Preencher nome completo', async () => {
      await page.getByPlaceholder('Seu nome completo').fill(userName);
    });

    await test.step('Preencher e-mail', async () => {
      await page.getByPlaceholder('seu@email.com').fill(email);
    });

    await test.step('Preencher telefone', async () => {
      await page.getByPlaceholder('(11) 99999-9999').fill('(11) 99999-9999');
    });

    await test.step('Preencher senha', async () => {
      await page.getByPlaceholder('Crie uma senha segura').fill(password);
    });

    await test.step('Confirmar senha', async () => {
      await page.getByPlaceholder('Confirme sua senha').fill(password);
    });

    await test.step('Aceitar termos de uso', async () => {
      await page.getByRole('checkbox', { name: /termos de uso/i }).check();
    });

    await test.step('Enviar cadastro', async () => {
      await page.getByRole('button', { name: /criar conta/i }).click();
    });

    await test.step('Validar estado da tela após o envio', async () => {
      await expect(page.getByRole('heading', { name: /cadastre-se/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /criar conta/i })).toBeVisible();
      await expect(page).toHaveURL(/register\.html/);
    });

    await test.step('Salvar evidência', async () => {
      fs.mkdirSync(evidenceDir, { recursive: true });
      const screenshotPath = path.join(evidenceDir, `cadastro-${Date.now()}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      expect(fs.existsSync(screenshotPath)).toBeTruthy();
    });
  });
});
