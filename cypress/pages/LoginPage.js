class LoginPage {
    username = "#user-name";
    password = "#password";
    loginBtn = "#login-button";
    errorMsg = '[data-test="error"]';

    login(user, pass) {
        cy.get(this.username).type(user);
        cy.get(this.password).type(pass);
        cy.get(this.loginBtn).click();
    }
}

export default new LoginPage();