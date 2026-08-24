import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBButton } from '../button/index';
import { DBDialogFooter } from '../dialog-footer/index';
import { DBDialogHeader } from '../dialog-header/index';
import { DBDialog } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants.ts';

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

/* -----------------------------------------------------------------------------
 * Property tests
 *
 * Every property below enumerates a prop table instead of sampling with
 * fast-check: one browser mount per iteration makes random generation with the
 * usual 100 runs far too slow, so the spec notes require enumeration in
 * Playwright CT. Each table covers every value of every dimension at least once
 * and spells out the boundary cases the acceptance criteria name (unset props,
 * empty strings, empty slots).
 *
 * Slot content is written twice on purpose: the React output takes the slot as a
 * prop, the Vue output as a named template child. The JSX comment blocks below
 * hold the Vue variant and are uncommented while the spec is copied into the Vue
 * output.
 *
 * Class lists are compared as sets, because Vue merges its own `class` attribute
 * onto the root element, which can list the base class twice.
 * -------------------------------------------------------------------------- */

const uniqueClasses = async (locator: any): Promise<string[]> =>
	locator.evaluate((element: any) =>
		Array.from(new Set(Array.from(element.classList) as string[])).sort()
	);

const isOpen = async (locator: any): Promise<boolean> =>
	locator.evaluate((element: any) => element.open);

type SlotCombination = 'none' | 'header' | 'footer' | 'both';

type StructureCase = {
	name: string;
	slots: SlotCombination;
	children: string[];
	open?: boolean | string;
	backdrop?: 'strong' | 'weak' | 'none';
	containerSize?: 'small' | 'medium' | 'large' | 'full';
	className?: string;
	id?: string;
};

const STRUCTURE_CASES: StructureCase[] = [
	{
		name: 'closed, all props unset, no children, no slots',
		slots: 'none',
		children: []
	},
	{
		name: 'open, strong backdrop, small, header slot, one child',
		slots: 'header',
		children: ['A'],
		open: true,
		backdrop: 'strong',
		containerSize: 'small'
	},
	{
		name: 'open via string, weak backdrop, medium, footer slot, two children',
		slots: 'footer',
		children: ['A', 'B'],
		open: 'open',
		backdrop: 'weak',
		containerSize: 'medium'
	},
	{
		name: 'open, backdrop none, large, both slots, three children',
		slots: 'both',
		children: ['A', 'B', 'C'],
		open: true,
		backdrop: 'none',
		containerSize: 'large'
	},
	{
		name: 'closed, full, class and id, both slots, no children',
		slots: 'both',
		children: [],
		open: false,
		containerSize: 'full',
		className: 'my-dialog',
		id: 'p1-dialog-a'
	},
	{
		name: 'open, class only, header slot, two children reversed',
		slots: 'header',
		children: ['B', 'A'],
		open: true,
		className: 'my-dialog'
	},
	{
		name: 'open, id only, no slots, one child',
		slots: 'none',
		children: ['C'],
		open: true,
		id: 'p1-dialog-b'
	},
	{
		name: 'closed, weak backdrop, full, footer slot, three children reordered',
		slots: 'footer',
		children: ['C', 'B', 'A'],
		backdrop: 'weak',
		containerSize: 'full'
	}
];

/* React consumes `className`, Vue consumes `class`; passing both keeps one prop
 * table usable for both outputs, because each output ignores the other prop. */
const structureProps = (structureCase: StructureCase): any => ({
	open: structureCase.open,
	backdrop: structureCase.backdrop,
	containerSize: structureCase.containerSize,
	className: structureCase.className,
	class: structureCase.className,
	id: structureCase.id
});

const structureChildren = (structureCase: StructureCase): any =>
	structureCase.children.map((label) => (
		<span key={label} data-testid={`child-${label}`}>
			{label}
		</span>
	));

const renderStructureCase = (structureCase: StructureCase): any => {
	if (structureCase.slots === 'header') {
		return (
			<DBDialog
				{...structureProps(structureCase)}
				header={<span data-testid="slot-header">Head</span>}>
				{/*<template v-slot:header><span data-testid="slot-header">Head</span></template>*/}
				{structureChildren(structureCase)}
			</DBDialog>
		);
	}

	if (structureCase.slots === 'footer') {
		return (
			<DBDialog
				{...structureProps(structureCase)}
				footer={<span data-testid="slot-footer">Foot</span>}>
				{/*<template v-slot:footer><span data-testid="slot-footer">Foot</span></template>*/}
				{structureChildren(structureCase)}
			</DBDialog>
		);
	}

	if (structureCase.slots === 'both') {
		return (
			<DBDialog
				{...structureProps(structureCase)}
				header={<span data-testid="slot-header">Head</span>}
				footer={<span data-testid="slot-footer">Foot</span>}>
				{/*<template v-slot:header><span data-testid="slot-header">Head</span></template>*/}
				{/*<template v-slot:footer><span data-testid="slot-footer">Foot</span></template>*/}
				{structureChildren(structureCase)}
			</DBDialog>
		);
	}

	return (
		<DBDialog {...structureProps(structureCase)}>
			{structureChildren(structureCase)}
		</DBDialog>
	);
};

