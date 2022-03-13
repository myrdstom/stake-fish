describe("Exchange details", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render the exchange details page", () => {
    cy.intercept({
      method: "GET",
      url: "https://api.coingecko.com/api/v3/**"
    }).as("nextPage");
    cy.get("[data-cy=exchanges]")
      .should("exist")
      .find("[data-cy=name]")
      .first()
      .then(message => {
        cy.visit(`/${message}`)
          .wait("@nextPage")
          .get("[data-cy=exchange-name]").should("be.visible");
      });
  });
});
