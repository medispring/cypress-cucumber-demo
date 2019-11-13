//locators
const addBtn = "//button[contains(@class, 'home__add-button')]";

class TopNavigationPanel {
    addBtnClick()
    {
        cy.xpath(addBtn).click();
    }
}
export default new TopNavigationPanel();