// Feature: dialog-component, Property 1: Dialog DOM structure is stable across all prop combinations
// **Validates: Requirements 1.1, 1.2, 1.3, 1.10**
const testProperty1 = () => {
	for (const structureCase of STRUCTURE_CASES) {
		test(`Property 1: ${structureCase.name}`, async ({ mount, page }) => {
			const component = await mount(renderStructureCase(structureCase));

			// Requirement 1.1: exactly one <dialog class="db-dialog">, and the
			// outermost element of the component is that dialog.
			await expect(page.locator('dialog.db-dialog')).toHaveCount(1);
			expect(
				await component.evaluate((element: any) => ({
					tag: element.tagName.toLowerCase(),
					hasBaseClass: element.classList.contains('db-dialog')
				}))
			).toEqual({ tag: 'dialog', hasBaseClass: true });

			// Requirements 1.2, 1.3, 1.10: the header slot content, then the single
			// content element, then the footer slot content - and nothing at all for
			// a slot that received no content.
			const directChildren = await component.evaluate((element: any) =>
				Array.from(element.children).map((child: any) =>
					child.classList.contains('db-dialog-content')
						? 'content'
						: child.getAttribute('data-testid')
				)
			);
			const withHeader =
				structureCase.slots === 'header' ||
				structureCase.slots === 'both';
			const withFooter =
				structureCase.slots === 'footer' ||
				structureCase.slots === 'both';
			expect(directChildren).toEqual([
				...(withHeader ? ['slot-header'] : []),
				'content',
				...(withFooter ? ['slot-footer'] : [])
			]);

			// Requirement 1.2: the content element holds the children in source
			// order and is rendered even without children.
			await expect(page.locator('.db-dialog-content')).toHaveCount(1);
			const contentChildren = await component.evaluate((element: any) =>
				Array.from(
					element.querySelector('.db-dialog-content').children
				).map((child: any) => child.textContent?.trim() ?? '')
			);
			expect(contentChildren).toEqual(structureCase.children);
		});
	}
};

type IdCase = {
	name: string;
	expected: 'id' | 'propOverrides' | 'generated';
	id?: string;
	propOverridesId?: string;
};

const ID_CASES: IdCase[] = [
	{ name: 'id set, propOverrides unset', id: 'p2-dialog-id', expected: 'id' },
	{
		name: 'id set, propOverrides set',
		id: 'p2-dialog-id',
		propOverridesId: 'p2-override-id',
		expected: 'id'
	},
	{
		name: 'id set, propOverrides empty',
		id: 'p2-dialog-id',
		propOverridesId: '',
		expected: 'id'
	},
	{
		name: 'id empty, propOverrides set',
		id: '',
		propOverridesId: 'p2-override-id',
		expected: 'propOverrides'
	},
	{
		name: 'id unset, propOverrides set',
		propOverridesId: 'p2-override-id',
		expected: 'propOverrides'
	},
	{
		name: 'id empty, propOverrides empty',
		id: '',
		propOverridesId: '',
		expected: 'generated'
	},
	{ name: 'id empty, propOverrides unset', id: '', expected: 'generated' },
	{ name: 'id unset, propOverrides unset', expected: 'generated' },
	{
		name: 'id unset, propOverrides empty',
		propOverridesId: '',
		expected: 'generated'
	}
];

/* `containerSize` is the re-render trigger: it is a declared prop in every
 * output, so the update is observable as `data-container-size`. */
const renderIdCase = (
	idCase: IdCase,
	containerSize: 'small' | 'large'
): any => (
	<DBDialog
		id={idCase.id}
		propOverrides={
			idCase.propOverridesId === undefined
				? undefined
				: { id: idCase.propOverridesId }
		}
		containerSize={containerSize}>
		<span data-testid="content">Test</span>
	</DBDialog>
);

