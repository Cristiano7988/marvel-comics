/// <reference types="cypress" />
import endpoints from "../../fixtures/endpoints.json";

// Insert the private key in line 16
["Without", "with"].map((test) => {
  const havePrivateKey = test === "with";

  context(`Navigation - ${test} private key`, () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/marvel-comics/");
    });

    endpoints.map(({ endpoint }) => {
      describe(endpoint, () => {
        it("Click && Refresh, get data, show content", () => {
          if (havePrivateKey) cy.get("input[type=text]").type("Insert Here the private key before run the test");
          cy.clickedTab(endpoint, havePrivateKey);
        });
      });
    });
  });
});
