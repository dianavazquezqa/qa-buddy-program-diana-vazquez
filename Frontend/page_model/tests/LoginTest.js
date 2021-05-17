import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyTasksPage from '../pages/MyTasksPage'
import { CREDENTIALS, ERROR_MESSAGE , BASE_URL } from '../data/Constants'

fixture('Login feature test')
    .page(BASE_URL)
    .beforeEach(async t => {
        await t.click(WelcomePage.loginButton)
    })

test.only('User login with valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(MyTasksPage.topBar.exists).ok()
})

test('User can\'t login with invalid password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.ErrorMessage.exists).ok()
    await t.expect(LoginPage.ErrorMessage.innerText).eql(ERROR_MESSAGE.INVALID_PASSWORD_ERROR_MSG)
})

test('User can\'t login leaving blank fields', async t => {
    await LoginPage.submitLoginFormEmptyFields()
    await t.expect(LoginPage.ErrorMessage.exists).ok()
    await t.expect(LoginPage.ErrorMessage.innerText).eql(ERROR_MESSAGE.BLANK_FIELDS_ERROR_MSG)
})

test('User can\'t login leaving password field empty', async t => {
    await LoginPage.submitLoginFormEmptyPwd(CREDENTIALS.VALID_USER.USERNAME)
    await t.expect(LoginPage.ErrorMessage.exists).ok()
    await t.expect(LoginPage.ErrorMessage.innerText).eql(ERROR_MESSAGE.BLANK_PASSWORD_ERROR_MSG)
})
