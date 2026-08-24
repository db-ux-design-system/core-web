import { expect, test } from '@playwright/experimental-ct-react';

import { DBDialogHeader } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_CLOSE_BUTTON } from '../../shared/constants.ts';

/* -----------------------------------------------------------------------------
 * Property tests
 *
 * Every property below enumerates a prop table instead of sampling with
 * fast-check: one browser mount per iteration makes random generation with the
 * usual 100 runs far too slow, so the spec notes require enumeration in
 * Playwright CT. Each table covers every value of every dimension at least once
 * and spells out the boundary cases the acceptance criteria name (unset props,
 * empty strings, empty slots, missing `<dialog>` ancestor).
 *
 * Slot content is written twice on purpose: the React output takes the slot as a
 * prop, the Vue output as a named template child. The JSX comment blocks below
 * hold the Vue variant and are uncommented while the spec is copied into the Vue
 * output.
 * -------------------------------------------------------------------------- */

const HEADING_ID_PREFIX = 'db-dialog-header-heading-';

/* Reads the rendered header once per mount, so a whole prop row is asserted with
 * a single round trip instead of one locator call per expectation. */
const readHeader = async (page: any): Promise<any> =>
	page.locator('.db-dialog-header').evaluate((root: any) => {
		const kindOf = (element: any): string => {
			if (element.classList.contains('db-dialog-header-container')) {
				return 'container';
			}

			if (element.classList.contains('db-button')) {
				return 'close-button';
			}

			return (
				element.getAttribute('data-testid') ??
				element.tagName.toLowerCase()
			);
		};

		const container = root.querySelector('.db-dialog-header-container');
		const closeButton = root.querySelector(':scope > .db-button');
		const children = Array.from(root.children);

		return {
			rootHasBaseClass: root.classList.contains('db-dialog-header'),
			containerCount: root.querySelectorAll('.db-dialog-header-container')
				.length,
			containerId: container?.getAttribute('id') ?? null,
			children: children.map((child: any) => kindOf(child)),
			containerChildren: Array.from(container?.children ?? []).map(
				(child: any) => kindOf(child)
			),
			headingCount: container?.querySelectorAll('h2').length ?? 0,
			headingText: container?.querySelector('h2')?.textContent?.trim(),
			closeButtonCount: root.querySelectorAll('.db-button').length,
			closeButtonIsLastChild: children.at(-1) === closeButton,
			closeButtonCommand: closeButton?.getAttribute('command'),
			closeButtonCommandFor:
				closeButton?.getAttribute('commandfor') ?? '',
			closeButtonNoText: closeButton?.getAttribute('data-no-text'),
			closeButtonId: closeButton?.getAttribute('id') ?? null,
			tooltipCount: closeButton?.querySelectorAll('.db-tooltip').length,
			tooltipText: closeButton
				?.querySelector('.db-tooltip')
				?.textContent?.trim()
		};
	});

const STRUCTURE_DIALOG_ID = 'p15-dialog';

type StructureCase = {
	name: string;
	component: any;
	/* The `<dialog>` ancestor id the close button has to target, empty without
	 * such an ancestor. */
	commandFor: string;
	children: string[];
	containerChildren: string[];
	closeButtonId?: string;
};

/* Covers `text` against children, both slots in all four combinations, the two
 * close button props and both states of the `<dialog>` ancestor. */
