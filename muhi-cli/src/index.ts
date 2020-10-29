#!/usr/bin/env node
import inquirer from 'inquirer';
import { getFetchData } from './repo/getData';
import { Errors, ErrSys, Info, Log, usrInfo } from './Color';
import { ask } from './inquirer/Question';
// import { currentDir, dirExists } from './util/directory';

type T = void | any;

async function Main(): Promise<T> {
  const dataList = await getFetchData();
  const DataArray: string[] = [];

  const ErrorMessage: string = 'cannot get data ';
  function getData() {
    for (let i in dataList) {
      if (dataList[i].type === 'dir') {
        DataArray.push(dataList[i].name);
      }
    }
  }
  DataArray.length <= 0 ? getData() : Errors(ErrorMessage);
  async function RunPrompt() {
    const answer = await inquirer.prompt(ask(DataArray));
    let myAnswer: string = Object.values(answer).toString();
    Log('\nChoices : ');
    Info(myAnswer);
  }
  //   function GitCheck() {
  //     Info('\n[Git] Checking.. ');
  //     if (dirExists('git.js')) {
  //       setTimeout(() => {
  //         Log('\u2714 [Passed]');
  //         Info('\n -------------');
  //       }, 2000);
  //     } else {
  //       Errors('.git not found in : ' + currentDir());
  //       Warning(
  //         `
  // refer : git init
  // Git may already be installed. to check git : git --version`
  //       );
  //       Helper('Or Download Git at https://git-scm.com/downloads ');
  //       process.exit();
  //     }
  //   }

  usrInfo();
  // GitCheck();
  RunPrompt();
}

Main().catch(() => {
  ErrSys('ClI ERROR !!');
  process.exit(1);
});
