import Replace from 'replace-in-file';

const option = {
	files: './pages/components/**/*.tsx',
	from: 'import.meta.env.BASE_URL',
	to: 'process.env.NEXT_PUBLIC_BASE_PATH'
};
Replace.replaceInFileSync(option);
