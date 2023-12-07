export const searchMediawiki = (keyword,limit,offset) => {
    cy.request({
        method: "GET",
        url: `/api.php?action=query&format=json&list=search&formatversion=2&srsearch=${keyword}&srlimit=${limit}&sroffset=${offset}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        failOnStatusCode:false
    })
};