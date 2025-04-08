const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Eventos Node se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    // 👇 NÃO coloque baseUrl aqui, se for usar manualmente nos testes
  },
});
