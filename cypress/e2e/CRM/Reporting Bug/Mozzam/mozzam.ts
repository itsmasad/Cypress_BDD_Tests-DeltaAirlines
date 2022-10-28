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

And('Provide the data',() =>{
    cy.get('#issue_id').invoke('text').then((IssuedID) =>{

        cy.get('#priority').select(0)
    // High = 0 , Medium = 1 , Low = 2

    const subject = "Required API to inform if user is force logged out"
    const description = "Provide API to DTS Cargo application android application developer to inform if driver is force logged out from the web. and he is not connected to the internet at the same time, so he can proceed with bug fixing"
    
    cy.get('#assigned_user_name').type('Moazzam{downArrow}{enter}')
    cy.get('#name').type(subject)
    cy.get('#parent_type').select(4)


    
    cy.get('#status').select(0)
    cy.get('#amodule').select(9)
    cy.get('#products').select(4)

    
    
    cy.get('#description').type(description)
   
    cy.get('#assigned_user_name').type('Arshad{downArrow}{enter}')
    cy.get('#team').select(8)
    cy.get('#type').select(1)

    // cy.wait(3000)
    // cy.get(':nth-child(5) > #SAVE').click()

    // cy.wait(8000)
    // cy.get('#issue_id').invoke('text').then((compare) =>{
    //     expect(compare).to.be.oneOf([IssuedID])
    // })

})




})