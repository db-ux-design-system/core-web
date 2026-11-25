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
		title: 'should be placed next to its trigger on the first hover inside a drawer which was closed on load (#8873)',
		path,
		example: 'Interaction',
		async run({ page, content }) {
			// The bug only shows up with a low viewport
			await page.setViewportSize({ width: 1280, height: 670 });

			const tooltip = page.getByTestId('drawer-tooltip');
			// Root cause of #8873: a position computed while the drawer is
			// closed was written as inline styles and still applied on the
			// first hover. With CSS Anchor Positioning the browser positions
			// the tooltip, so no inline position may be written at all.
			const staleStyles = /inset|position|max-block-size/;
			expect((await tooltip.getAttribute('style')) ?? '').not.toMatch(
				staleStyles
			);

			await content.getByTestId('open-drawer').click();
			const trigger = page.getByTestId('drawer-tooltip-button');
			await expect(trigger).toBeVisible();
			expect((await tooltip.getAttribute('style')) ?? '').not.toMatch(
				staleStyles
			);

			await trigger.hover();
			await expect(tooltip).toBeVisible();

			const triggerBox = await trigger.boundingBox();
			const tooltipBox = await tooltip.boundingBox();
			expect(triggerBox).not.toBeNull();
			expect(tooltipBox).not.toBeNull();

			// Default placement is bottom (it may flip to top if there is no
			// space), in both cases it touches the trigger with the gap and
			// overlaps it horizontally
			const gapBelow =
				tooltipBox!.y - (triggerBox!.y + triggerBox!.height);
			const gapAbove =
				triggerBox!.y - (tooltipBox!.y + tooltipBox!.height);
			expect(
				Math.min(Math.abs(gapBelow), Math.abs(gapAbove))
			).toBeLessThan(20);
			expect(tooltipBox!.x).toBeLessThan(
				triggerBox!.x + triggerBox!.width
			);
			expect(tooltipBox!.x + tooltipBox!.width).toBeGreaterThan(
				triggerBox!.x
			);
			// Not clamped to the viewport height with a scrollbar
			expect(tooltipBox!.height).toBeLessThan(200);
		}
	});
});
