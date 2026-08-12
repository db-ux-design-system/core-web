const OWN_DATA_ATTRIBUTES = [
	'data-size',
	'data-font-weight',
	'data-alignment',
	'data-paragraph-spacing',
	'data-density'
];

const fail = (target, message) => {
	throw new Error(
		`DBHeading ${target} dynamic-root transform failed: ${message}`
	);
};

const COPY_METHOD = `  private copyHeadingAttributes(from: HTMLElement | null, to: HTMLElement | null) {
    if (!from || !to || from === to) return;
    for (const attr of Array.from(from.attributes)) {
      if (
        attr.name === "style" ||
        attr.name.startsWith("aria-") ||
        (attr.name.startsWith("data-") && !${JSON.stringify(OWN_DATA_ATTRIBUTES)}.includes(attr.name))
      ) {
        to.setAttribute(attr.name, attr.value);
      } else if (attr.name === "class") {
        const classes = new Set([...(to.getAttribute("class") ?? "").split(/\\s+/), ...attr.value.split(/\\s+/)]);
        to.setAttribute("class", [...classes].filter(Boolean).join(" "));
      }
    }
  }
`;

const replaceOnce = (code, marker, replacement, target) => {
	if (code.split(marker).length !== 2) fail(target, `expected one ${marker}`);
	return code.replace(marker, replacement);
};

const transformAngular = (code) => {
	const observerCall = 'this.enableAttributePassing(element, "db-heading");';
	if (!code.includes(observerCall)) {
		fail('angular', `expected ${observerCall}`);
	}
	let changed = code.replace(
		observerCall,
		'this.enableAttributePassing(this._ref()?.nativeElement ?? null, "db-heading");'
	);
	changed = replaceOnce(
		changed,
		'  constructor() {}',
		`  private activeHeadingElement: HTMLElement | null = null;\n${COPY_METHOD}\n  constructor() {\n    effect(() => {\n      const element = this._ref()?.nativeElement ?? null;\n      if (element !== this.activeHeadingElement) {\n        this.copyHeadingAttributes(this.activeHeadingElement, element);\n        this.activeHeadingElement = element;\n        this.enableAttributePassing(element, "db-heading");\n      }\n    });\n  }`,
		'angular'
	);
	return changed;
};

const transformStencil = (code) => {
	let changed = replaceOnce(
		code,
		'private _ref!: HTMLHeadingElement | any;',
		`private _ref!: HTMLHeadingElement | any;\n  private _activeHeadingElement: HTMLHeadingElement | null = null;\n${COPY_METHOD}`,
		'stencil'
	);
	changed = replaceOnce(
		changed,
		'this.enableAttributePassing(element, "db-heading");',
		'this.enableAttributePassing(this._ref, "db-heading");',
		'stencil'
	);
	changed = replaceOnce(
		changed,
		'  componentDidLoad() {',
		`  componentDidRender() {\n    const element = this.rootElement.querySelector("h1, h2, h3, h4, h5, h6") as HTMLHeadingElement | null;\n    this.copyHeadingAttributes(this._activeHeadingElement, element);\n    this._activeHeadingElement = element;\n    this._ref = element;\n    this.enableAttributePassing(element, "db-heading");\n  }\n\n  componentDidLoad() {`,
		'stencil'
	);
	changed = replaceOnce(changed, '@Prop() as:', '@Prop() as!:', 'stencil');
	return changed;
};

const transformHeadingDynamicRoot = (code, target, componentName) => {
	if (componentName !== 'DBHeading') return code;
	if (target === 'angular') return transformAngular(code);
	if (target === 'stencil') return transformStencil(code);
	fail(target, 'unsupported target');
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) =>
			transformHeadingDynamicRoot(code, json.pluginData.target, json.name)
	}
});

module.exports.transformHeadingDynamicRoot = transformHeadingDynamicRoot;
