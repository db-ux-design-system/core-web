const dashCase = (str) =>
	`${str.replace(/[A-Z]/g, (m, i) => (i > 0 ? '-' : '') + m.toLowerCase())}`;

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		pre: (json) => {
			const { pluginData, name } = json;
			const { target } = pluginData;
			if (target === 'angular' || target === 'stencil') {
				const componentTagName = `db-${dashCase(name.replace('DB', ''))}`;

				if (!json.hooks.onMount) {
					json.hooks.onMount = [];
				}
				json.hooks.onMount.push({
					code: `this.setupObserver(${target === 'angular' ? 'element' : '_ref'});`,
					onSSR: false
				});

				if (!json.hooks.onUnMount) {
					json.hooks.onUnMount = { code: '' };
				}
				json.hooks.onUnMount = {
					code: `${json.hooks.onUnMount.code};\nthis.observer${target === 'angular' ? '()' : ''}?.disconnect();`
				};

				if (!json.state) {
					json.state = {};
				}
				json.state.observer = {
					code: 'undefined',
					type: 'property',
					propertyType: 'normal',
					typeParameter: 'MutationObserver|undefined'
				};
				json.state.setupObserver = {
					code: `setupObserver(element: HTMLElement|null) {
					if(!element) return;
    const parent = element.closest("${componentTagName}");
    if (!parent || this.observer${target === 'angular' ? '()' : ''}) return;

    this.observer${target === 'angular' ? '.set(' : '='}new MutationObserver(() => {
      this.enableAttributePassing(element, "${componentTagName}");
    })${target === 'angular' ? ')' : ''};

    this.observer${target === 'angular' ? '()' : ''}!.observe(parent, {
      attributes: true
    });
    this.enableAttributePassing(element, "${componentTagName}");
  }`,
					type: 'method',
					typeParameter: 'any'
				};
			}

			return json;
		}
	},
	code: {
		pre: (code, json) => {
			const { pluginData } = json;
			const { target } = pluginData;

			let changedCode = code;

			if (target === 'angular' || target === 'stencil') {
				changedCode = changedCode.replace(
					`if (attr && attr.name === 'class') {`,
					`      if (attr && attr.name !== "class" && !attr.name.startsWith("_")) {
			if (!element.hasAttribute(attr.name)) {
				element.setAttribute(attr.name, attr.value);
			}
			parent.removeAttribute(attr.name);
		}
					else if (attr && attr.name === "class") {`
				);
			}

			return changedCode;
		}
	}
});
