it('Create a new user', () => {
  cy.visit('/');

  cy.get('.dYfgiB > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear();
  cy.get('.dYfgiB > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type('mathias.pragmatica@gmail.com');
  cy.get('.eKobcH > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear();
  cy.get('.eKobcH > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type('Test123!');
  cy.get('[data-cy="SignIn"]').click();

  // Check if redirected to a protected page
  cy.url().should('include', '/account/importers');
});