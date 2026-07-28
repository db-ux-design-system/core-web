/**
 * Adds Angular RouterLink support to the generated DBLink component.
 *
 * RouterLink is applied to the db-link host, while DBLink renders an inner
 * anchor. The inner anchor mirrors RouterLink's URL and prevents its native
 * navigation so the click bubbles to RouterLink on the host. For Ctrl-Click etc,
 * prevent bubbling to skip RouterLink handling and preserve default link behavior.
 * This mirrors the onClick handler of RouterLink:
 * https://github.com/angular/angular/blob/5ad823139758b4d3a8a021d378b008c3457f8689/packages/router/src/directives/router_link.ts#L479
 */
const transformRouterLink = (code, componentName) => {
	if (componentName !== 'DBLink') return code;

	const replacements = [
		[
			'} from "@angular/core";',
			'inject, } from "@angular/core";\nimport { RouterLink } from "@angular/router";'
		],
		[
			'[attr.href]="href()"',
			'[attr.href]="routerLink?.urlTree ?? href()"\n    (click)="handleClick($event)"'
		],
		[
			'  constructor() {}',
			'  readonly routerLink = inject(RouterLink, { optional: true, self: true });\n\n  handleClick(e: MouseEvent) {\n    if (!this.routerLink) return;\n    if (e.button !== 0 || e.ctrlKey || e.shiftKey || e.altKey || e.metaKey || (this.target() && this.target() !== "_self") || this.routerLink.urlTree === null) {\n      e.stopPropagation();\n    } else {\n      e.preventDefault();\n    }\n  }\n\n  constructor() {}'
		]
	];

	for (const [from, to] of replacements) {
		if (!code.includes(from)) {
			throw new Error(
				`Angular RouterLink: Could not find ${JSON.stringify(from)} in ${componentName}. ` +
					'The generated DBLink format may have changed.'
			);
		}
		code = code.replace(from, to);
	}

	return code;
};

/** @type {import('@builder.io/mitosis').MitosisPlugin} */
module.exports = () => ({
	code: {
		post: (code, json) => transformRouterLink(code, json.name)
	}
});

module.exports.transformRouterLink = transformRouterLink;
