import { Selector, t } from 'testcafe'

class LoginPage {
    constructor (){
        this.userNameField = Selector('#email')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('.submit_btn').withExactText('Log in')
        this.ErrorMessage = Selector('.error_msg')
    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.userNameField, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
    }

    async submitLoginFormEmptyFields(){
        await t.click(this.loginButton)
    }

    async submitLoginFormEmptyPwd(username){
        await t
        .typeText(this.userNameField, username)
        .click(this.loginButton)
    }

}

export default new LoginPage()