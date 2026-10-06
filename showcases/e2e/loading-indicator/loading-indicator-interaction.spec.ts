import { expect, test } from '@playwright/test';
import { runInteractionTest } from '../default.ts';

const path = '06/loading-indicator';

test.describe('DBLoadingIndicator', () => {
	runInteractionTest({
		title: 'should default to the status live-region role',
		path,
		example: 'Interaction',
		async run({ content }) {
			// The live region is the root element itself, so the role sits on
			// the component root (matching DBNotification) rather than on a
			// descendant.
			const indicator = content
				.getByTestId('default-loading')
				.locator('.db-loading-indicator');
			await expect(indicator).toHaveAttribute('role', 'status');
			await expect(indicator).toContainText('Test');
		}
	});

	runInteractionTest({
		title: 'should derive the alert role from a critical state',
		path,
		example: 'Interaction',
		async run({ content }) {
			const indicator = content
				.getByTestId('critical-loading')
				.locator('.db-loading-indicator');
			await expect(indicator).toHaveAttribute('role', 'alert');
		}
	});

	runInteractionTest({
		title: 'should allow overriding the role',
		path,
		example: 'Interaction',
		async run({ content }) {
			const indicator = content
				.getByTestId('role-override-loading')
				.locator('.db-loading-indicator');
			await expect(indicator).toHaveAttribute('role', 'alert');
		}
	});

	runInteractionTest({
		title: 'should put the id on the root element',
		path,
		example: 'Interaction',
		async run({ content }) {
			const indicator = content
				.getByTestId('id-loading')
				.locator('.db-loading-indicator');
			await expect(indicator).toHaveAttribute('id', 'my-loading');
		}
	});

	runInteractionTest({
		title: 'should expose a native progress for determinate values',
		path,
		example: 'Interaction',
		async run({ content }) {
			const progress = content
				.getByTestId('determinate-loading')
				.locator('progress');
			await expect(progress).toHaveAttribute('value', '42');
			await expect(progress).toHaveAttribute('max', '100');
		}
	});

	runInteractionTest({
		title: 'should clamp the percentage when value exceeds max',
		path,
		example: 'Interaction',
		async run({ content }) {
			const indicator = content
				.getByTestId('clamp-loading')
				.locator('.db-loading-indicator');
			const percentage = await indicator.evaluate(
				(element: HTMLElement) =>
					element.style
						.getPropertyValue('--db-loading-indicator-percentage')
						.trim()
			);
			expect(percentage).toBe('1.00');
		}
	});

	runInteractionTest({
		title: 'should treat string boolean "false" as not indeterminate',
		path,
		example: 'Interaction',
		async run({ content }) {
			// A native progress is only rendered in determinate mode.
			const progress = content
				.getByTestId('string-false-loading')
				.locator('progress');
			await expect(progress).toHaveCount(1);
		}
	});
});
