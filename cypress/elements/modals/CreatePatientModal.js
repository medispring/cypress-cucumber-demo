import ModalBase from "./ModalBase";

//locators
const lastNameInput = "input[data-cy = 'lastNameInput']";
const firstNameInput = "input[data-cy = 'firstNameInput']";
const birthDateInput = "//span[@class = 'k-dateinput-wrap']/input";
const createPatientBtn = "button[data-cy = 'createPatientBtn']";

class CreatePatientModal extends ModalBase {
  setLastName(lastName) {
    cy.get(lastNameInput).type(lastName);
  }

  setFirstName(firstName) {
    cy.get(firstNameInput).type(firstName);
  }

  setBirthDate(birthDate) {
    cy.xpath(birthDateInput)
      .clear()
      .type(birthDate);
  }

  getCreatePatientBtn() {
    return cy.get(createPatientBtn);
  }

  createPatientBtnClick() {
    cy.get(createPatientBtn)
      .should("not.have.class", "k-state-disabled")
      .then(() => {
        cy.get(createPatientBtn).click();
      });
  }
}
export default new CreatePatientModal();
