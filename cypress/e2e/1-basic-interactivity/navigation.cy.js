/// <reference types="cypress" />
import endpoints from "../../fixtures/endpoints.json";

[
  // "Without",
  "with"
].map((test) => {
  const havePrivateKey = test === "with";

  context(`Navigation - ${test} private key`, () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/marvel-comics/");
    });

    endpoints.map(({ endpoint }) => {
      describe(endpoint, () => {
        it("Click && Refresh, get data, show content", () => {
          cy.clickedTab(endpoint, havePrivateKey);
        });
      });
    });
  });
});
