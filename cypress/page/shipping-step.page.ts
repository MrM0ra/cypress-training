class ShippingStep{
	private checkBox: string;
	private button: string;

	constructor(){
		this.checkBox = '.checkbox span';
		this.button = '.cart_navigation span';
	}

	public checkTermsAgreement(): void {
		cy.get(this.checkBox).click();
	}

	public proceedToCheckout() :void {
		cy.get(this.button).click();
	}
}
export { ShippingStep }
