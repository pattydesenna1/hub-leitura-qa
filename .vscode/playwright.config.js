import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests/e2e',
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: process.env.HUB_LEITURA_BASE_URL || process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});