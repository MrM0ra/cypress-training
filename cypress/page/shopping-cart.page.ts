class ShoppingCart{
	private button: string;

	constructor() {
		this.button = ".cart_navigation span";
	}

	public proceedToCheckout(): void {
		cy.get(this.button).click()
	}
}
export { ShoppingCart }