const STRUCTURE_CASES: StructureCase[] = [
	{
		name: 'children, no slots, no dialog ancestor',
		component: (
			<DBDialogHeader>
				<span data-testid="child">Child</span>
			</DBDialogHeader>
		),
		commandFor: '',
		children: ['container', 'close-button'],
		containerChildren: ['child']
	},
	{
		name: 'text, no slots, inside a dialog',
		component: (
			<dialog open={true} id={STRUCTURE_DIALOG_ID}>
				<DBDialogHeader text="My Title" />
			</dialog>
		),
		commandFor: STRUCTURE_DIALOG_ID,
		children: ['container', 'close-button'],
		containerChildren: ['h2']
	},
	{
		name: 'start slot and children, no dialog ancestor',
		component: (
			<DBDialogHeader startSlot={<span data-testid="start">Start</span>}>
				{/*<template v-slot:start-slot><span data-testid="start">Start</span></template>*/}
				<span data-testid="child">Child</span>
			</DBDialogHeader>
		),
		commandFor: '',
		children: ['container', 'close-button'],
		containerChildren: ['start', 'child']
	},
	{
		name: 'end slot and children, inside a dialog',
		component: (
			<dialog open={true} id={STRUCTURE_DIALOG_ID}>
				<DBDialogHeader endSlot={<span data-testid="end">End</span>}>
					{/*<template v-slot:end-slot><span data-testid="end">End</span></template>*/}
					<span data-testid="child">Child</span>
				</DBDialogHeader>
			</dialog>
		),
		commandFor: STRUCTURE_DIALOG_ID,
		children: ['container', 'end', 'close-button'],
		containerChildren: ['child']
	},
	{
		name: 'both slots, text and both close button props, inside a dialog',
		component: (
			<dialog open={true} id={STRUCTURE_DIALOG_ID}>
				<DBDialogHeader
					text="My Title"
					closeButtonText="Dismiss"
					closeButtonId="p15-close-button"
					startSlot={<span data-testid="start">Start</span>}
					endSlot={<span data-testid="end">End</span>}>
					{/*<template v-slot:start-slot><span data-testid="start">Start</span></template>*/}
					{/*<template v-slot:end-slot><span data-testid="end">End</span></template>*/}
					<span data-testid="child">Child</span>
				</DBDialogHeader>
			</dialog>
		),
		commandFor: STRUCTURE_DIALOG_ID,
		children: ['container', 'end', 'close-button'],
		containerChildren: ['start', 'h2'],
		closeButtonId: 'p15-close-button'
	},
	{
		name: 'both slots, no heading content, no dialog ancestor',
		component: (
			<DBDialogHeader
				closeButtonText="Dismiss"
				startSlot={<span data-testid="start">Start</span>}
				endSlot={<span data-testid="end">End</span>}>
				{/*<template v-slot:start-slot><span data-testid="start">Start</span></template>*/}
				{/*<template v-slot:end-slot><span data-testid="end">End</span></template>*/}
			</DBDialogHeader>
		),
		commandFor: '',
		children: ['container', 'end', 'close-button'],
		containerChildren: ['start']
	}
];

// Feature: dialog-component, Property 15: Header structure and slot order are stable
// **Validates: Requirements 6.1, 6.3, 6.4**
const testProperty15 = () => {
	for (const structureCase of STRUCTURE_CASES) {
		test(`Property 15: ${structureCase.name}`, async ({ mount, page }) => {
			await mount(structureCase.component);
			const header = await readHeader(page);

			// Requirement 6.1: one root with the base class holding exactly one
			// heading container whose id is the generated heading id.
			expect(header.rootHasBaseClass).toEqual(true);
			expect(header.containerCount).toEqual(1);
			expect(header.containerId?.startsWith(HEADING_ID_PREFIX)).toEqual(
				true
			);
			expect(header.containerId?.length).toBeGreaterThan(
				HEADING_ID_PREFIX.length
			);

			// Requirement 6.3: heading container first with `startSlot` inside it
			// before the heading content, then `endSlot`, then the close button.
			expect(header.children).toEqual(structureCase.children);
			expect(header.containerChildren).toEqual(
				structureCase.containerChildren
			);

			// Requirement 6.4: exactly one close button as the last child, with the
			// request-close command, no visible text label and the resolved
			// `<dialog>` ancestor id as command target.
			expect(header.closeButtonCount).toEqual(1);
			expect(header.closeButtonIsLastChild).toEqual(true);
			expect(header.closeButtonCommand).toEqual('request-close');
			expect(header.closeButtonNoText).toEqual('true');
			expect(header.closeButtonCommandFor).toEqual(
				structureCase.commandFor
			);
			expect(header.closeButtonId).toEqual(
				structureCase.closeButtonId ?? null
			);
		});
	}
};

type HeadingCase = {
	name: string;
	component: any;
	/* The expected heading text, absent when the children are the heading
	 * content. */
	heading?: string;
	containerChildren: string[];
};

/* Covers `text` unset, empty and non-empty, each with and without children. */
const HEADING_CASES: HeadingCase[] = [
	{
		name: 'text unset, with children',
		component: (
			<DBDialogHeader>
				<span data-testid="child">Child</span>
			</DBDialogHeader>
		),
		containerChildren: ['child']
	},
	{
		name: 'text empty, with children',
		component: (
			<DBDialogHeader text="">
				<span data-testid="child">Child</span>
			</DBDialogHeader>
		),
		containerChildren: ['child']
	},
	{
		name: 'text set, with children',
		component: (
			<DBDialogHeader text="My Title">
				<span data-testid="child">Child</span>
			</DBDialogHeader>
		),
		heading: 'My Title',
		containerChildren: ['h2']
	},
	{
		name: 'text set, without children',
		component: <DBDialogHeader text="Another Title" />,
		heading: 'Another Title',
		containerChildren: ['h2']
	},
	{
		name: 'text unset, without children',
		component: <DBDialogHeader />,
		containerChildren: []
	}
];

