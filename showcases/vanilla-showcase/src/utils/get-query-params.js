const getQueryParameters = () => {
	return (
		document.location.search
			.slice(1)
			.split('&')
			.filter((s) => s?.length > 0)
			// eslint-disable-next-line unicorn/no-array-reduce
			.reduce((previousValue, currentValue) => {
				const splitQueryParameter = currentValue.split('=');
				return {
					...previousValue,
					[splitQueryParameter[0]]: splitQueryParameter[1]
				};
			}, {})
	);
};

export default getQueryParameters;
