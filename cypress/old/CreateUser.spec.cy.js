describe('Create User Errors', () => {
  const userEmail = "mathias.pragmatica+1@gmail.com";
  const userPass = "Test123!";
  
  beforeEach(() => {
    cy.visit('/users/sign-up');
  });

  it('Create a new user', () => {
    // Preenchendo os campos de e-mail e senha
      
    cy.get('.jaqerT > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear('');
    cy.get('.jaqerT > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type('New');
    cy.get('.hGlDlo > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear();
    cy.get('.hGlDlo > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type('User');
    cy.get('#sign-up > :nth-child(2) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear();
    cy.get('#sign-up > :nth-child(2) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type('Company');
    cy.get(':nth-child(3) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear();
    cy.get(':nth-child(3) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type(userEmail);
    cy.get(':nth-child(4) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear();
    cy.get(':nth-child(4) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').type(userPass);
//    cy.get('[data-cy="SignUp"]').click();
    
  });
});