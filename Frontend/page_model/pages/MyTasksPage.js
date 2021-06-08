import { Selector , t } from 'testcafe'

class MyTasksPage {
    constructor(){
        this.topBar = Selector('#top_bar_inner')
        this.calendarTitle = Selector('.view_header__content')
        this.addTaskIcon = Selector('.icon_add')
        this.taskNameInput = Selector('.public-DraftEditor-content')
        this.addTaskButton = Selector('.ist_button')
        this.newTaskRadioBtn = Selector('.task_checkbox__circle')
        this.taskName = Selector('.task_content')
        this.addTaskEmptyStateLabel = Selector('.empty-state-header')
        this.cancelButton = Selector('.cancel')
    }

    async createNewTask(taskName){
        await t
          .click(this.addTaskIcon)
          .typeText(this.taskNameInput, taskName)
          .click(this.addTaskButton)
          .click(this.cancelButton)
    }

    async getTasksCount(){
        if (await this.addTaskEmptyStateLabel.exists && await this.addTaskEmptyStateLabel.visible)
            return 0
        await t.hover(this.newTaskRadioBtn)
        return this.newTaskRadioBtn.count
    }

    async getLastTaskName(){
        const taskCount = await this.getTasksCount()
        return this.taskName.nth(taskCount - 1).innerText
    }
}

export default new MyTasksPage()