// Feature: dialog-component, Property 2: Dialog id resolution is deterministic, unique and stable
// **Validates: Requirements 1.4, 1.5, 1.9, 4.1**
const testProperty2 = () => {
	for (const idCase of ID_CASES) {
		test(`Property 2: ${idCase.name}`, async ({ mount }) => {
			const component = await mount(renderIdCase(idCase, 'small'));
			const idValue = await component.evaluate((element: any) =>
				element.getAttribute('id')
			);

			if (idCase.expected === 'id') {
				// Requirement 1.4
				expect(idValue).toEqual(idCase.id);
			} else if (idCase.expected === 'propOverrides') {
				// Requirement 1.9
				expect(idValue).toEqual(idCase.propOverridesId);
			} else {
				// Requirements 1.5, 4.1: prefix plus a non-empty unique part
				expect(idValue?.startsWith('db-dialog-')).toEqual(true);
				expect(idValue?.length).toBeGreaterThan('db-dialog-'.length);
			}

			// Requirement 1.5: the id stays unchanged while the instance is mounted.
			await component.update(renderIdCase(idCase, 'large'));
			await expect(component).toHaveAttribute(
				'data-container-size',
				'large'
			);
			expect(
				await component.evaluate((element: any) =>
					element.getAttribute('id')
				)
			).toEqual(idValue);
		});
	}

	test('Property 2: generated ids are unique per instance', async ({
		mount,
		page
	}) => {
		await mount(
			<DBDialog>
				<DBDialog>
					<span data-testid="nested-1">One</span>
				</DBDialog>
				<DBDialog>
					<span data-testid="nested-2">Two</span>
				</DBDialog>
			</DBDialog>
		);

		const ids: (string | null)[] = await page
			.locator('dialog.db-dialog')
			.evaluateAll((elements: any[]) =>
				elements.map((element) => element.getAttribute('id'))
			);

		expect(ids).toHaveLength(3);
		expect(ids.filter((id) => id?.startsWith('db-dialog-'))).toHaveLength(
			3
		);
		expect(new Set(ids).size).toEqual(3);
	});
};

type PassThroughCase = {
	name: string;
	attributes: Record<string, string>;
	className?: string;
};

const PASS_THROUGH_CASES: PassThroughCase[] = [
	{
		name: 'class unset, one data attribute',
		attributes: { 'data-custom': 'plain' }
	},
	{
		name: 'class empty, data and aria attribute',
		className: '',
		attributes: { 'data-custom': 'value', 'aria-label': 'Dialog label' }
	},
	{
		name: 'one class, aria attribute only',
		className: 'my-dialog',
		attributes: { 'aria-label': 'Named dialog' }
	},
	{
		name: 'two classes, several attributes with spaces',
		className: 'my-dialog my-second-class',
		attributes: {
			'data-one': '1',
			'data-two': 'two words',
			'aria-label': 'Dialog label',
			'aria-roledescription': 'fancy dialog'
		}
	},
	{
		name: 'one class, attribute with an empty value',
		className: 'my-dialog',
		attributes: { 'data-empty': '' }
	}
];

const renderPassThroughCase = (passThroughCase: PassThroughCase): any => (
	<DBDialog
		{...passThroughCase.attributes}
		className={passThroughCase.className}
		class={passThroughCase.className}
		footer={
			<DBDialogFooter
				{...passThroughCase.attributes}
				className={passThroughCase.className}
				class={passThroughCase.className}>
				<span data-testid="footer-child">Action</span>
			</DBDialogFooter>
		}>
		{/*<template v-slot:footer><DBDialogFooter {...passThroughCase.attributes} className={passThroughCase.className} class={passThroughCase.className}><span data-testid="footer-child">Action</span></DBDialogFooter></template>*/}
		<span data-testid="content">Test</span>
	</DBDialog>
);

// Feature: dialog-component, Property 3: Pass-through attributes and `className` do not interfere
// **Validates: Requirements 1.6, 1.7, 7.6**
const testProperty3 = () => {
	for (const passThroughCase of PASS_THROUGH_CASES) {
		test(`Property 3: ${passThroughCase.name}`, async ({ mount, page }) => {
			const component = await mount(
				renderPassThroughCase(passThroughCase)
			);
			const footer = page.locator('footer.db-dialog-footer');
			await expect(footer).toHaveCount(1);

			// Requirements 1.6, 7.6: every attribute reaches the element that
			// carries the component ref with an unchanged value.
			for (const [name, value] of Object.entries(
				passThroughCase.attributes
			)) {
				await expect(component).toHaveAttribute(name, value);
				await expect(footer).toHaveAttribute(name, value);
			}

			// Requirement 1.7: base class plus `className`, nothing else.
			const expectedExtraClasses = passThroughCase.className
				? passThroughCase.className.split(' ')
				: [];
			expect(await uniqueClasses(component)).toEqual(
				['db-dialog', ...expectedExtraClasses].sort()
			);
			expect(await uniqueClasses(footer)).toEqual(
				['db-dialog-footer', ...expectedExtraClasses].sort()
			);
		});
	}
};

