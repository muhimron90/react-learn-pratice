import { which, echo, exit, pwd } from 'shelljs';
import listr from 'listr';
import { ErrSys, Log, Warning } from '../Color';
import { ChangeDir, MakeDir } from './dir-tasks';
import { spinner } from '../internals/spinner';

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

async function Build(nameDir: string) {
  const RunTask = new listr([
    {
      title: 'Creating Directory',
      task: async (ctx, task) => {
        await MakeDir(nameDir)
          .then((res) => {
            setTimeout(() => {
              // Log(`in  ${res} \u2714 [Passed]`);

              ChangeDir(res)
                .then(() => {
                  spinner.color = 'yellow';
                  spinner.text = 'please wait a moment.. ';

                  setTimeout(() => {
                    spinner.color = 'green';
                    spinner.text = 'almost finished ';
                    console.log('\n');
                    spinner.succeed('Finished');

                    Warning('\ncurrent : ' + pwd().stdout);
                    Log(`Directory ${res} \u2714 [Passed]`);
                  }, 2000);
                })
                .catch((err) => {
                  spinner.fail('Failure');
                  ErrSys(err);
                });
            }, 2000);
          })

          .catch((err) => {
            ErrSys(err);
          });
      },
    },
  ]);
  RunTask.run()
    .then(() => {
      spinner.start();
    })
    .catch(() => spinner.stop());
}
export { Build, GitCheck };
