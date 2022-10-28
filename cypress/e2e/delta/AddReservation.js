describe('My First Test', () => {
    it('finds the content "type"', () => {
      cy.visit('https://cabtreasurecloud5.com/Delta_Demo/Authentication/Index')
  


      cy.get('#UserName').type('khawar@eurosofttech.co.uk')
      cy.get('#Password').type('CD5S1wSKASV#Umc')
      cy.get('#btnLogin').click()

      cy.wait(5000)
    // cy.xpath('//*[@id="navbarDropdownMenuLink"]').click()
      
      cy.get(':nth-child(1) > #navbarDropdownMenuLink').click()

    })
  })