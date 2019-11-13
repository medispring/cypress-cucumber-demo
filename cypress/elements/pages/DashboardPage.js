import PageBase from "./PageBase";

//page properties
const path = "/private/dashboard";
const title = "Medispring";

//locators
const patientListTable = "div[data-cy='latestPatientsList']";

class DashboardPage extends PageBase {
  visit() {
    super.visit(path, title);
  }

  getPatientList() {
    cy.get(patientListTable);
  }
}
export default new DashboardPage();
