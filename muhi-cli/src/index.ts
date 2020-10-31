#!/usr/bin/env node
import inquirer from 'inquirer';
import { getFetchData } from './repo/getData';
import { Errors, ErrSys, Info, Log, usrInfo } from './Color';
import { ask } from './inquirer/Question';
import { Build, GitCheck } from './commands/build';

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
    Build('FolderTemp');
    Log('\nChoices : ');
    Info(myAnswer);
  }

  usrInfo();
  GitCheck();

  RunPrompt();
}

Main().catch(() => {
  ErrSys('Cli was Terminated!');
  process.exit(0);
});
