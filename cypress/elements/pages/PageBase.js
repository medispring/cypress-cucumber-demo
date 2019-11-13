//locators
export default class PageBase {
  visit(path, expectedTitle) {
    cy.visit(Cypress.env("baseUrl") + path);
    cy.title().should("eq", expectedTitle);
  }
}