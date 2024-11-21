export default {
	'*.ts': ['organize-imports-cli', 'prettier --write'],
	'!*.ts': 'prettier --write --ignore-unknown'
};
