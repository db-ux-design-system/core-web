module.exports = (file) => {
	if (file.endsWith('.css')) {
		console.log(file);
	}
	return !file.endsWith('.css');
};
