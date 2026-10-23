import {expect, Page, Locator } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly inventoryItems: Locator;
    readonly cartLink: Locator;
    readonly cartBadge: Locator;
    readonly sortDropdown: Locator;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('[data-test="title"]');
        this.inventoryItems = page.locator('[data-test="inventory_item"]');
        this.cartLink = page.locator('[data-test="shopping_cart_link"]');
        this.cartBadge = page.locator('[data-test="shopping_cart_badge"]');
        this.sortDropdown = page.locator('[data-test="product_sort_container"]');
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.locator('[data-test="logout_sidebar_link"]');

    async navigateToInventoryPage(): Promise<void> {
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(this.pageTitle).toHaveText('Products');
    
    }
    async getInventoryItemsCount(): Promise<number> {
        return await this.inventoryItems.count();
    }
    async addItemToCart(itemName: string): Promise<void> {
        const product= this.inventoryItems.filter({ hasText: itemName });
        await product.getByRole('button', { name: 'Add to cart' }).click();
    }

      async removeFromCart(itemName: string): Promise<void> {
        const product= this.inventoryItems.filter({ hasText: itemName });
        await product.getByRole('button', { name: 'Remove' }).click();
    }



    
}

