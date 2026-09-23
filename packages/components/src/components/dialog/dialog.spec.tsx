import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBDialogHeader } from '../dialog-header/index';
import { DBDialog } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { TESTING_VIEWPORTS } from '../../shared/constants.ts';

const comp: any = (
	<DBDialog open={true} header={<DBDialogHeader text="Title" />}>
		{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
		Test
	</DBDialog>
);

const testComponent = (viewport) => {
	test(`should contain text and heading for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		await expect(component).toContainText('Test');
		await expect(
			component.getByRole('heading', { name: 'Title' })
		).toBeVisible();
	});

	test.fixme(`should match screenshot for device ${viewport.name}`, async ({
		mount,
		page
	}) => {
		await page.setViewportSize({
			width: viewport.width,
			height: viewport.height
		});
		const component = await mount(comp);
		// TODO: Screenshots are not captured for top-layer
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
	test('should have same aria-snapshot', async ({ mount }, testInfo) => {
		const component = await mount(comp);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-dialog')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

const testAction = () => {
	test(`should compose the heading into a consumer aria-labelledby`, async ({
		mount,
		page
	}) => {
		// The header contributes the visible heading to the accessible name and
		// composes with a consumer-supplied id (aria-labelledby is a token list),
		// so the dialog ends up referencing both.
		const dialog: any = (
			<DBDialog
				open={true}
				aria-labelledby="consumer-label"
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		await mount(dialog);
		// The composition settles asynchronously: React applies the controlled
		// aria-labelledby, then the header observer re-appends the heading token.
		const dialogEl = page.locator('dialog.db-dialog');
		await expect
			.poll(async () => {
				const labelledBy =
					(await dialogEl.getAttribute('aria-labelledby')) ?? '';
				return labelledBy.split(/\s+/).filter(Boolean);
			})
			.toEqual(
				expect.arrayContaining([
					'consumer-label',
					expect.stringMatching(/-heading$/)
				])
			);
	});

	test(`should derive the heading id from a consumer header id`, async ({
		mount,
		page
	}) => {
		// The heading id is derived from the header's own id with a `-heading`
		// suffix, so it is deterministic (not a random uuid) when the consumer
		// sets an id, and the dialog references exactly that.
		const dialog: any = (
			<DBDialog
				open={true}
				header={<DBDialogHeader id="my-header" text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader id="my-header" text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		await mount(dialog);
		const headingContent = page.locator('.db-dialog-header-content');
		await expect(headingContent).toHaveAttribute('id', 'my-header-heading');
		await expect(page.locator('dialog.db-dialog')).toHaveAttribute(
			'aria-labelledby',
			'my-header-heading'
		);
	});

	test(`should let a consumer aria-label override the header naming`, async ({
		mount,
		page
	}) => {
		// aria-labelledby wins over aria-label in the accessible-name computation,
		// so the header must NOT add its heading reference when the consumer set an
		// aria-label - otherwise the label override would be silently defeated.
		const dialog: any = (
			<DBDialog
				open={true}
				aria-label="Consumer name"
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		await mount(dialog);
		const dialogEl = page.locator('dialog.db-dialog');
		// No generated aria-labelledby, so the aria-label is the accessible name.
		await expect(dialogEl).not.toHaveAttribute('aria-labelledby');
		await expect(dialogEl).toHaveAccessibleName('Consumer name');
	});

	test(`should wire the close button commandfor to the dialog id`, async ({
		mount,
		page
	}) => {
		// The dialog wires its own close button's commandfor to its id (in
		// connectCloseButton) after the id lands on the <dialog>, so the native
		// request-close command resolves even when the header mounted first.
		const dialog: any = (
			<DBDialog
				open={true}
				propOverrides={{ id: 'dialog-initial' }}
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const component = await mount(dialog);
		const closeButton = page.locator(
			'.db-dialog-header [command="request-close"]'
		);
		await expect(closeButton).toHaveAttribute(
			'commandfor',
			'dialog-initial'
		);
		// A prop-driven id change resyncs the target, so a stale id cannot
		// resolve to another dialog reusing the old one.
		await component.update(
			<DBDialog
				open={true}
				propOverrides={{ id: 'dialog-renamed' }}
				header={<DBDialogHeader text="Title" />}>
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		await expect(closeButton).toHaveAttribute(
			'commandfor',
			'dialog-renamed'
		);
	});

	test(`should fall back to a generated id when a controlled id is cleared`, async ({
		mount,
		page
	}) => {
		// Clearing an explicit id must switch to the generated fallback, not keep
		// the stale consumer id - otherwise reusing that id elsewhere yields
		// duplicate ids and a misdirected commandfor.
		const component = await mount(
			<DBDialog open={true} id="dialog-controlled">
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const dialogEl = page.locator('dialog.db-dialog');
		await expect(dialogEl).toHaveAttribute('id', 'dialog-controlled');
		// The consumer clears the id at runtime.
		await component.update(
			<DBDialog open={true} id={undefined}>
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		// The id must no longer be the cleared value; it falls back to the generated one.
		await expect(dialogEl).not.toHaveAttribute('id', 'dialog-controlled');
		await expect(dialogEl).toHaveAttribute('id', /^db-dialog-/);
	});

	test(`should close dialog via close button`, async ({ mount }) => {
		let closeCount = 0;
		const dialog: any = (
			<DBDialog
				open={true}
				onClose={() => closeCount++}
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const component = await mount(dialog);
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await component.getByRole('button').click();
		await expect.poll(() => closeCount).toEqual(1);
	});

	test(`should invoke consumer onClick alongside the ponyfill`, async ({
		mount
	}) => {
		// Regression guard: the ponyfill handleClick used to overwrite the
		// consumer's forwarded onClick, so a native handler never fired.
		let clickCount = 0;
		const dialog: any = (
			<DBDialog
				open={true}
				onClick={() => clickCount++}
				header={<DBDialogHeader text="Title" />}>
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const component = await mount(dialog);
		await component.getByTestId('test').click();
		await expect.poll(() => clickCount).toEqual(1);
	});

	test(`should cancel and close dialog via escape`, async ({
		mount,
		page
	}) => {
		let cancelCount = 0;
		let closeCount = 0;
		const dialog: any = (
			<DBDialog
				open={true}
				onCancel={() => cancelCount++}
				onClose={() => closeCount++}
				header={<DBDialogHeader text="Title" />}>
				{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
				<span data-testid="test">Test</span>
			</DBDialog>
		);
		const component = await mount(dialog);
		const testSpan = component.getByTestId('test');
		await expect(testSpan).toBeVisible();
		await page.keyboard.press('Escape');
		await expect.poll(() => cancelCount).toEqual(1);
		await expect.poll(() => closeCount).toEqual(1);
		await expect(testSpan).not.toBeVisible();
	});
};

test.describe('DBDialog', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
			testAction();
		}
	});
});
