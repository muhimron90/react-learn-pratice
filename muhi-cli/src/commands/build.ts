import { which, echo, exit, pwd } from 'shelljs';
import listr from 'listr';
import { ErrSys, Log, Warning } from '../Color';
import { ChangeDir, MakeDir } from './dir-tasks';
import { spinner } from '../internals/spinner';
import { checkout, gitConfig, GitInit, gitRemote, pullData } from './git-tasks';
import { dirExists } from '../util/directory';

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

// function Confirmation() {
// 	spinner.warn('Ooops, initialization task is working well..');
// 	inquirer.prompt(isConfirm()).then((answer) => {
// 		if (!answer) {
// 			Info('Cancelled');
// 			process.exit();
// 		} else {
// 			gitRemote();
// 		}
// 		console.log(answer);

// 		//
// 	});
// }

async function Build(nameDir: string) {
	const newDir = nameDir;
	const gitInit = dirExists('.git') ? true : false;
	const dirInit = dirExists(newDir) ? true : false;

	const RunTask = new listr([
		{
			title: 'initialize Directory',
			skip: () => dirInit,
			task: async () => {
				await MakeDir(newDir)
					.then((res) => {
						setTimeout(() => {
							ChangeDir(res)
								.then(() => {
									spinner.color = 'yellow';
									spinner.text = 'please wait a moment.. ';

									setTimeout(() => {
										spinner.succeed(
											'Directory has been created',
										);
										Warning('\ncurrent : ' + pwd().stdout);
										Log(`Directory ${res} \u2714 [Passed]`);
										setTimeout(() => {
											GitInit();
											spinner.succeed(
												'Success initialized Git',
											);
										}, 500);
									}, 500);
								})
								.catch((err) => {
									spinner.fail('Failure');
									ErrSys(err);
								});
						}, 500);
					})
					.catch((err) => {
						ErrSys(err);
					});
			},
		},
		{
			title: 'fetch git init',
			skip: () => gitInit, //kater check git in directory 1st
			task: () => {
				if (dirInit) {
					ChangeDir(newDir);
					if (!gitInit) {
						setTimeout(() => {
							GitInit();
							spinner.succeed('Success initialized Git');
						}, 500);
					} else {
						setTimeout(() => {
							spinner.warn('.git was found');
						}, 500);
					}
				}
			},
		},
		{
			title: 'Trying Remote Git',
			skip: () => false,
			task: () => {
				setTimeout(() => {
					gitRemote();
				}, 2000);
			},
		},
		{
			title: 'Git Config',
			task: () => {
				setTimeout(() => {
					gitConfig().then(() => {
						checkout(nameDir);
					});
				}, 3000);
			},
		},

		{
			title: 'Pulling Data',
			task: () => {
				setTimeout(() => {
					pullData();
				}, 6500);
			},
		},
	]);

	await RunTask.run()
		.then(() => {
			spinner.start();
		})
		.catch((err) => {
			ErrSys(err);
			spinner.stop();
			process.exit();
		});
}
export { Build, GitCheck };
