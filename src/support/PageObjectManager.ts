import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"; // REMOVIDO O .ts

export class PageObjectManager {
    private page: Page;
    private loginPage!: LoginPage; // ADICIONADO O !

    constructor(page: Page) {
        this.page = page;
    }

    getLoginPage(): LoginPage {
        return this.loginPage || (this.loginPage = new LoginPage(this.page));
    }
}