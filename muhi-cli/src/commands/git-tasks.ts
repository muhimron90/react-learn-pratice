import { echo, exec } from 'shelljs';
function GitInit() {
	exec('git init --quiet', (data) => {
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
function gitConfig() {
	exec('git config core.sparseCheckout true', { async: true }, (data) => {
		echo('Config Status :' + data);
	});
}
function checkout(nameFolder: string) {
	exec(
		`echo "${nameFolder}/* " >> .git/info/sparse-checkout`,
		{ async: true },
		(data) => {
			echo('Status :' + data);
		},
	);
}
function pullData() {
	exec('git pull --depth=1 origin main', (data) => {
		echo('Get repo directory :' + data);
	});
}
export { GitInit, gitRemote, pullData, checkout, gitConfig };
