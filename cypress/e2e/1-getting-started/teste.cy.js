it('Teste de Cadastro de Professor com Dados Válidos', () => {
    cy.visit('http://localhost:5173');
    cy.get('.nome input').type('John Doe');
    cy.get('.especializacao input').type('Matemática');
    cy.get('.disciplina input[value="Eletronica"]').check();
    cy.get('#dias').select('Segunda-Feira');
    cy.get('.adicionar').click();
    cy.get('.calendario li').should('have.length', 1);
    cy.get('.calendario li').should('contain', 'John Doe - Eletronica - Segunda-Feira');
  });
  
  it('Teste de Cadastro de Professor com Campos Obrigatórios Não Preenchidos', () => {
    cy.visit('http://localhost:5173');
    cy.get('.adicionar').click();
    cy.get('.calendario li').should('have.length', 0);
  });
  it('Teste de Selecionar disciplina de Eletrônica', () => {
    cy.visit('http://localhost:5173');
    cy.get('.disciplina input[value="Eletronica"]').check();
    cy.get('.adicionar').click();
    cy.get('.calendario li').should('have.length', 1);
    cy.get('.calendario li').should('contain', 'Eletronica');
  });
  it('Teste de Remoção de Professor', () => {
    cy.visit('http://localhost:5173');
    cy.get('.adicionar').click();
    cy.get('.remover').click();
    cy.get('.calendario li').should('have.length', 0);
  });
  