/// <reference types="cypress" />

describe("Search Mediawiki API Automation Test", () => {
    let totalhits
    before(function () {
        cy.fixture('keywords').then(function (keywordInput) {
            globalThis.keywordInput = keywordInput;
        })
    })

    it("Verify the first 500 search result contain keyword in their title or snippet", () => {
        cy.searchMediawiki(keywordInput.normalKeyword, 500, 0).then(response => {
            totalhits=response.body.query.searchinfo.totalhits
            for(let i = 0; i < 500; i++){
                if ((response.body.query.search[i].snippet.toLowerCase()).includes(keywordInput.normalKeyword)||(response.body.query.search[i].title.toLowerCase()).includes(keywordInput.normalKeyword)){
                   cy.log(response.body.query.search[i].title)
                } 
                else {
                    cy.log("This search result does not contain the keyword: " +response.body.query.search[i].title)
                    expect(response.body.query.search[i].snippet.toLowerCase()).includes(keywordInput.normalKeyword)||(response.body.query.search[i].title.toLowerCase()).includes(keywordInput.normalKeyword);
                }
            }
        });
    });
    it("Verify the last 500 search result contain keyword in their title or snippet", () => {
        cy.searchMediawiki(keywordInput.normalKeyword, 500,totalhits-501).then(response => {
            for(let i = 0; i < 500; i++){
                if ((response.body.query.search[i].snippet.toLowerCase()).includes(keywordInput.normalKeyword)||(response.body.query.search[i].title.toLowerCase()).includes(keywordInput.normalKeyword)){
                    cy.log(response.body.query.search[i].title)
                } 
                else {
                cy.log("This search result does not contain the keyword: " +response.body.query.search[i].title)
                expect(response.body.query.search[i].snippet.toLowerCase()).includes(keywordInput.normalKeyword)||(response.body.query.search[i].title.toLowerCase()).includes(keywordInput.normalKeyword);
                }
            }
        });
    });
    it("Verify searching with an empty keyword", () => {
        cy.searchMediawiki(keywordInput.emptyKeyword, 500,0).then(response => {
            expect(response.status).to.eql(400);
            expect(response.body.error.code).to.eql("missingparam");
            expect(response.body.error.info).to.eql("The \"srsearch\" parameter must be set.");
        });
    });
    it("Verify searching with an maximum keyword", () => {
        cy.searchMediawiki(keywordInput.maximumKeyword, 500,0).then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.batchcomplete).to.eql(true);
            expect(response.body.query.searchinfo.totalhits).to.satisfy((num) => num >=0);
        });
    });
    it("Verify searching with keyword exceed maximum number of characters", () => {
        cy.searchMediawiki(keywordInput.exceedMaxKeyword, 500,0).then(response => {
            expect(response.status).to.eql(400);
            expect(response.body.error.code).to.eql("cirrussearch-query-too-long");
            expect(response.body.error.info).to.eql("Search request is longer than the maximum allowed length. (Actual: 301; allowed: 300)");
        });
    });
    it("Verify searching with offset = (totalhits -1) and limit 1 will return the last item from the search result", () => {
        cy.searchMediawiki(keywordInput.normalKeyword, 1,totalhits-1).then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.batchcomplete).to.eql(true);
            expect(response.body.query.searchinfo.totalhits).to.eql(totalhits);
            expect(response.body.continue).to.not.exist
        });
    });
    it("Verify searching a keyword with space", () => {
        const textsArray = keywordInput.keywordWithSpace.split(" ");
        cy.searchMediawiki(keywordInput.keywordWithSpace, 1,0).then(response => {
            expect(response.status).to.eql(200);
            expect(response.body.batchcomplete).to.eql(true);
            Cypress._.each(textsArray, (textsArray) => {
                expect(response.body.query.search[0].title.toLowerCase()).includes(textsArray)
              })
        });
    });
    it("Verify user cannot input invalid offset", () => {
        cy.searchMediawiki(keywordInput.normalKeyword, 1,'test').then(response => {
            expect(response.status).to.eql(400);
            expect(response.body.error.code).to.eql("badinteger");
            expect(response.body.error.info).to.eql("Invalid value \"gf\" for integer parameter \"sroffset\".");
        });
    });
})  