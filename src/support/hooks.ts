import { Before, After, BeforeAll, AfterAll, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { CustomWorld } from "./world";
import { PageObjectManager } from "./PageObjectManager";

// ESSA LINHA RESOLVE O ERRO DE TIMEOUT (image_8ad7c9.png)
setDefaultTimeout(60000);

let browser: Browser;

BeforeAll(async function() {
    browser = await chromium.launch({ 
        headless: false, // Deixei false para você ver o navegador abrindo
        slowMo: 100 
    });
});

Before(async function(this: CustomWorld) {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.pageObjectManager = new PageObjectManager(this.page);
});

After(async function(this: CustomWorld) {
    await this.page.close();
    await this.context.close();
});

AfterAll(async function() {
    await browser.close();
});