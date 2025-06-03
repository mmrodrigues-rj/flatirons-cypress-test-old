describe('User Registration Validation', () => {

  beforeEach(() => {
    cy.visit('/users/sign-up');
  });

  it('Should validate required fields', () => {
    cy.get('[data-cy="SignUp"]').click();
    cy.get('.jaqerT > .sc-liQGml > .sc-hJVpLM').should('be.visible');
    cy.get('.hGlDlo > .sc-liQGml > .sc-hJVpLM').should('be.visible');
    cy.get('#sign-up > :nth-child(2) > .sc-liQGml > .sc-hJVpLM').should('be.visible');
    cy.get(':nth-child(3) > .sc-liQGml > .sc-hJVpLM').should('be.visible');
    cy.get(':nth-child(4) > .sc-liQGml > .sc-hJVpLM').should('be.visible');
  });

  it('Should validate email format', () => {
    cy.get(':nth-child(3) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type('invalid-email');
    cy.get(':nth-child(3) > .sc-liQGml > .sc-hJVpLM').should('contain', 'Invalid email');
     
  });

  it('Should validate password strength', () => {
    // Should show error for less than 6 characters
    cy.get(':nth-child(4) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type('12345');
    cy.get(':nth-child(4) > .sc-liQGml > .sc-hJVpLM')
      .should('contain', 'Passwords must contain at least 6 characters and maximum of 128 characters, including at least 1 letter, 1 number and 1 special character.');
  });

  // Scenario: Password must contain at least one uppercase letter
  it('Should show error if password does not contain an uppercase letter', () => {
    // Only lowercase, number, and special character
    cy.get(':nth-child(4) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type('abcdef1!');
    cy.get(':nth-child(4) > .sc-liQGml > .sc-hJVpLM')
      .should('contain', 'Passwords must contain at least 6 characters and maximum of 128 characters, including at least 1 letter, 1 number and 1 special character.');
  });

  // Scenario: Password must contain at least one special character
  it('Should show error if password does not contain a special character', () => {
    // Uppercase, lowercase, and number, but no special character
    cy.get(':nth-child(4) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type('Abcdef1');
    cy.get(':nth-child(4) > .sc-liQGml > .sc-hJVpLM')
      .should('contain', 'Passwords must contain at least 6 characters and maximum of 128 characters, including at least 1 letter, 1 number and 1 special character.');
  });

});