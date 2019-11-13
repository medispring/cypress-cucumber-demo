import PageBase from "./PageBase";

//page properties
const path = "";
const title = "Medispring";

//env properties
const fhc_server = Cypress.env("FHC");
const connection_type = Cypress.env("connectionType");
const iCure_url = Cypress.env("iCure");

//locators
const usernameInput = "input[id='username']";
const passwordInput = "input[id='password']";
const extraOptionsBtn = "div[data-cy='extraOptions']";
const connectionTypeBtn = `//label[@class = 'k-radio-label' and text()= '${connection_type}']`;
const fhcBtn = `//label[@class = 'k-radio-label text-sm' and text()= '${fhc_server}']`;
const iCureBtn = `//label[@class = 'k-radio-label text-sm' and text()= '${iCure_url}']`;
const logInBtn = "//button[@data-cy='signInBtn']";

class LoginPage extends PageBase {
  visit() {
    super.visit(path, title);
  }

  setPrivateKey(keyString, rsa) {
    window.localStorage.setItem(keyString, rsa);
  }

  setUsername(username) {
    cy.get(usernameInput).type(username);
  }

  setPassword(password) {
    cy.get(passwordInput).type(password);
  }

  moreOptionBtnClick() {
    cy.get(extraOptionsBtn).click();
  }

  setConnectionType() {
    cy.xpath(connectionTypeBtn).click();
  }

  setFHC() {
    cy.xpath(fhcBtn).click();
  }

  setIcure() {
    cy.xpath(iCureBtn).click();
  }

  loginBtnClick() {
    cy.xpath(logInBtn).click();
  }
}
export default new LoginPage();
