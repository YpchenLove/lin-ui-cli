const inquirer = require('inquirer')
const boxen = require('boxen')
const chalk = require('chalk')

const { promptList } = require('./src/questions')
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
async function initQuestion() {
  const answers = await inquirer.prompt(promptList)
  return answers
}

//
initQuestion()
