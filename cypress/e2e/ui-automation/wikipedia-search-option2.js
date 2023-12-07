/// <reference types="cypress" />
import {
    wikiSearchPage
} from '/cypress/pageObjectUI/wikipedia-search.js'
const searchPage=new wikiSearchPage()
describe("Wikipedia UI Automation Test", () => {

    it.only("Verify user can access Search Wikipedia for pages containing specific text page after clicking on the footer of auto-suggestion dropdown from the main page", () => {
        cy.navigateToURL(Cypress.env('wikiUrl'))
        searchPage.inputSearchField()
        searchPage.getsearchFooter()
        searchPage.searchFooterText()
        searchPage.clicksearchFooter()
        searchPage.searchExistedText()
        searchPage.searchExistedText1()
        searchPage.searchExistedText2()
    })
    it("Verify user can access Search Wikipedia for pages containing specific text page after clicking on the footer of auto-suggestion dropdown from the main page", () => {
        cy.navigateToURL(Cypress.env('searchUrl'))
        searchPage.clicksearchInPanel()
    })
})
