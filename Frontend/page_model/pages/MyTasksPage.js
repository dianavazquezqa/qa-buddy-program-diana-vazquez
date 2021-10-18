import { Selector, t } from 'testcafe'

class MyTasksPage {
  constructor () {
    this.calendarTitle = Selector('.view_header__content')
    this.addTaskIcon = Selector('.icon_add')
    this.taskNameInput = Selector('.public-DraftEditor-content')
    this.addTaskButton = Selector('.reactist_button--primary')
    this.newTaskRadioBtn = Selector('.task_checkbox__circle')
    this.taskName = Selector('.task_content')
    this.addTaskEmptyStateLabel = Selector('.empty-state-header')
    this.cancelButton = Selector('.reactist_button--secondary')
    this.timeZone = Selector('.timezone_link').withExactText('Don\'t update settings')
  }

  async completeTasks () {
    const taskCount = await this.getTasksCount()
    for (let i = 0; i < taskCount; i++) {
      await t.click(this.newTaskRadioBtn)
    }
  }

  async createNewTask (taskName, taskNumber) {
    for (let i = 0; i <= taskNumber; i++) {
      await t
        .click(this.addTaskIcon)
        .typeText(this.taskNameInput, taskName)
        .click(this.addTaskButton)
        .click(this.cancelButton)
      const newTaskName = await this.getLastTaskName()
      await t.expect(newTaskName).contains(taskName)
    }
  }

  async getTasksCount () {
    if (await this.addTaskEmptyStateLabel.exists && await this.addTaskEmptyStateLabel.visible) { return 0 }
    await t.hover(this.newTaskRadioBtn)
    return this.newTaskRadioBtn.count
  }

  async getLastTaskName () {
    const taskCount = await this.getTasksCount()
    return this.taskName.nth(taskCount - 1).innerText
  }
}

export default new MyTasksPage()
