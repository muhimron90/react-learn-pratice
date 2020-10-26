const util = require("util");
const exec = util.promisify(require("child_process").exec);
const chalk = require("chalk");
const path = require('path');

async function gitcmd(sts) {
	
	let status = "git status";
	// if (sts === "stop") {
	// 	status = "git status";
	// }
	

	const { stdout, stderr } = await exec(status , {cwd : path.join(__dirname, '../../muhi-repo-cli/') });
	let results = "";

	try {
    if (stderr) {
      console.log(stderr);
      
			return { error: stderr };
		} else {
			results += stdout.toString();
      console.log(results);
			return results;
		}
	} catch (err) {
		console.log(err);
		return err;
	}
}
// gitcmd('git', ['status']);

module.exports = gitcmd;
