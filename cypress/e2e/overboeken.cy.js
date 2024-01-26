describe("overboeken", () => {
  it("kan naar de overboeken pagina gaan", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="submit"]').click();
    cy.visit("http://localhost:3000/transfer");

    cy.get('[data-cy="to-account-dropdown"]').select("2");

    cy.get('[data-cy="amount-input"]').type("10");

    cy.get('[data-cy="description-input"]').type("10 euro overgeboekt");
    cy.get('[data-cy="submit-button"]').click();
  });
});
