// TODO: Remove when https://github.com/BuilderIO/mitosis/pull/1792 is merged

const dashCase = (str) =>
	`${str.replace(/[A-Z]/g, (m, i) => (i > 0 ? '-' : '') + m.toLowerCase())}`;

/**
 * @type {import('@builder.io/mitosis').MitosisPlugin}
 */
module.exports = () => ({
	json: {
		pre: (json) => {
			const {pluginData, name} = json;
			const {target, path, outputFilePath} = pluginData;
			const filePath = path || outputFilePath || '';
			const skipObserver =
				filePath.includes('.example.lite') ||
				filePath.includes('showcase.lite') ||
				filePath.includes('figma.lite') ||
				filePath.includes('agent.lite') ||
				// Exclude table-body, table-footer, table-row, table-data-cell, table-header-cell to make sure the mobile list works as expected
				filePath.includes('table-body') ||
				filePath.includes('table-row') ||
				filePath.includes('table-footer') ||
				filePath.includes('table-data-cell') ||
				filePath.includes('table-header-cell');

			if (['angular', 'stencil'].includes(target) && !skipObserver) {
				const componentTagName = `db-${dashCase(name.replace('DB', ''))}`;

				if (!json.hooks.onMount) {
					json.hooks.onMount = [];
				}
				json.hooks.onMount.push({
					code: `this.setupObserver(${target === 'angular' ? 'element' : '_ref'});`,
					onSSR: false,
				});

				if (!json.hooks.onUnMount) {
					json.hooks.onUnMount = {code: ''};
				}
				json.hooks.onUnMount = {
					code: `${json.hooks.onUnMount.code};\nthis.observer${target === 'angular' ? '()' : ''}?.disconnect();`,
				};

				if (!json.state) {
					json.state = {};
				}
				json.state.observer = {
					code: 'undefined',
					type: 'property',
					propertyType: 'normal',
					typeParameter: 'MutationObserver|undefined',
				};
				json.state.setupObserver = {
					code: `setupObserver(element: HTMLElement|null) {
					if(!element) return;
    const parent = element.closest("${componentTagName}");
    if (!parent || this.observer${target === 'angular' ? '()' : ''}) return;

    this.observer${target === 'angular' ? '.set(' : '='}new MutationObserver((mutations) => {
     if(mutations.some(mutation=>
     {
        const attr = (mutation.target as HTMLElement).attributes.getNamedItem(
          mutation.attributeName ?? ""
        );

        return attr?.value !== mutation.oldValue;
      }
)){
      this.enableAttributePassing(element, "${componentTagName}");
      }
    })${target === 'angular' ? ')' : ''};

    this.observer${target === 'angular' ? '()' : ''}!.observe(parent, {
      attributes: true,
	 		attributeOldValue: true,
    });
  }`,
					type: 'method',
					typeParameter: 'any',
				};
			}

			return json;
		},
	},
	code: {
		post: (code, json) => {
			const {pluginData} = json;
			const {target} = pluginData;

			let changedCode = code;

			if (['angular', 'stencil'].includes(target)) {
				changedCode = changedCode
					.replace(
						`if (attr && attr.name === "class") {`,
						// Pass `style` to ref
						`else if (attr && ["style"].includes(attr.name)) {
				element.setAttribute(attr.name, attr.value);
			parent.removeAttribute(attr.name);
		}
					else if (attr && attr.name === "class") {`,
					)
					.replace(
						'attr &&',
						// Pass all `data-` and `aria-` attributes, except `data-density`
						"attr && attr.name !== 'data-density' &&",
					)
					.replace(
						'element.setAttribute(attr.name, attr.value);\n' +
							'          parent.removeAttribute(attr.name);',
						// Remove attribute from child if value is empty, otherwise forward it
						'if (attr.value) {\n' +
							'            element.setAttribute(attr.name, attr.value);\n' +
							'          } else {\n' +
							'            element.removeAttribute(attr.name);\n' +
							'          }\n' +
							'          parent.removeAttribute(attr.name);',
					)
					.replace(
						'`${currentClass ? `${currentClass} ` : ""}${value}`',
						'`${currentClass ? currentClass : ""}${value ? ` ${value}`: ""}`',
					);
			}

			return changedCode;
		},
	},
});
