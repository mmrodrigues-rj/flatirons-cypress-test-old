describe('User Authentication Flow', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should validate email is required', () => {
    cy.get('[data-cy="html-input"]').eq(0)
      .clear()
      .blur();
    cy.get('.dYfgiB > .sc-liQGml > .sc-hJVpLM')
      .should('contain', 'Email is required');
  });

  it('Should show error when email is invalid and field loses focus', () => {
    cy.get('[data-cy="html-input"]').eq(0)
      .clear()
      .type('invalid-email')
      .blur();
    cy.get('.dYfgiB > .sc-liQGml > .sc-hJVpLM')
      .should('contain', 'Invalid email');
  });

  it('Should validate password is required', () => {
    cy.get('[data-cy="html-input"]').eq(1)
      .clear()
      .blur();
    cy.get('.eKobcH > .sc-liQGml > .sc-hJVpLM')
      .should('contain', 'This is a required field');
  });

  it('Should show error if email is not registered', () => {
    cy.get('[data-cy="html-input"]').eq(0).clear().type('user@server.com');
    cy.get('[data-cy="html-input"]').eq(1).clear().type('Password!');
    cy.get('[data-cy="SignIn"]').click();
    cy.get('.go3958317564').should('be.visible');
  });

  it('Should execute a valid login', () => {
    cy.get('[data-cy="html-input"]').eq(0).clear().type('mathias.pragmatica@gmail.com');
    cy.get('[data-cy="html-input"]').eq(1).clear().type('Test123!');
    cy.get('[data-cy="SignIn"]').click();
    cy.url().should('include', '/account/importers');
  });

});