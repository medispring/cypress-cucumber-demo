//locators
const userDetailsBtn = "*[class^='menu__account']";

class SideNavigationPanel {
    userDetailsBtnClick()
    {
        cy.get(userDetailsBtn).click();
    }
}
export default new SideNavigationPanel();
