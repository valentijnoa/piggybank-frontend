describe("login", () => {
  it("kan account naam veranderen", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="submit"]').click();
  });
});
