describe('User Authentication Flow', () => {
  let userEmail;
  const userPass = "Test123!";

  beforeEach(() => {
    cy.visit('/');
    // Alternate between fixed and random email for each test run
    userEmail = Math.random() < 0.5
      ? "mathias.pragmatica@gmail.com"
      : `user${Date.now()}@server.com`;
  });

  it('Should login or create a new user if not registered', () => {
    // Fill in the email and password fields
    cy.get('[data-cy="html-input"]').eq(0).clear().type(userEmail);
    cy.get('[data-cy="html-input"]').eq(1).clear().type(userPass);

    // Click the login button
    cy.get('[data-cy="SignIn"]').click();

    // Wait for possible error or redirect
    cy.wait(1000);

    // Check if error element exists (login failed)
    cy.get('body').then(($body) => {
      if ($body.find('.go3958317564').length > 0) {
        cy.log('Login failed, proceeding to sign up...');
        cy.visit('/users/sign-up');

        // Fill in the registration form
        cy.get('.jaqerT > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type('New');
        cy.get('.hGlDlo > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type('User');
        cy.get('#sign-up > :nth-child(2) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type('Company');
        cy.get(':nth-child(3) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type(userEmail);
        cy.get(':nth-child(4) > .sc-liQGml > .iZOaqm > .fhKwQl > [data-cy="html-input"]').clear().type(userPass);
        cy.get('[data-cy="SignUp"]').click();
        cy.contains('Check your email!').should('be.visible');
      } else {
        cy.log('Login successful, redirecting...');
        cy.url().should('include', '/account/importers');
      }
    });
  });
});