class InventoryPage {
    title = ".title";
    cartBadge = ".shopping_cart_badge";

    addToCart(productName) {
        cy.contains(".inventory_item", productName).find("button").click();
    }
}

export default new InventoryPage();