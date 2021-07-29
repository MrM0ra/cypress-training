class Login{
	private email: string;
	private password: string;
	private submit: string;

	constructor(){
		this.email = '#email';
		this.password = '#passwd';
		this.submit = '#SubmitLogin span';
	}

	public typeEmail(): void {
		cy.get(this.email).type('aperdomobo@gmail.com')
	}

	public typePwd(): void {
		cy.get(this.password).type('WorkshopProtractor')
	}

	public signIn(): void {
		cy.get(this.submit).click()
	}
}
export { Login }
