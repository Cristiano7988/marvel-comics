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
          if (havePrivateKey) cy.get("input[type=text]").type("d8a5a0870bfbd36aa551463c3bb67fd2d0cb6c24");
          cy.clickedTab(endpoint, havePrivateKey);
        });
      });
    });
  });
});
