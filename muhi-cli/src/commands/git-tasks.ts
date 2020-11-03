import { echo, exec } from 'shelljs';
function GitInit() {
	exec('git init', (data) => {
		echo('Initial Git :' + data);
	});
}

export { GitInit };