type CycleNode = { testId: string; text?: string; isInput?: boolean };

type CycleCase = { name: string; nodes: CycleNode[] };

const CYCLE_CASES: CycleCase[] = [
	{ name: 'no content', nodes: [] },
	{ name: 'one text node', nodes: [{ testId: 'cycle-a', text: 'A' }] },
	{
		name: 'two text nodes',
		nodes: [
			{ testId: 'cycle-a', text: 'A' },
			{ testId: 'cycle-b', text: 'B' }
		]
	},
	{
		name: 'text node and input',
		nodes: [
			{ testId: 'cycle-a', text: 'A' },
			{ testId: 'cycle-input', isInput: true }
		]
	},
	{
		name: 'input between text nodes',
		nodes: [
			{ testId: 'cycle-a', text: 'A' },
			{ testId: 'cycle-input', isInput: true },
			{ testId: 'cycle-b', text: 'B' }
		]
	}
];

const renderCycleCase = (cycleCase: CycleCase, open: boolean): any => (
	<DBDialog open={open}>
		{cycleCase.nodes.map((node) =>
			node.isInput ? (
				<input
					key={node.testId}
					data-testid={node.testId}
					type="text"
				/>
			) : (
				<span key={node.testId} data-testid={node.testId}>
					{node.text}
				</span>
			)
		)}
	</DBDialog>
);

/* The marker is set on the DOM node itself, so a re-created node shows up as a
 * missing marker; the input value covers the "same values" part. */
const readCycleContent = async (component: any): Promise<any[]> =>
	component.evaluate((element: any) =>
		Array.from(element.querySelector('.db-dialog-content').children).map(
			(child: any) => ({
				tag: child.tagName.toLowerCase(),
				testId: child.getAttribute('data-testid'),
				text: child.textContent ?? '',
				value: child.value ?? null,
				marker: child.__dialogCycleMarker ?? null
			})
		)
	);

// Feature: dialog-component, Property 13: An open, close, open cycle preserves the dialog content
// **Validates: Requirements 4.3**
const testProperty13 = () => {
	for (const cycleCase of CYCLE_CASES) {
		test(`Property 13: ${cycleCase.name}`, async ({ mount }) => {
			const component = await mount(renderCycleCase(cycleCase, true));
			await expect.poll(() => isOpen(component)).toEqual(true);

			await component.evaluate((element: any) => {
				Array.from(
					element.querySelector('.db-dialog-content').children
				).forEach((child: any, index: number) => {
					child.__dialogCycleMarker = `kept-${index}`;
					if (child.tagName.toLowerCase() === 'input') {
						child.value = 'typed value';
					}
				});
			});
			const before = await readCycleContent(component);

			await component.update(renderCycleCase(cycleCase, false));
			await expect.poll(() => isOpen(component)).toEqual(false);

			await component.update(renderCycleCase(cycleCase, true));
			await expect.poll(() => isOpen(component)).toEqual(true);

			// Requirement 4.3: the same content nodes with the same values.
			expect(await readCycleContent(component)).toEqual(before);
		});
	}
};

const CALLBACK_DIALOG_ID = 'p14-dialog';
const CALLBACK_CLOSE_BUTTON_ID = 'p14-close-button';
const CALLBACK_FORM_SUBMIT_ID = 'p14-form-submit';
const CALLBACK_INVOKER_ID = 'p14-invoker';

/* Requirement 5.7: a programmatic close via the `open` property, a `close`
 * command and a `<form method="dialog">` submission call `onClose` only. The
 * close-request triggers - Escape and the close control, which is a
 * `command="request-close"` button - run the platform's close-request steps and
 * therefore reach `onCancel` before `onClose` (Requirements 5.6, 6.4). */
const CALLBACK_TRIGGERS = [
	{ kind: 'escape', name: 'Escape key', expectsCancel: true },
	{ kind: 'close-button', name: 'close button', expectsCancel: true },
	{
		kind: 'open-property',
		name: 'open property change',
		expectsCancel: false
	},
	{
		kind: 'dialog-form',
		name: 'dialog form submission',
		expectsCancel: false
	},
	{ kind: 'invoker-command', name: 'invoker command', expectsCancel: false }
];

