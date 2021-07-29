class PaymentStep {
	private bank: string;
	private button: string;
	private label: string;
	constructor() {
		this.bank = '.bankwire';
		this.button = '.cart_navigation span';
		this.label = '#center_column > div > p > strong';
	}

	public selectBank(): void {
		cy.get(this.bank).click()
	}

	public confirmOrder(): void {
		cy.get(this.button).click()
	}

	public compare(): void {
		cy.get(this.label).should('have.text', 'Your order on My Store is complete.');
	}
}

export { PaymentStep }