class ProductList{
	private tShirt: string;
	private button: string;

	constructor(){
		this.tShirt = "[title='Add to cart']";
		this.button = "[title='Proceed to checkout']";
	}

	public selectTShirt(): void {
		cy.get(this.tShirt).click()
	}

	public proceedToCheckout(): void {
		cy.get(this.button).click()
	}
}
export { ProductList }