const CALLBACK_SUBSETS = [
	{ name: 'no callbacks', withClose: false, withCancel: false },
	{ name: 'onClose only', withClose: true, withCancel: false },
	{ name: 'onCancel only', withClose: false, withCancel: true },
	{ name: 'both callbacks', withClose: true, withCancel: true }
];

const renderCallbackCase = (
	open: boolean,
	onClose: any,
	onCancel: any
): any => (
	<DBDialog
		id={CALLBACK_DIALOG_ID}
		open={open}
		onClose={onClose}
		onCancel={onCancel}
		header={
			<DBDialogHeader
				text="Title"
				closeButtonId={CALLBACK_CLOSE_BUTTON_ID}
			/>
		}>
		{/*<template v-slot:header><DBDialogHeader text="Title" closeButtonId={CALLBACK_CLOSE_BUTTON_ID} /></template>*/}
		<span data-testid="callback-content">Test</span>
		<form method="dialog">
			<button id={CALLBACK_FORM_SUBMIT_ID} type="submit">
				Submit
			</button>
		</form>
		<DBButton
			id={CALLBACK_INVOKER_ID}
			type="button"
			command="close"
			commandfor={CALLBACK_DIALOG_ID}>
			Command close
		</DBButton>
	</DBDialog>
);

// Feature: dialog-component, Property 14: Callback contract holds for every close trigger
// **Validates: Requirements 5.1, 5.2, 5.4, 5.7**
const testProperty14 = () => {
	for (const trigger of CALLBACK_TRIGGERS) {
		for (const subset of CALLBACK_SUBSETS) {
			test(`Property 14: ${trigger.name} with ${subset.name}`, async ({
				mount,
				page
			}) => {
				const calls: string[] = [];
				const pageErrors: string[] = [];
				page.on('pageerror', (error: any) => {
					pageErrors.push(String(error));
				});

				const onClose = subset.withClose
					? () => {
							calls.push('close');
						}
					: undefined;
				const onCancel = subset.withCancel
					? () => {
							calls.push('cancel');
						}
					: undefined;

				const component = await mount(
					renderCallbackCase(true, onClose, onCancel)
				);
				await expect.poll(() => isOpen(component)).toEqual(true);

				/* The native event object cannot be inspected in the test process,
				 * because Playwright serialises the callback arguments. A browser
				 * side log records the event type and target instead, which is what
				 * Requirements 5.1 and 5.2 describe. */
				await component.evaluate((element: any) => {
					(window as any).__dialogEvents = [];
					for (const type of ['cancel', 'close']) {
						element.addEventListener(type, (event: any) => {
							(window as any).__dialogEvents.push(
								`${event.type}:${event.target === element}`
							);
						});
					}
				});

				if (trigger.kind === 'escape') {
					await page.keyboard.press('Escape');
				} else if (trigger.kind === 'close-button') {
					await page.locator(`#${CALLBACK_CLOSE_BUTTON_ID}`).click();
				} else if (trigger.kind === 'open-property') {
					await component.update(
						renderCallbackCase(false, onClose, onCancel)
					);
				} else if (trigger.kind === 'dialog-form') {
					await page.locator(`#${CALLBACK_FORM_SUBMIT_ID}`).click();
				} else {
					await page.locator(`#${CALLBACK_INVOKER_ID}`).click();
				}

				// Requirement 5.4: the close completes for every callback subset.
				await expect.poll(() => isOpen(component)).toEqual(false);

				const expectedCancel = trigger.expectsCancel ? ['cancel'] : [];
				expect(
					await page.evaluate(() => (window as any).__dialogEvents)
				).toEqual([
					...expectedCancel.map((type) => `${type}:true`),
					'close:true'
				]);

				// Requirements 5.1, 5.2, 5.4, 5.7: each present callback fires
				// exactly once for the triggers that produce its event, and the
				// absent ones neither fire nor break the close.
				expect(calls).toEqual([
					...(subset.withCancel ? expectedCancel : []),
					...(subset.withClose ? ['close'] : [])
				]);
				expect(pageErrors).toEqual([]);
			});
		}
	}
};

test.describe('DBDialog', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		testComponent(viewport);
		if (viewport.name === 'mobile') {
			testA11y();
			testAction();
		}
	});

	test.describe('properties', () => {
		test.use({ viewport: DEFAULT_VIEWPORT });
		testProperty1();
		testProperty2();
		testProperty3();
		testProperty13();
		testProperty14();
	});
});
