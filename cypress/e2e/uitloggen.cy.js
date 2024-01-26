describe("uitloggen", () => {
  it("account kiezen en weer uitloggen", () => {
    cy.visit("localhost:3000");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="submit-loguit"]').click();
  });
});
