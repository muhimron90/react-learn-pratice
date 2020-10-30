import chalk from 'chalk';
import os from 'os';
import pkg from '../../package.json';
const usr = os.hostname();

const pl = os.platform();
const arc = os.arch();

const log = console.log;
const Log = (msg: string) => {
  log(chalk.greenBright.bold(msg));
};
const Info = (msg: string) => {
  log(chalk.whiteBright(msg));
};
const Warning = (msg: string) => {
  log(chalk.yellow(msg));
};
const Helper = (msg: string) => {
  log(chalk.cyanBright(msg));
};
const Errors = (msg: string) => {
  log(chalk.bgRedBright.whiteBright.bold(msg));
};
const ErrSys = (msg: string) => {
  log(chalk.redBright.bold(msg));
};
const usrInfo = () => {
  log(chalk`
  {bold {red W} {green E} {yellow L} {blue C} {magenta O} {cyan M} {greenBright E}}, Gorgeous Friends of mine {cyan.bold ${usr}}.
  Running on [{yellow.italic ${pl}}-{yellow.italic ${arc}}]   
  `);
  log(
    chalk`Version : {greenBright ${pkg.version}} || Author : {cyanBright ${pkg.author}}`
  );
  log('\n');
};
export { Log, Info, Errors, usrInfo, Warning, ErrSys, Helper };
