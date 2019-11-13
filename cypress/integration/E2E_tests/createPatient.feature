Feature: Create patient
  All tests related to patient creation from the top navigation bar

Background:
  Given I login with user "demo-formations"

  Scenario: Create patient - fill in all fields
    When I create a new patient based on test data "newPatient_allFields"
    Then I am on the patient detail page of patient with id "newPatient_allFields"

    @runMe
  Scenario: Create patient - try to create a patient filling in only the first name
    When I open the create patient modal
    And I insert the first name "Hello"
    Then the create patient button is not enabled