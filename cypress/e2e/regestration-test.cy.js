///<reference types = "Cypress"/>
describe('template spec', () => { 
  
  it('regestration on site', () => {
    cy.visit('https://team.greatalbum.net/user/login?r4032login_destination=/stream')
    cy.get('.login-create-account > a').click()
    cy.get('#edit-mail').should('be.visible')
    cy.get('#edit-mail').click().type('uubriebn@gmail.com')
    cy.get('#edit-name').should('be.visible')
    cy.get('#edit-name').click().type('Nikita24')
    cy.get('#edit-submit').click()
  })
})