import ora from 'ora';

// function stringFn(): string | ora.Options | undefined {
//   return '';
// }
const spinner = ora({
  text: 'In progress..',
  color: 'cyan',
  spinner: {
    interval: 80, // Optional
    frames: ['------', '=-----', '-==---', '--==--', '---==-', '----=='],
  },
});

export { spinner };
