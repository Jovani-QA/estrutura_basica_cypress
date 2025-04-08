import { ambiente } from '../config/ambientes/ambiente.js';
import { LoginPage } from './login.function.js';

const loginPage = new LoginPage();

describe('Login válido ', () => {
  beforeEach(() => {
    cy.visit(ambiente.baseUrl);
  });

  it('Dado acesso a pagina do site', () => {
  });

  it('Quando inserir email e senha', () => {
    loginPage.realizarLogin('standardUser');
    loginPage.verificarLoginComSucesso();
  });

  it('Então o login deve ser realizado com sucesso', () => {
    
  });

});


describe('Login inválido', () => {
  beforeEach(() => {
    cy.visit(ambiente.baseUrl);
  });

  it('Dado acesso a pagina do site', () => {
  });

  it('Deve fazer login com usuário invalido', () => {
    loginPage.realizarLogin('lockedOutUser');
    loginPage.verificarMensagemErro();
  })

  it('Então o login deve aparecer uma mensgagem informando que não foi possivel realizar o login', () => {
   
  });

});