// Feature: dialog-component, Property 16: `text` replaces the children as heading content
// **Validates: Requirements 6.2, 6.10**
const testProperty16 = () => {
	for (const headingCase of HEADING_CASES) {
		test(`Property 16: ${headingCase.name}`, async ({ mount, page }) => {
			const component = await mount(headingCase.component);
			const header = await readHeader(page);

			expect(header.containerChildren).toEqual(
				headingCase.containerChildren
			);

			if (headingCase.heading) {
				// Requirement 6.2: the `text` value inside a single level-2 heading,
				// and no children next to it.
				expect(header.headingCount).toEqual(1);
				expect(header.headingText).toEqual(headingCase.heading);
				await expect(
					component.getByRole('heading', {
						level: 2,
						name: headingCase.heading,
						exact: true
					})
				).toBeVisible();
				await expect(component).not.toContainText('Child');
			} else {
				// Requirement 6.10: the children are the heading content and no
				// heading element is rendered.
				expect(header.headingCount).toEqual(0);
			}
		});
	}
};

type CloseButtonCase = {
	name: string;
	component: any;
	text: string;
	id: string | null;
};

/* Cross product of `closeButtonText` (unset, set) and `closeButtonId` (unset,
 * set). */
const CLOSE_BUTTON_CASES: CloseButtonCase[] = [
	{
		name: 'text unset, id unset',
		component: <DBDialogHeader text="My Title" />,
		text: DEFAULT_CLOSE_BUTTON,
		id: null
	},
	{
		name: 'text unset, id set',
		component: (
			<DBDialogHeader text="My Title" closeButtonId="p19-close-button" />
		),
		text: DEFAULT_CLOSE_BUTTON,
		id: 'p19-close-button'
	},
	{
		name: 'text set, id unset',
		component: <DBDialogHeader text="My Title" closeButtonText="Dismiss" />,
		text: 'Dismiss',
		id: null
	},
	{
		name: 'text set, id set',
		component: (
			<DBDialogHeader
				text="My Title"
				closeButtonText="Close this dialog"
				closeButtonId="p19-close-button"
			/>
		),
		text: 'Close this dialog',
		id: 'p19-close-button'
	}
];

// Feature: dialog-component, Property 19: Close button text resolves to prop or default and is used twice
// **Validates: Requirements 6.7, 6.8**
const testProperty19 = () => {
	for (const closeButtonCase of CLOSE_BUTTON_CASES) {
		test(`Property 19: ${closeButtonCase.name}`, async ({
			mount,
			page
		}) => {
			const component = await mount(closeButtonCase.component);
			const header = await readHeader(page);

			// Requirements 6.7, 6.8: the effective text is the accessible name of
			// the close button.
			await expect(
				component.getByRole('button', {
					name: closeButtonCase.text,
					exact: true
				})
			).toBeVisible();

			// Requirement 6.8: the identical value is the tooltip content.
			expect(header.tooltipCount).toEqual(1);
			expect(header.tooltipText).toEqual(closeButtonCase.text);

			// Requirement 6.7: an id attribute exactly when `closeButtonId` is set.
			expect(header.closeButtonId).toEqual(closeButtonCase.id);
		});
	}
};

const UNIQUE_ID_DIALOG_ID = 'p20-dialog';

/* Four instances in one document: standalone siblings, one nested inside another
 * header's slot content and one inside a `<dialog>`, so neither the render order
 * nor the ancestor chain can collapse two ids. */
const uniqueIdComponent: any = (
	<div>
		<DBDialogHeader text="First" />
		<DBDialogHeader text="Second" />
		<DBDialogHeader>
			<DBDialogHeader text="Third" />
		</DBDialogHeader>
		<dialog open={true} id={UNIQUE_ID_DIALOG_ID}>
			<DBDialogHeader text="Fourth" />
		</dialog>
	</div>
);

// Feature: dialog-component, Property 20: Heading ids are pairwise distinct
// **Validates: Requirements 6.12**
const testProperty20 = () => {
	test('Property 20: heading ids are pairwise distinct', async ({
		mount,
		page
	}) => {
		await mount(uniqueIdComponent);

		const headingIds: string[] = await page
			.locator('.db-dialog-header-container')
			.evaluateAll((containers: any[]) =>
				containers.map((container) => container.getAttribute('id'))
			);

		// Requirement 6.12: every instance carries a generated heading id and no
		// two of them are equal.
		expect(headingIds).toHaveLength(5);
		expect(
			headingIds.filter((headingId) =>
				headingId?.startsWith(HEADING_ID_PREFIX)
			)
		).toHaveLength(5);
		expect(new Set(headingIds).size).toEqual(headingIds.length);
	});
};

test.describe('DBDialogHeader', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testProperty15();
	testProperty16();
	testProperty19();
	testProperty20();
});
