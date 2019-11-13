import PageBase from "./PageBase";

//locators
const patientName = '.padialogContainertient-layout__identity-name';

class PatientDetails extends PageBase{
    getPatientName() {
        return cy.get(patientName);
    }
}
export default new PatientDetails();