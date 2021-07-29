class ShippingStep{
	private checkBox: string;
	private button: string;

	constructor(){
		this.checkBox = '.checkbox span';
		this.button = '.cart_navigation span';
	}

	public check(): void {
		cy.get(this.checkBox).click();
	}

	public proceed() :void {
		cy.get(this.button).click();
	}
}

export { ShippingStep }
