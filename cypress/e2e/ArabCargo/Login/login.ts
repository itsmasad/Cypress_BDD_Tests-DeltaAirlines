// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// User try to sign in with valid credentials

Given("I navigate to login page", () => {
  cy.visit("https://sys3.diamondtms.co.uk/Dev_ArabCargo/LogIn");
});

When("Login with valid credentials", () => {
  cy.get('#tbUserName_lg').type('Admin')
  cy.get('#tbPass_lg').type('123123{enter}')
});

Then("Landing page should appear",() =>{

  cy.get('.logo > img').should('have.attr', 'src', '/Dev_ArabCargo/Assets/images/logo-w.png')

})

// User try to sign in with invalid Username

When("Login with invalid Username", () => {
  cy.get('#tbUserName_lg').type('Admin1')
  cy.get('#tbPass_lg').type('123123{enter}')

});

Then("User should get an error regarding wrong username",() =>{

  cy.get('.col-md-12 > .img-fluid').should('have.attr', 'src', '/Dev_ArabCargo/Assets/images/logo.png')

  cy.get('.ajs-message').should('have.text', 'UserName is Invalid')

})

// User try to sign in with invalid password

When("Login with invalid password", () => {
  cy.get('#tbUserName_lg').type('Admin')
  cy.get('#tbPass_lg').type('1231234{enter}')
 
});

Then("User should get an error regarding wrong password",() =>{

  cy.get('.col-md-12 > .img-fluid').should('have.attr', 'src', '/Dev_ArabCargo/Assets/images/logo.png')

  cy.get('.ajs-message').should('have.text', 'Password is Invalid')

})


// User try to Sign in with Valid credentials and add some space in the end of Username

When("Login with valid credentials but spaces after username", () => {
  cy.get('#tbUserName_lg').type('Admin  ')
  cy.get('#tbPass_lg').type('123123{enter}')
});


// User try to Sign in with Valid credentials and add some space in the end of password

When("Login with valid credentials but spaces after password", () => {
  cy.get('#tbUserName_lg').type('Admin')
  cy.get('#tbPass_lg').type('123123  {enter}')
});

// User try to Sign in without Username

When("Login with only password", () => {
  cy.get('#tbPass_lg').type('123123{enter}')
});

Then("User should get an error for not entering username or password",() =>{

  cy.get('.col-md-12 > .img-fluid').should('have.attr', 'src', '/Dev_ArabCargo/Assets/images/logo.png')

  cy.get('.ajs-message').should('have.text', 'Please enter username or password.')

})

// User try to Sign in without Password

When("Login with only username", () => {
  cy.get('#tbUserName_lg').type('Admin{enter}')
});

// Sign in without Caps when password actually is in small and caps both

When("Login with valid credentials but password in caps", () => {
  cy.get('#tbUserName_lg').type('Demo')
  cy.get('#tbPass_lg').type('PASSWORD{enter}')
});
