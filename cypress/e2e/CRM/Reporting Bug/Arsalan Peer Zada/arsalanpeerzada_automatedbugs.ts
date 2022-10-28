import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
// Import additional layer for reusing command



Given('Navigating to CRM',() => {

    cy.visit("https://eurocrm.co.uk/");

})

When('Providing The Username and password',() => {

    cy.get('#user_name').type('asad')
    cy.get('#username_password').type('Euro@786{enter}')
    // Common.clickLogin()
})

And('Navigate to create bug page',() =>{
    cy.get('.navbar-toggle').click()
    cy.contains('Tasks').click()
    cy.get('#moduleTab_Tasks > .suitepicon').click()
    cy.contains('Create Task').click()
})

And('Provide the data',() =>{
    cy.get('#issue_id').invoke('text').then((IssuedID) =>{

    const subject = "App Crash Issue 001"
    const description = "When driver accept the ride, app crashes. and when driver re-open the application it does'nt take him to the ongoing ride page"
    
    cy.get('#assigned_user_name').type('Peer Zada{downArrow}{enter}')
    cy.get('#name').type(subject)
    cy.get('#parent_type').select(4)

    cy.get('#priority').select(1)
    // High = 0 , Medium = 1 , Low = 2

    cy.get('#status').select(0)
    cy.get('#amodule').select(9)
    cy.get('#products').select(4)
    
    cy.get('#description').type(description)
   
    cy.get('#team').select(1)
    cy.get('#type').select(1)
    // cy.wait(3000)
    // cy.get(':nth-child(5) > #SAVE').click()

    // cy.wait(8000)
    // cy.get('#issue_id').invoke('text').then((compare) =>{
    //     expect(compare).to.be.oneOf([IssuedID])
    // })

})




})