import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page } from "@playwright/test";
import { PageObjectManager } from "./PageObjectManager";

export class CustomWorld extends World {
    // ADICIONADO ! EM TODAS PARA EVITAR A LINHA VERMELHA
    context!: BrowserContext;
    page!: Page;
    pageObjectManager!: PageObjectManager;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);