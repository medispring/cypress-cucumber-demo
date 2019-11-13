class ElementsHelper {
  clickIfElementVisible(elToBeVisibleSelector, selectorToClick) {
    cy.get("body").then($body => {
      if ($body.find(elToBeVisibleSelector).length > 0) {
        cy.get(selectorToClick).click();
      } else {
        cy.log("element not found: " + elToBeVisibleSelector);
      }
    });
  }
}
export default new ElementsHelper();