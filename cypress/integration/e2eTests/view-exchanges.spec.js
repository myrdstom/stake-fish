describe("View Exchanges", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render the exchanges page", () => {
    cy.intercept({
      method: "GET",
      url: "https://api.coingecko.com/api/v3/**"
    }).as("nextPage");
    cy.wait("@nextPage")
      .get("[data-cy=exchanges]")
      .should("exist")
      .get("[data-cy=name]")
      .should("be.visible")
      .then(() => {
        cy.get("[data-cy=next-page]")
          .click()
          .wait("@nextPage")
          .get("[data-cy=page]")
          .should("be.visible")
          .and("contain", 2);
      });
  });
});
