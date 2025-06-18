/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		pre: (json) => {
			console.log(json.name);
			if (['DBButton', 'DBLink'].includes(json.name)) {
				if (json.pluginData.target === 'vue') {
					console.log(json.state);
					json.children[0].bindings.onClick = {
						code: 'state.handleClick(event)',
						bindingType: 'expression',
						type: 'single'
					};

					json.state = {
						...json.state,
						handleClick: {
							code: `function handleClick(event){if (props.onClick){props.onClick(event);}}`,
							type: 'method'
						}
					};
				} else {
					delete json.props.onClick;
					delete json.props.click;
				}
			}

			return json;
		}
	}
});
