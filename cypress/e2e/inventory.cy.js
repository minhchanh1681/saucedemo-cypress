import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";

describe("Inventory Tests", () => {
    beforeEach(() => {
        cy.visit("/");
        LoginPage.login("standard_user", "secret_sauce");
    });

    it("Thêm sản phẩm vào giỏ hàng", () => {
        cy.allure().epic("SauceDemo").feature("Inventory").story("Add to Cart");
        InventoryPage.addToCart("Sauce Labs Backpack");
        cy.get(InventoryPage.cartBadge).should("have.text", "1");
    });
});
