import ModalBase from "./ModalBase";

//locators
const logoutBtn = "button[class = 'form-selector__logout k-button']";

class UserDetailsModal extends ModalBase {
  logoutBtnClick() {
    cy.get(logoutBtn).click();
  }
}
export default new UserDetailsModal();
