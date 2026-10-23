import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  timeout: 30_000,
  fullyParallel: true,
  reporter: 'list',
  use: {
    headless: true,
    trace: 'on-first-retry',
  },
});
