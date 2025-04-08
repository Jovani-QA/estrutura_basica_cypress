## Estrutura do Projeto

```
cypress/
└── e2e/
    ├── 📁 config/
    │   └── 📄 ambientes.js         # Define a URL base da aplicação testada
    │
    ├── 📁 user/
    │   └── 📄 users.js             # Contém os dados de login dos usuários (válidos e inválidos)
    │
    ├── 📁 login/
    │   ├── 📄 login.locators.js    # Mapeia os elementos da página de login usando data-test ou selectors
    │   ├── 📄 login.function.js    # Contém as funções reutilizáveis para ações na tela de login
    │   └── 📄 realizar.login.cy.js # Casos de teste relacionados ao processo de login
```
🧩 Organização dos Arquivos
config/ambientes.js
Arquivo responsável por armazenar a URL base da aplicação. Isso permite alterar facilmente o ambiente (produção, homologação, etc.).

user/users.js
Define múltiplos usuários (ex: standardUser, lockedOutUser) utilizados nos testes de login.

login.locators.js
Contém os seletores (locators) dos elementos da tela de login. Isso centraliza os identificadores, facilitando a manutenção caso mudem no HTML.

login.function.js
Contém a classe LoginPage com métodos para interagir com os elementos da página de login (inserir usuário, senha, clicar no botão, etc).

realizar.login.cy.js
Script de testes automatizados que cobre diferentes cenários de login: sucesso, falha, mensagens de erro, entre outros.

