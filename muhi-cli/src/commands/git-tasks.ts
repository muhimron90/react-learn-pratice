import { echo, exec } from 'shelljs';
function GitInit() {
	exec('git init', (data) => {
		echo('Initial Git :' + data);
	});
}
function gitRemote() {
	exec(
		'git remote add -f origin https://github.com/muhimron90/react-learn-pratice.git',
		{ async: true },
		(data) => {
			echo('Git remote Status :' + data);
		},
	);
}
async function gitConfig() {
	try {
		exec('git config core.sparseCheckout true', { async: true }, (data) => {
			echo('Config Status :' + data);
		});
	} catch (error) {
		echo(error);
	}
}

function checkout(nameFolder: string) {
	exec(
		`echo "${nameFolder}/* " >> .git/info/sparse-checkout`,
		{ async: true },
		(data) => {
			echo('Status :' + data + nameFolder);
		},
	);
}

function pullData() {
	exec('git pull --depth=1 origin main', { async: true }, (data) => {
		echo('Get repo directory :' + data);
	});
}
export { GitInit, gitRemote, pullData, checkout, gitConfig };
