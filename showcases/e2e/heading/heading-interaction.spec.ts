import { expect, test } from '@playwright/test';
import { isVue, runInteractionTest } from '../default.ts';

const path = '04/heading';

test.describe('DBHeading', () => {
	runInteractionTest({
		title: 'renders exactly one native h1',
		path,
		example: 'Interaction',
		async run({ content }) {
			const heading = content.getByTestId('native-h1');
			expect(
				await heading.evaluate((element) =>
					element.tagName.toLowerCase()
				)
			).toBe('h1');
			expect(
				await heading.locator('h1, h2, h3, h4, h5, h6').count()
			).toBe(0);
		}
	});

	runInteractionTest({
		title: 'forwards native attributes',
		path,
		example: 'Interaction',
		async run({ content }) {
			const heading = content.getByTestId('forwarded-h6');
			await expect(heading).toHaveClass(/custom-h6/);
			await expect(heading).toHaveAttribute(
				'aria-label',
				'Accessible h6'
			);
			await expect(heading).toHaveAttribute('data-forwarded', 'h6');
			await expect(heading).toHaveAttribute('title', 'Title h6');
		}
	});

	runInteractionTest({
		title: 'forwards the Vue class alias',
		path,
		example: 'Interaction',
		// Only relevant for the Vue output, where `class` is aliased to
		// `className` so both APIs resolve to the same rendered class list.
		skip: { project: () => !isVue(process.env.showcase ?? '') },
		async run({ content }) {
			const heading = content.getByTestId('class-alias-h6');
			await expect(heading).toHaveClass(/db-heading/);
			await expect(heading).toHaveClass(/class-alias/);
		}
	});

	runInteractionTest({
		title: 'DBCustomHeading renders a layout wrapper without heading semantics of its own',
		path,
		example: 'Interaction',
		async run({ content }) {
			const wrapper = content.getByTestId('plain-custom-heading');
			expect(
				await wrapper.evaluate((element) =>
					element.tagName.toLowerCase()
				)
			).toBe('div');
			await expect(wrapper).toHaveClass(/db-custom-heading/);
			await expect(wrapper).not.toHaveAttribute('role');
			await expect(wrapper).not.toHaveAttribute('aria-level');
			expect(
				await wrapper.locator('h1, h2, h3, h4, h5, h6').count()
			).toBe(1);
		}
	});

	runInteractionTest({
		title: 'DBCustomHeading renders the start slot before and the end slot after the heading',
		path,
		example: 'Interaction',
		async run({ content }) {
			const wrapper = content.getByTestId('slotted-custom-heading');
			await expect(wrapper).toHaveText(
				/Section\s*Installation\s*More options/
			);
			const [startBox, headingBox, endBox] = await Promise.all([
				content.getByTestId('start-slot').boundingBox(),
				wrapper.locator('h2').boundingBox(),
				content.getByTestId('end-slot').boundingBox()
			]);
			expect(startBox!.x).toBeLessThan(headingBox!.x);
			expect(endBox!.x).toBeGreaterThan(headingBox!.x);
		}
	});

	runInteractionTest({
		title: 'DBCustomHeading keeps slot content out of the accessible heading name',
		path,
		example: 'Interaction',
		async run({ content }) {
			const wrapper = content.getByTestId('slotted-custom-heading');
			await expect(wrapper.locator('h2')).toHaveAccessibleName(
				'Installation'
			);
			await expect(content.getByTestId('end-slot')).toHaveAccessibleName(
				'More options'
			);
			expect(await wrapper.locator('h2 button').count()).toBe(0);
		}
	});

	runInteractionTest({
		title: 'DBCustomHeading keeps nested DB components at their standalone visual size',
		path,
		example: 'Interaction',
		async run({ content }) {
			const [
				referenceIconSize,
				nestedIconSize,
				referenceBadgeSize,
				nestedBadgeSize,
				referenceButtonSize,
				nestedButtonSize
			] = await Promise.all([
				content
					.getByTestId('reference-icon')
					.evaluate(
						(element) =>
							getComputedStyle(element, '::before').fontSize
					),
				content
					.getByTestId('nested-icon')
					.evaluate(
						(element) =>
							getComputedStyle(element, '::before').fontSize
					),
				content
					.getByTestId('reference-badge')
					.evaluate((element) => getComputedStyle(element).fontSize),
				content
					.getByTestId('nested-badge')
					.evaluate((element) => getComputedStyle(element).fontSize),
				content
					.getByTestId('reference-button')
					.locator('button')
					.evaluate((element) => getComputedStyle(element).fontSize),
				content
					.getByTestId('nested-button')
					.locator('button')
					.evaluate((element) => getComputedStyle(element).fontSize)
			]);

			expect(nestedIconSize).toBe(referenceIconSize);
			expect(nestedBadgeSize).toBe(referenceBadgeSize);
			expect(nestedButtonSize).toBe(referenceButtonSize);
		}
	});
});
