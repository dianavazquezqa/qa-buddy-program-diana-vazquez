import { Selector, t } from 'testcafe'

class LoginPage {
    constructor (){
        this.userNameField = Selector('#email')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('.submit_btn').withExactText('Log in')
        this.stayLoggedCheckbox = Selector('.stay_login_label') //Eliminar selectores que no utilice
        this.ErrorMessage = Selector('.error_msg')
    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.userNameField, username)
        .typeText(this.passwordField, password)
        .click(this.loginButton)
    }

    async submitLoginWithInvalidPassword(validUsername, invalidPassword){ //esta funcion es innecesario utilizar solo la anterior solo cambia los parametros que reciba
        await t 
        .typeText(this.userNameField, validUsername)
        .typeText(this.passwordField, invalidPassword)
        .click(this.loginButton)
    }

    async submitLoginFormWithEmptyFields(){
        await t.click(this.loginButton)
    }

    async submitLoginFormWithEmptyPwd(validUsername){
        await t
        .typeText(this.userNameField, validUsername)
        .click(this.loginButton)
    }
}

export default new LoginPage()