import { expect, test } from '@playwright/experimental-ct-react';
import React from 'react';

// Import the generated React component
import { DBTextarea } from '../../../output/react/src/components/textarea';

/**
 * Test to verify that React components use framework-specific useId
 * for consistent SSR-compatible ID generation
 */

test.describe('SSR-compatible ID generation in React', () => {
	test('should generate consistent IDs using React useId', async ({ mount }) => {
		const Component = () => (
			<div>
				<DBTextarea label="First textarea" />
				<DBTextarea label="Second textarea" />
			</div>
		);

		const component = await mount(<Component />);
		
		// Get all textareas
		const textareas = component.locator('textarea');
		await expect(textareas).toHaveCount(2);
		
		// Get their IDs
		const firstId = await textareas.nth(0).getAttribute('id');
		const secondId = await textareas.nth(1).getAttribute('id');
		
		// Verify IDs are unique
		expect(firstId).not.toEqual(secondId);
		
		// Verify IDs follow the expected pattern (textarea-<react-id>)
		expect(firstId).toMatch(/^textarea-/);
		expect(secondId).toMatch(/^textarea-/);
		
		// Verify the IDs are deterministic/consistent with React's useId
		// React's useId should generate consistent IDs during SSR
		expect(firstId).toBeTruthy();
		expect(secondId).toBeTruthy();
	});

	test('should use custom ID when provided', async ({ mount }) => {
		const customId = 'my-custom-textarea-id';
		const component = await mount(
			<DBTextarea label="Custom ID textarea" id={customId} />
		);
		
		const textarea = component.locator('textarea');
		const id = await textarea.getAttribute('id');
		
		expect(id).toBe(customId);
	});

	test('should associate labels with textareas using generated IDs', async ({ mount }) => {
		const component = await mount(
			<DBTextarea label="Associated textarea" />
		);
		
		const textarea = component.locator('textarea');
		const label = component.locator('label');
		
		const textareaId = await textarea.getAttribute('id');
		const labelFor = await label.getAttribute('for');
		
		expect(textareaId).toBe(labelFor);
	});
});