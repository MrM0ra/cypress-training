class Login{
	private email: string;
	private password: string;
	private submit: string;

	constructor(){
		this.email = '#email';
		this.password = '#passwd';
		this.submit = '#SubmitLogin span';
	}

	public signIn(userEmail: string, userPwd: string): void {
		cy.get(this.email).type(userEmail)
		cy.get(this.password).type(userPwd)
		cy.get(this.submit).click()
	}
}
export { Login }
