import fs from 'fs';
import path from 'path';

function currentDir() {
  return path.basename(process.cwd());
}
function dirExists(filepath: fs.PathLike) {
  return fs.existsSync(filepath);
}

export { currentDir, dirExists };
