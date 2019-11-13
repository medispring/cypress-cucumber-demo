import LoginPage from "../../elements/pages/LoginPage";
import { Given } from "cypress-cucumber-preprocessor/steps";
import DashboardPage from "../../elements/pages/DashboardPage";

Given(/^I login with user "([^"]*)"$/, function(username) {
  const my_user = this.userData.Users.find(function(el) {
    return el.user_id === username;
  });

  LoginPage.setPrivateKey(my_user.keystring_1, my_user.key_1);
  LoginPage.setPrivateKey(my_user.keystring_2, my_user.key_2);
  LoginPage.visit();
  LoginPage.setUsername(my_user.username);
  LoginPage.setPassword(my_user.password);
  LoginPage.moreOptionBtnClick();
  LoginPage.setConnectionType();
  LoginPage.setFHC();
  LoginPage.setIcure();
  LoginPage.loginBtnClick();
  DashboardPage.getPatientList();
});