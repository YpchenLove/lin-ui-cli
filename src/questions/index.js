const chalk = require('chalk')

const promptList = [
  {
    type: 'input',
    message: '请填写小程序appID: ',
    name: 'appid',
    suffix: chalk.blue(' (shift + ins 快捷粘贴)')
  },
  {
    type: 'input',
    message: '请给项目命名:',
    name: 'name',
    default: 'lin-weapp' // 默认值
  },
  {
    type: 'input',
    message: '请输入作者:',
    name: 'author'
  },
  {
    type: 'confirm',
    message: '是否使用跨页面通讯？',
    name: 'wstore'
  },

  {
    type: 'checkbox',
    message: '按需加载组件:',
    name: 'color',
    choices: ['icon', 'button', 'avatar', 'mask']
    // pageSize: 2 // 设置行数
  }
]

module.exports = {
  promptList
}
