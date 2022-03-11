describe("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render the homepage", () => {
    cy.get("[data-cy=app]").should("exist");

  })
});
