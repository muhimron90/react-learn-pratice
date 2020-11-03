import { echo, mkdir, cd } from 'shelljs';
import { ErrSys } from '../Color';
import { currentDir, dirExists } from '../util/directory';

async function MakeDir(_dirName: string) {
	currentDir();
	try {
		if (_dirName === '' || undefined || null) {
			echo('missing name directory');
			process.exit();
		}
		// echo(`Checking Directory : ${_dirName}`);
		if (!dirExists(_dirName)) {
			mkdir(_dirName);
		}
		return _dirName;
	} catch (error) {
		ErrSys('Cannot Create Directory..');
		process.exit();
	}
}

async function ChangeDir(_dirName: string) {
	try {
		cd(_dirName);
	} catch (err) {
		ErrSys('Cannot Change Directory or Directory is missing !');
		process.exit();
	}
}
export { MakeDir, ChangeDir };
