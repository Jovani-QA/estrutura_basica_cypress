import loginLocator from './login.locator.json';
import { users } from '../user/users.js';


export class LoginPage {
  inserirNomeUsuario(username) {
    cy.get(loginLocator.campo.userName.tag)
      .should('be.visible')
      .type(username, { force: true });
  }

  inserirSenha(password) {
    cy.get(loginLocator.campo.password.tag)
      .should('be.visible')
      .type(password, { force: true });
  }

  clicarBotaoLogin() {
    cy.get(loginLocator.botao.tag)
      .should('be.visible')
      .click({ force: true });
  }

  realizarLogin(user) {
    this.inserirNomeUsuario(users[user].username);
    this.inserirSenha(users[user].password);
    this.clicarBotaoLogin();
  }
  verificarLoginComSucesso() {
    cy.url().should('include', '/inventory.html');
  }
  verificarMensagemErro() {
    cy.get(`${loginLocator.modal.tag}:contains("${loginLocator.modal.text}")`)
      .should('be.visible');
  }
}
