import { Selector, t } from 'testcafe'

class LoginPage {
  constructor () {
    this.userNameField = Selector('#email')
    this.passwordField = Selector('#password')
    this.loginButton = Selector('.submit_btn').withExactText('Log in')
    this.ErrorMessage = Selector('.error_msg')
  }

  async submitLoginForm (username, password) {
    if (username != null) {
      await t.typeText(this.userNameField, username)
    }
    if (password != null) {
      await t.typeText(this.passwordField, password)
    }
    await t.click(this.loginButton)
  }
}

export default new LoginPage()
