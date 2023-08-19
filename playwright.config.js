import { defineConfig } from '@playwright/test';

require('dotenv').config();

export default defineConfig({
  testDir: './tests',
  globalSetup: './global-setup',

  reporter: [['list'], ['html', {   open: 'always' }]],
  // retries: 1,
  // repeatEach: 4,
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    //base url to use
    baseURL: 'http://10.176.18.211:1038',
    // storageState: 'authenticationData.json',
    extraHTTPHeaders: {
      // Assuming personal access token available in the environment.
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Content-Type': 'application/json'
    },
  }, 
});