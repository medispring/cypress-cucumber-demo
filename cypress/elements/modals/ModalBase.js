//locators
const modalTitle = ".k-dialog-titlebar";
const modalCloseBtn = ".k-dialog-close";

export default class ModalBase {
    getModalTitle() {
          return cy.get(modalTitle);
    }

    static get modalTitleSelector()
    {
        return modalTitle;
    }

    static get modalCloseBtnSelector()
    {
        return modalCloseBtn;
    }
}