// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("showContent", (havePrivateKey) => {
  if (havePrivateKey) cy.get("ul div").should("be.visible");
  else cy.get("main p").should("be.visible");
});

Cypress.Commands.add("clickedTab", (endpoint, havePrivateKey) => {
  // Click in the tab
  cy.get(`[href='/marvel-comics/${endpoint}']`).click();

  // Show content
  cy.showContent(havePrivateKey);

  // Refresh the page
  cy.reload();
  
  // Show content
  cy.showContent(havePrivateKey);
  
  // Refresh the page without using the cache
  cy.reload(true);

  // Show content
  cy.showContent(havePrivateKey);
});
