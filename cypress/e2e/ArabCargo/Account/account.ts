// cypress/e2e/duckduckgo.ts
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

// User try to sign in with valid credentials

Given("I navigate to login page", () => {
  cy.visit("https://sys3.diamondtms.co.uk/Dev_ArabCargo/LogIn");
  cy.get('#tbUserName_lg').type('Admin')
  cy.get('#tbPass_lg').type('123123')
  cy.get('#btnLogIn_lg').click()
  cy.get('#mnuAccounts > .nav-link').click()
  cy.get('#mnuAccount').click()
});

And('Check if account form contains all the required fields and buttons',() => {
  cy.get('#tbAccountNumber_acc').should('be.visible')
  cy.get('#tbCompanyName_acc').should('be.visible')
  cy.get('#tbContactName_acc').should('be.visible')
  cy.get('#tbPhone_acc').should('be.visible')
  cy.get('#tbEmail_acc').should('be.visible')
  cy.get('#ddlInvoiceCurrency_acc').should('be.visible')
  cy.get('#tbDestinationAddress_acc').should('be.visible')
  cy.get('#tbCityDesc_acc').should('be.visible')
  cy.get('#tbAddressSearch_acc').should('be.visible')
  cy.get(':nth-child(2) > #ddlCountry_acc').should('be.visible')

  // cy.wait(15000)
  // cy.get('#tbAddress1_acc').type('Asad')
  // cy.get('#tbAddress2_acc').should('be.visible')
  // cy.get('#tbAddress3_acc').should('be.visible')
  // cy.get('#tbAddress4_acc').should('be.visible')
  // cy.get('#tbPCode_acc').should('be.visible')
  // cy.get('#saveBtnAccountInformation').should('be.visible')
  // cy.get('#cancelBtnAccountInformation').should('be.visible')
})

Then('This',() => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  cy.wait(5000)
  cy.get('#cancelBtnAccountInformation').click()
  // cy.contains('close').click()
 
})