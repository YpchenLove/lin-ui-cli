const inquirer = require('inquirer')
const chalk = require('chalk')

const { promptList } = require('../questions/index')

class InitManager {
  static async initCore() {
    // 初始化控制台
    InitManager.initConsole()
    // 加载问题
    InitManager.initQuestions()
  }

  //版本号信息
  static initConsole() {
    console.clear()
    console.log(chalk.blueBright.bold('Lin UI CLI v0.0.1'))
    const str = 'Smile to life ^_^'
    console.log(
      boxen(str, {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan'
      })
    )
  }
  // 问题
  static async initQuestions() {
    const answers = await inquirer.prompt(promptList)
    return answers
  }
}
