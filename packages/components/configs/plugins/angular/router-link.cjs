/**
 * Adds Angular RouterLink support to the generated DBLink component.
 *
 * RouterLink is applied to the db-link host, while DBLink renders an inner
 * anchor. The inner anchor mirrors RouterLink's URL and prevents its native
 * navigation so the click bubbles to RouterLink on the host.
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
			'[attr.href]="routerLink?.urlTree ?? href()"\n    (click)="void (routerLink && $event.preventDefault())"'
		],
		[
			'  constructor() {}',
			'  readonly routerLink = inject(RouterLink, { optional: true });\n\n  constructor() {}'
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
