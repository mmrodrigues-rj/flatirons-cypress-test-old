describe('User Authentication Flow', () => {
  const userEmail = "mathias1.pragmatica@gmail.com";
  const userPass = "Test123!";
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('Create a new user', () => {
    // Preenchendo os campos de e-mail e senha
    cy.get('[data-cy="html-input"]').eq(0).clear().type(userEmail);
    cy.get('[data-cy="html-input"]').eq(1).clear().type(userPass);

    // Clicando no botão de login
    cy.get('[data-cy="SignIn"]').click();

    // Aguarda um curto período para garantir que a página carregue antes da verificação
    cy.wait(1000);

    // Usa `cy.document()` para evitar erro caso o elemento não exista
    cy.document().then((doc) => {
      const element = Cypress.$(doc).find('.go3958317564');  

      if (element.length > 0) {
        cy.log('Elemento existe! Prosseguindo para /users/sign-up...');
        cy.wait(1000);
        cy.visit('/users/sign-up');
      } else {
        cy.log('Elemento NÃO existe! Redirecionando para /account/importers...');
        cy.wait(1000);
        cy.visit('/account/importers');
      }
    });
  });
});