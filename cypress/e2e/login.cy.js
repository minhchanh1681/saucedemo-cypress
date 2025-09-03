import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Login Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Login thành công với standard_user", () => {
        cy.allure().epic("SauceDemo").feature("Login").story("Positive");
        LoginPage.login("standard_user", "secret_sauce");
        cy.get(InventoryPage.title).should("have.text", "Products");
    });

    it("Login thất bại với locked_out_user", () => {
        cy.allure().epic("SauceDemo").feature("Login").story("Negative");
        LoginPage.login("locked_out_user", "secret_sauce");
        cy.get(LoginPage.errorMsg).should("contain", "Sorry");
    });
});
