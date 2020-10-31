import { which, echo, exit, mkdir, cd, exec } from 'shelljs';
import { currentDir, dirExists } from '../util/directory';
import { Info, Log, Warning } from '../Color';

function GitCheck() {
  if (!which('git')) {
    echo('Sorry, this script requires git');
    Warning(' Download Git at https://git-scm.com/downloads ');
    exit();
  }
  if (!which('node')) {
    echo('Node Js not installed properly');
    Warning(' Download Git at https://nodejs.org/en/download/ ');
    exit();
  }
}
// async function Clear(delay: number) {
//   function FullClear() {
//     // process.stdout.write('\x1b[2J');
//
//   }
//   // function Clear() {
//   //   process.stdout.write('\x1b[0f');
//   // }
//   try {
//     setTimeout(async () => {
//       FullClear();
//     }, delay * 1000);
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// }
async function makeDir(_name: string) {
  currentDir();
  try {
    if (_name === '' || undefined) {
      echo('missing name directory');
    }
    echo(_name);
    echo(`Checking Directory : ${_name}`);
    if (dirExists(_name)) {
      setTimeout(() => {
        Log(`Directory ${_name} \u2714 [Passed]`);
        Info('\n -------------');
      }, 2000);
    } else {
      mkdir(_name);
      setTimeout(() => {
        Log(`Success Create Directory \u2714 ${_name}`);
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
}
async function Build(nameDir: string) {
  makeDir(nameDir).then(() => {
    cd(nameDir);
    exec('touch suksesbro.txt');
  });
}
export { Build, GitCheck };
