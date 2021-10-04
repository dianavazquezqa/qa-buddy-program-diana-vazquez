import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyTasksPage from '../pages/MyTasksPage'
import { CREDENTIALS, ERROR_MESSAGE , BASE_URL } from '../data/Constants'

fixture('Login feature test')
    .page(BASE_URL)
    .beforeEach(async t => {
        await t.click(WelcomePage.loginButton)
    })

test('User login with valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.click(MyTasksPage.timeZone)
    await t.expect(MyTasksPage.calendarTitle.exists).ok({timeout:8000})
})

test('User can\'t login with invalid password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.ErrorMessage.innerText).eql(ERROR_MESSAGE.INVALID_PASSWORD_ERROR_MSG)
})

test('User can\'t login leaving blank fields', async t => {
    await LoginPage.submitLoginForm(null, null)
    await t.expect(LoginPage.ErrorMessage.innerText).eql(ERROR_MESSAGE.BLANK_FIELDS_ERROR_MSG)
})

test('User can\'t login leaving password field empty', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, null)
    await t.expect(LoginPage.ErrorMessage.innerText).eql(ERROR_MESSAGE.BLANK_PASSWORD_ERROR_MSG)
})
