import { ambiente } from '../config/ambientes/ambiente.js';
import { LoginPage } from './login.function.js';

const loginPage = new LoginPage();

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit(ambiente.baseUrl);
  });

  it('Deve fazer login com usuário válido', () => {
    loginPage.realizarLogin('standardUser');
    loginPage.verificarLoginComSucesso();
   
  });

  it('Deve fazer login com usuário invalido', () => {
    loginPage.realizarLogin('lockedOutUser');
    loginPage.verificarMensagemErro();
  
  });
});
