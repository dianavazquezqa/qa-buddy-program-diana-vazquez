import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyTasksPage from '../pages/MyTasksPage'
import { CREDENTIALS, BASE_URL, TASK_NAME } from '../data/Constants'

fixture('Add tasks feature test')
  .page(BASE_URL)
  .beforeEach(async t => {
    await t.click(WelcomePage.loginButton)
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.click(MyTasksPage.timeZone)
    await t.expect(MyTasksPage.calendarTitle.exists).ok()
  })

test('Validate new task is created', async t => {
  const tasksCountBeforeCreate = await MyTasksPage.getTasksCount()
  await MyTasksPage.createNewTask(TASK_NAME)
  const tasksCountAfterCreate = await MyTasksPage.getTasksCount()

  await t.expect(tasksCountAfterCreate - tasksCountBeforeCreate).eql(1)
})

test('Validate tasks are created correctly', async t => {
  for (let i = 0; i < 10; i++) {
    await MyTasksPage.createNewTask(TASK_NAME)
    const newTaskName = await MyTasksPage.getLastTaskName()

    await t.expect(newTaskName).contains(TASK_NAME)
  }
})
