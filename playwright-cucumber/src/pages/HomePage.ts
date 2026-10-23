import { Page, Locator } from '@playwright/test';
const HomeURL ="https://practice.sdetunicorns.com/";

export class HomePage {
  readonly page: Page;
  readonly mainHeading: Locator;
  readonly specialSaleHeading: Locator;
  readonly learnMoreLink: Locator;
  readonly learnMoreButton  : Locator;

  constructor(page: Page) {
    this.page = page;
    this.mainHeading = this.page.getByRole('heading', { name: 'Think different. Make different.' });
    this.specialSaleHeading = this.page.getByText('Special Sale: Elevate Your SDET Skills!');
    this.learnMoreLink = this.page.getByRole('link', { name: 'Learn More' }).first();
    this.learnMoreButton = this.page.locator('span.elementor-button-content-wrapper', { hasText: 'Learn More' }).first();
  }
  async navigateToHomePage(): Promise<void>    {
    await this.page.goto(HomeURL, { waitUntil: 'domcontentloaded' });
  }
  async clickLearnMoreLink(): Promise<void> {
    await this.learnMoreLink.click();
  }

  async clickLearnMoreButtonNewtab(): Promise<Page> {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.learnMoreButton.click(),
    ]);
    await newTab.waitForLoadState();

    return newTab;
  }

  //verifymain heading
  async verifyMainHeading(expectedHeading: string): Promise<void> {
    const actualHeading = await this.mainHeading.textContent();
    if (actualHeading?.trim() !== expectedHeading) {
      throw new Error(`Expected main heading to be "${expectedHeading}", but got "${actualHeading}"`);
    }
  }
}

