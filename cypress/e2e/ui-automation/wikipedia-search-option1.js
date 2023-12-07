/// <reference types="cypress" />
const helpLabel=['Wikipedia','Help']
const discussionLabel=['Talk','User talk','Wikipedia talk','File talk','MediaWiki talk','Template talk','Help talk','Category talk','Portal talk','Draft talk','TimedText talk','Module talk','Gadget talk','Gadget definition talk']
const allLabel=['(Article)','User','File','MediaWiki','Template','Category','Portal','Draft','TimedText','Module','Gadget','Gadget definition','Wikipedia','Help','Talk','User talk','Wikipedia talk','File talk','MediaWiki talk','Template talk','Help talk','Category talk','Portal talk','Draft talk','TimedText talk','Module talk','Gadget talk','Gadget definition talk']
describe("Wikipedia UI Automation Test", () => {
    it("Verify user can access Search Wikipedia for pages containing specific text page after clicking on the footer of auto-suggestion dropdown from the main page", () => {
        cy.visit(Cypress.env('wikiUrl'))
        cy.get(".cdx-text-input__input").type("Software ")
        cy.wait(5)
        cy.get(".cdx-typeahead-search__search-footer__query")
        .contains('strong',"Software")
        .click()
        cy.get(".mw-search-exists")
        .contains("There is a page named ")
        .contains('b'," on Wikipedia")
        .contains('a',"Software")
        cy.wait(10000)
    })
    it("Verify the Search in panel with 4 checkboxes selected&unselected", () => {
        cy.visit(Cypress.env('searchUrl'))
        cy.get(".oo-ui-buttonElement-button[aria-controls=mw-advancedSearch-expandable-namespaces][aria-expanded=false]").click()
        cy.get(".oo-ui-labelElement-label")
        .contains("(Article)")
        cy.get("[type=checkbox][value=discussion]").check()
        discussionLabel.forEach((discussionLabel) => {
            cy.get(".oo-ui-labelElement-label").contains(discussionLabel)
          })
        cy.get("[type=checkbox][value=generalHelp]").check()
        helpLabel.forEach((helpLabel) => {
            cy.get(".oo-ui-labelElement-label").contains(helpLabel)
          })
        cy.get("[type=checkbox][value=all]").check()
        allLabel.forEach((allLabel) => {
            cy.get(".oo-ui-labelElement-label").contains(allLabel)
          })
          cy.get("[type=checkbox][value=all]").uncheck()
          cy.wait(10000)
          cy.xpath("//div[@class='mw-advancedSearch-namespace-0 oo-ui-widget oo-ui-widget-enabled oo-ui-labelElement oo-ui-draggableElement oo-ui-draggableElement-handle oo-ui-draggableElement-undraggable oo-ui-tagItemWidget']").should('not.exist')
    })
})
