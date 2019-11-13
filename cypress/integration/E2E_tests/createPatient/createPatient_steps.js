import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import CreatePatientModal from "../../../elements/modals/CreatePatientModal";
import TopNavigationPanel from "../../../elements/components/TopNavigationPanel";
import PatientsAPI from "../../../support/API/PatientsAPI";
import APICleanup from "../../../support/API/APICleanup";
import PatientDetails from "../../../elements/pages/PatientDetails";

//data

When(/^I create a new patient based on test data "([^"]*)"$/, function(
  newPatientId
) {
  const newPatient = this.patientData.Patients.find(function(el) {
    return el.patient_id === newPatientId;
  });
  TopNavigationPanel.addBtnClick();
  CreatePatientModal.setBirthDate(newPatient.birthDate);
  CreatePatientModal.setLastName(newPatient.lastName);
  CreatePatientModal.setFirstName(newPatient.firstName);
  CreatePatientModal.createPatientBtnClick();
  //wait for create patient modal to be closed
  CreatePatientModal.getModalTitle().should("not.be.visible");
  //register patient for cleanup
  return PatientsAPI.getPatientId(
    newPatient.firstName,
    newPatient.lastName,
    newPatient.birthDate
  ).then(patientId => {
    return APICleanup.registerPatientForCleanup(patientId);
  });
});

Then(/^I am on the patient detail page of patient with id "([^"]*)"$/, function(
  patientId
) {
  const newPatient = this.patientData.Patients.find(function(el) {
    return el.patient_id === patientId;
  });

  PatientDetails.getPatientName().should(
    "contain.text",
    newPatient.firstName + " " + newPatient.lastName
  );
});

When(/^I open the create patient modal/, function() {
  TopNavigationPanel.addBtnClick();
});

And (/^I insert the first name "([^"]*)"$/, function(firstName)
    {
      CreatePatientModal.setFirstName(firstName);
    }
);

Then (/^the create patient button is not enabled/, function(firstName)
{
  CreatePatientModal.getCreatePatientBtn().should('not.be.enabled');
});
