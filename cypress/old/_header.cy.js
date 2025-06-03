describe('User Authentication Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should login with github', () => {
    cy.get('.fHdpKp > .sc-bcXHqe').click();
    cy.origin('https://github.com', () => {
      cy.get('#login_field').type('marcelo.mrpda+1@gmail.com');
      cy.get('#password').type('T3$t@2025');
      cy.get('.btn').first().click(); // Click only the first .btn
     
    });
  });

  
});