---
to: "<%= subComponent ? null : `../../showcases/e2e/${name}/${name}-interaction.spec.ts` %>"
---
import { test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

// TODO: Set the correct showcase route path, e.g. '02/<%= name %>'.
const path = 'XX/<%= name %>';

test.describe('DB<%= h.changeCase.pascal(name) %>', () => {
	// Interaction / behavior tests run against every framework showcase.
	// Visual, aria-snapshot and axe-core checks are covered by the generated
	// <%= name %>-visual-snapshot / -aria-snapshot / -axe-core specs, so only add
	// behavior that needs user interaction here.
	//
	// Add a matching fixture in
	// packages/components/src/components/<%= name %>/examples/interaction.example.lite.tsx
	// (wrapped in the showcase via LinkWrapperShowcase) and target it via the
	// `example` option below.
	runInteractionTest({
		title: 'should ...',
		path,
		example: 'Interaction',
		async run({ content }) {
			// await content.getByTestId('...').click();
			// await expect(content.getByTestId('...')).toBeVisible();
		}
	});
});
