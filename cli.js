const { program } = require('commander');
const api = require('./index.js')
const inquirer = require('inquirer')

program
  .option('-x, --xxx', 'what the x?')
program
  .command('add <taskName> [destination]')
  .description('add a task')
  .action((source, destination) => {
    api.add(source, destination).then(() => { console.log('添加成功') }, () => { console.log('添加失败') })
  });
program
  .command('clear')
  .description('clear all tasks')
  .action(() => {
    api.clear().then(() => { console.log('清除完毕') }, () => { console.log('清除失败') })
  });

program.parse();


