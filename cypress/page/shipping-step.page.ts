class ShippingStep{
	private checkBox: string;
	private button: string;

	constructor(){
		this.checkBox = '#cgv';
		this.button = "[name='processCarrier']";
	}

	public checkTermsAgreement(): void {
		cy.get(this.checkBox).click();
	}

	public proceedToCheckout() :void {
		cy.get(this.button).click();
	}
}
export { ShippingStep }
