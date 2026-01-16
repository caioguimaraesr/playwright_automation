import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../src/support/world";

Given('que o usuário está na página de login', async function(this: CustomWorld) {
    await this.pageObjectManager.getLoginPage().navigate();
});

When('ele insere credenciais válidas', async function(this: CustomWorld) {
    await this.pageObjectManager.getLoginPage().login('standard_user', 'secret_sauce');
});