
import {Browser, BrowserContext, Page} from '@playwright/test';
import { setWorldConstructor, World, After, Before } from '@cucumber/cucumber';

export class CustomWorld extends World {
  browser: Browser; 
  page: Page;
  scenarioName:'';
}
Before(async function name(this.CustomWorld) {
  this.browser = await this.playwright.chromium.launch({ headless: true });
  const context: BrowserContext = await this.browser.newContext();
  this.page = await context.newPage();
})