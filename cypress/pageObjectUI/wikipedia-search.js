const searchInPanel=".oo-ui-buttonElement-button[aria-controls=mw-advancedSearch-expandable-namespaces][aria-expanded=false]"
const searchField=".cdx-text-input__input"
const keyword="Software "
const searchFooter=".cdx-typeahead-search__search-footer__query"
const searchExisted=".mw-search-exists"
const lablel1="There is a page named "
const lablel2=" on Wikipedia"
const discussionCheckbox="[type=checkbox][value=discussion]"
const helpCheckbox="[type=checkbox][value=generalHelp]"
const allCheckbox="[type=checkbox][value=all]"
const searchInLabel=".oo-ui-labelElement-label"
export class wikiSearchPage {

    clicksearchInPanel() {
        cy.wait(1000)
        cy.clickObject(searchInPanel)
      }
      inputSearchField() {
        cy.inputText(searchField, keyword)
      }
      getsearchFooter(){
        cy.isSelectorExist(searchFooter)
      }
      searchFooterText(){
        cy.verifySelectorContainsText(searchFooter,keyword.trim())
      }
      clicksearchFooter() {
        cy.wait(1000)
        cy.clickObject(searchFooter)
      }
      searchExistedText(){
        cy.verifySelectorContainsText(searchExisted,keyword.trim())
      }
      searchExistedText1(){
        cy.verifySelectorContainsText(searchExisted,lablel1)
      }
      searchExistedText2(){
        cy.verifySelectorContainsText(searchExisted,lablel2)
      }
      checkDiscussionbox(){
        cy.get(discussionCheckbox).check()
      }
      checkHelpBox(){
        cy.get(helpCheckbox).check()
      }
      checkAllBox(){
        cy.get(allCheckbox).check()
      }
      containText(){
        cy.verifySelectorContainsText(searchInLabel,keyword.trim())
      }
}