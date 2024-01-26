describe("instellingen", () => {
  it("kan account naam veranderen", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="submit"]').click();
    cy.visit("http://localhost:3000/settings");
    cy.get('[data-cy="account-name-input"]').type("{selectall}{backspace}");
    cy.get('[data-cy="account-name-input"]').type("Rekening van Tester");
    cy.get('[data-cy="opslaan"]').click();
  });
});
