///<reference types = "Cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    //returning false here prevents Cypress from
    //failing the test
    return false
})
it('regestration on site', () => {
    cy.visit('https://team.greatalbum.net/user/login?r4032login_destination=/stream')
    cy.get('#edit-name-or-mail').should('be.visible')
    cy.get('#edit-name-or-mail').type('mykytaborysov190@gmail.com')
    cy.get('#edit-pass').type('Q24081999q')
    cy.get('#edit-submit').click()
    cy.get('.d-none > a').click()
    cy.get('#edit-title').type('Test1')
    cy.get('#edit-submit').click()
    cy.get('#edit-submit').click()
    cy.get('h3').invoke('text').should('eq', 'Test1')
  })