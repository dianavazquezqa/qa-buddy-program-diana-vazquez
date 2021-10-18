import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyTasksPage from '../pages/MyTasksPage'
import { CREDENTIALS, BASE_URL, TASK_NAME, TASKS_NUMBER_MIN, TASKS_NUMBER_MAX } from '../data/Constants'

fixture('Add tasks feature test')
  .page(BASE_URL)
  .beforeEach(async t => {
    await t.click(WelcomePage.loginButton)
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)

    await t.click(MyTasksPage.timeZone)
    await t.expect(MyTasksPage.calendarTitle.exists).ok()
    await MyTasksPage.completeTasks()
  })

test('Validate new task is created', async t => {
  const tasksCountBeforeCreate = await MyTasksPage.getTasksCount()
  await MyTasksPage.createNewTask(TASK_NAME, TASKS_NUMBER_MIN)
  const tasksCountAfterCreate = await MyTasksPage.getTasksCount()

  await t.expect(tasksCountAfterCreate - tasksCountBeforeCreate).eql(1)
})

test.only('Validate tasks are created correctly', async t => {
  const tasksCountBeforeCreate = await MyTasksPage.getTasksCount()
  await MyTasksPage.createNewTask(TASK_NAME, TASKS_NUMBER_MAX)
  const tasksCountAfterCreate = await MyTasksPage.getTasksCount()

  await t.expect(tasksCountAfterCreate - tasksCountBeforeCreate).eql(TASKS_NUMBER_MAX)
})
