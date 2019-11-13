import { Then } from "cypress-cucumber-preprocessor/steps";

Then(/^I compare the ui of my page with the benchmark screenshot/, function() {
  cy.document().toMatchImageSnapshot({
    threshold: 0.01,
    thresholdType: "percent"
  });
});