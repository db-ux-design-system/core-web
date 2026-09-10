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
			await expect(content.getByTestId('sub1')).toBeHidden();
			await content.getByTestId('test1').getByRole('button').hover();
			await expect(content.getByTestId('sub1')).toBeVisible();
		}
	});

	runInteractionTest({
		title: 'should open sub navigation on click (mobile)',
		path,
		example: 'Interaction',
		skip: { project: (project) => !project.name.startsWith('mobile') },
		async run({ content }) {
			const sub = content.getByTestId('sub1');
			await expect(sub).toBeHidden();
			await content.getByTestId('test1').getByRole('button').click();
			await expect(sub).toBeVisible();
			await content.getByText('Back').click();
			await expect(sub).toBeHidden();
		}
	});
});
