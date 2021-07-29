class PaymentStep {
	private bank: string;
	private button: string;
	private label: string;
	
	constructor() {
		this.bank = '.bankwire';
		this.button = '.cart_navigation span';
		this.label = '.cheque-indent > strong';
	}

	public selectBank(): void {
		cy.get(this.bank).click()
	}

	public confirmOrder(): void {
		cy.get(this.button).click()
	}

	public compare(): Cypress.Chainable {
		return cy.get(this.label);
	}
}
export { PaymentStep }
