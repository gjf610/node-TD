#! /usr/bin/env node
const { program } = require('commander');
const api = require('./index.js')
const pkg = require('./package.json')

program
  .version(pkg.version)

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
program
  .command('showAll')
  .description('show all tasks')
  .action(() => {
    void api.showAll()
  });
program.parse();


