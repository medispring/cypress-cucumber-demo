import StringHelper from "../Helpers/StringHelper";

const url = Cypress.env("iCure") + "/patient/";

class PatientsAPI {
  getPatientId(firstName, lastName, birthDate) {
    return cy
      .request({
        method: "GET",
        url: url,
        auth: {
          user: "demo-formations",
          pass: "test"
        }
      })
      .then(resp => {
        expect(resp.status).to.equal(200);

        let filteredPatients = resp.body.rows.filter(function(row) {
          return (
            row.dateOfBirth === parseInt(StringHelper.reverseDate(birthDate)) &&
            row.firstName === firstName &&
            row.lastName === lastName
          );
        });

        expect(filteredPatients.length).to.equal(
          1,
          "check that you don't have multiple patients with the same name and birthdate"
        );

        let id = filteredPatients[0].id;
        return id;
      });
  }

  deletePatient(patientId) {
    cy.request({
      method: "DELETE",
      url: url + patientId,
      auth: {
        user: "demo-formations",
        pass: "test"
      }
    }).then(resp => {
      expect(resp.status).to.equal(200);
    });
  }
}
export default new PatientsAPI()
