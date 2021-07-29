class AddressStep{
	private button: string;

	constructor() {
		this.button = '.cart_navigation span';
	}

	public proceed(): void {
		cy.get(this.button).click()
	}
}

export { AddressStep }
