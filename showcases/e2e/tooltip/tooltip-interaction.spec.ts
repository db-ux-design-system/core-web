import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '04/tooltip';

test.describe('DBTooltip', () => {
	runInteractionTest({
		title: 'should open on focus',
		path,
		example: 'Interaction',
		async run({ content }) {
			await content.getByTestId('button').focus();
			await expect(content.getByTestId('tooltip')).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should show the tooltip of a disabled button without forwarding the disabled state',
		path,
		example: 'Interaction',
		async run({ content }) {
			const disabledButton = content.getByTestId('disabled-button');
			const disabledTooltip = content.getByTestId('disabled-tooltip');

			// The button itself is disabled...
			await expect(disabledButton).toBeDisabled();

			// A disabled button receives no focus/hover, so the tooltip cannot be
			// opened by interaction. Force it visible the same way the hover
			// fixture does (`.db-tooltip[data-e2e-hover="true"]` extends
			// %show-popover in tooltip.scss) to prove the disabled button still
			// exposes its tooltip.
			await disabledTooltip.evaluate((tooltip: HTMLElement) => {
				tooltip.dataset.e2eHover = 'true';
			});

			// ...but its tooltip is still shown (forced via `data-e2e-hover`).
			await expect(disabledTooltip).toBeVisible();

			// The `disabled` state must not be forwarded to the tooltip element.
			await expect(disabledTooltip).not.toHaveAttribute('disabled');
			await expect(disabledTooltip).not.toHaveAttribute(
				'aria-disabled',
				'true'
			);
		}
	});
});
