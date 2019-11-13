//Before test run
import APICleanup from "../../support/API/APICleanup";
import PatientsAPI from "../../support/API/PatientsAPI";
import SideNavigationPanel from "../../elements/components/SideNavigationPanel";
import UserDetailsModal from "../../elements/modals/UserDetailsModal";
import ElementsHelper from "../../support/Helpers/ElementsHelper";
import ModalBase from "../../elements/modals/ModalBase";

beforeEach(function() {
  //upload fixture files
  cy.fixture("users").as("userData");
  cy.fixture("patients").as("patientData");
});

afterEach(function() {
  //check if there are items to clean
  if (APICleanup.getPatientsToDelete().length > 0) {
    APICleanup.getPatientsToDelete().forEach(PatientsAPI.deletePatient);
  }
  //reset cleanup counters for the next run
  APICleanup.resetToPatientsToDeleteCounters();
  //logout current user if I'm not already on the login page
  cy.url().then($url => {
    if($url != Cypress.env("baseUrl"))
    {
      cy.log('inside')
      cy.log($url)
      //close eventually opened modals that might prevent the to click on the user details button
      ElementsHelper.clickIfElementVisible(ModalBase.modalTitleSelector, ModalBase.modalCloseBtnSelector);
      SideNavigationPanel.userDetailsBtnClick();
      UserDetailsModal.getModalTitle();
      UserDetailsModal.logoutBtnClick();
    }
  })
  });
