const timeOutNumber = 20000

Cypress.Commands.add('navigateToURL', (link) => {
    cy.visit(link, {
       timeout: 25000
    })
 })

// -- Define Action method --
Cypress.Commands.add('clickObject', (selector) => {
    cy.get(selector, { timeOut: timeOutNumber }).first().click({ multiple: false, force: true })
})

Cypress.Commands.add('inputText', (selector,textInput) => {
    cy.get(selector, { timeout: timeOutNumber }).first().clear({force: true})
    cy.wait(1000)
    cy.get(selector, { timeout: timeOutNumber }).first().type(textInput,{force: true })
})

Cypress.Commands.add('isSelectorExist', (selector) => {
    cy.get(selector, { timeout: timeOutNumber }).should('exist')
})

Cypress.Commands.add('isSelectorNotExist', (selector) => {
    cy.get(selector, { timeout: timeOutNumber }).should('not.exist')
})

Cypress.Commands.add('verifySelectorContainsText', (selector, text) => {
   cy.get(selector, { timeout: timeOutNumber }).should('contain', text)
})