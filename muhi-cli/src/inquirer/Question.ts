function ask(data: string[]) {
  const questions = [
    {
      type: 'list',
      name: 'repo',
      message: 'Select Project :',
      choices: data,
    },
  ];
  return questions;
}

export { ask };
