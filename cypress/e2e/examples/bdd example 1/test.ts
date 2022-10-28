/// <reference types='cypress' />
// Above line needed as indicator for Cypress

// Import Cucumber prefix
import { Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor';
// Import additional layer for reusing command
import Common from '../Common';

// Keyword need to be called by Feature files
Given('go to railsfriend page', () => {
    Common.goToLoginPage();
});

When('click Sign in on menu bar', () => {
    Common.clickSignin();
});

And('fill username with {string}', (username: string) => {
    Common.fillUsername(username)
});

And('fill password with {string}', (password: string) => {
    Common.fillPassword(password)
});

And('click Log in button', () => {
    Common.clickLogin();
});

Then('sign out displayed on menu bar', () => {
    Common.signOutDisplayed()
});