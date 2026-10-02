import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '05/navigation';

test.describe('DBNavigation', () => {
	runInteractionTest({
		title: 'should open sub navigation on hover (desktop)',
		path,
		example: 'Interaction',
		skip: { project: (project) => project.name.startsWith('mobile') },
		async run({ content }) {
			const toggle = content.getByTestId('test1').getByRole('button');
			// The expand button only reacts once the navigation-item's
			// post-mount effect has detected the slotted sub-navigation and
			// set aria-haspopup. Wait for that so the hover does not race init.
			await expect(toggle).toHaveAttribute('aria-haspopup', 'true');
			await expect(content.getByTestId('sub1')).toBeHidden();
			await toggle.hover();
			await expect(content.getByTestId('sub1')).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should open sub navigation on click (mobile)',
		path,
		example: 'Interaction',
		skip: {
			project: (project) => !project.name.startsWith('mobile'),
			// Mobile open-on-click relies on hasAreaPopup, which the Stencil
			// output never sets because the slotted sub-navigation is not a
			// real child of <menu> at detection time. DBNavigation is
			// deprecated (use DBControlPanelNavigation); matches the stencil
			// skip on the aria-/visual-snapshot specs. Fixed with feat-shell.
			stencil: true
		},
		async run({ content }) {
			const sub = content.getByTestId('sub1');
			const toggle = content.getByTestId('test1').getByRole('button');
			// The expand button toggles the sub-navigation only after the
			// navigation-item's post-mount effect has detected the slotted
			// sub-navigation and set aria-haspopup. Wait for that so the click
			// does not race init and become a no-op.
			await expect(toggle).toHaveAttribute('aria-haspopup', 'true');
			await expect(sub).toBeHidden();
			await toggle.click();
			await expect(sub).toBeVisible();
			await content.getByText('Back').click();
			await expect(sub).toBeHidden();
		}
	});
});
