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

function isConfirm() {
	const confirm = [
		{
			name: 'confirm',
			type: 'confirm',
			message: 'is all okay? (Y/n)',
			default: false,
			when: (answer: boolean) => {
				return answer;
			},
		},
	];
	return confirm;
}
export { ask, isConfirm };
