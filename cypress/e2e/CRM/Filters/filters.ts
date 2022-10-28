import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
// Import additional layer for reusing command



Given('Navigating to CRM',() => {

    cy.visit("https://eurocrm.co.uk/");

})

When('Providing The Username and password',() => {
    cy.get('#user_name').type('asad')
    cy.get('#username_password').type('Euro@786{enter}')
})

And('Navigate to create bug page',() =>{
    cy.get('.navbar-toggle').click()
    cy.contains('Tasks').click()
    cy.get('#moduleTab_Tasks > .suitepicon').click()
    cy.contains('Create Task').click()
})