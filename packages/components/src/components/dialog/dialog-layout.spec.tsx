import { expect, test } from '@playwright/experimental-ct-react';

import {
	DEFAULT_VIEWPORT,
	DESKTOP_VIEWPORT,
	TESTING_VIEWPORTS
	// @ts-ignore - vue can only find it with .ts as file ending
} from '../../shared/constants.ts';
import { DBDialogFooter } from '../dialog-footer/index';
import { DBDialogHeader } from '../dialog-header/index';
import { DBDialog } from './index';

/**
 * Layout, sizing and modality properties for Properties 5 to 11.
 *
 * All properties are enumerated over the prop tables below instead of being sampled
 * with fast-check, because one browser mount per iteration is too slow for random
 * generation (see the spec's Notes section).
 *
 * Every assertion reads computed geometry through `getBoundingClientRect` and
 * `getComputedStyle`; there is no screenshot assertion in this file, because the
 * top layer is not captured reliably.
 */

/** `--db-dialog-viewport-inset` is the literal `40px` in `dialog.scss`. */
const VIEWPORT_INSET = 40;

/**
 * The component test harness loads `rollup.css` plus the colour and theme sheets,
 * none of which ships the foundations container scale, so `--db-container-xs`,
 * `--db-container-lg` and `--db-container-3xl` are undefined there. They are injected
 * with distinct sentinel values, which is what a consuming application provides and
 * which additionally makes the Container_Size mapping assertion independent of the
 * concrete token values.
 */
const CONTAINER_SCALE = { xs: 111, lg: 222, '3xl': 333 };

type ContainerScale = typeof CONTAINER_SCALE;

const injectContainerScale = async (
	page: any,
	overrides: Partial<ContainerScale> = {}
): Promise<ContainerScale> => {
	const scale = { ...CONTAINER_SCALE, ...overrides };
	await page.addStyleTag({
		content: `:root{--db-container-xs:${scale.xs}px;--db-container-lg:${scale.lg}px;--db-container-3xl:${scale['3xl']}px;}`
	});
	return scale;
};

type ContentSize = 'short' | 'tall' | 'wide' | 'huge';

const CONTENT_SIZES: Record<ContentSize, { inline: number; block: number }> = {
	short: { inline: 200, block: 100 },
	tall: { inline: 200, block: 3000 },
	wide: { inline: 4000, block: 100 },
	huge: { inline: 4000, block: 4000 }
};

type DialogCase = {
	backdrop?: any;
	containerSize?: any;
	content?: ContentSize;
};

/* React consumes the `header`/`footer` props, Vue consumes the matching named
 * slots; the commented template is uncommented for the Vue output, so one render
 * helper stays usable for both. The content is a single literal element, because
 * a JSX expression child is dropped in the Vue output as soon as the children
 * contain slot templates. Additional focusable content is injected from the test
 * instead, which keeps both outputs on the same markup. */
const renderPlain = (dialogCase: DialogCase = {}): any => {
	const size = CONTENT_SIZES[dialogCase.content ?? 'short'];
	return (
		<DBDialog
			open={true}
			backdrop={dialogCase.backdrop}
			containerSize={dialogCase.containerSize}>
			<div
				data-testid="content"
				style={{
					inlineSize: `${size.inline}px`,
					blockSize: `${size.block}px`
				}}>
				Test
			</div>
		</DBDialog>
	);
};

const renderFramed = (dialogCase: DialogCase = {}): any => {
	const size = CONTENT_SIZES[dialogCase.content ?? 'short'];
	return (
		<DBDialog
			open={true}
			backdrop={dialogCase.backdrop}
			containerSize={dialogCase.containerSize}
			header={<DBDialogHeader text="Title" />}
			footer={<DBDialogFooter>Footer</DBDialogFooter>}>
			{/*<template v-slot:header><DBDialogHeader text="Title" /></template>*/}
			{/*<template v-slot:footer><DBDialogFooter>Footer</DBDialogFooter></template>*/}
			<div
				data-testid="content"
				style={{
					inlineSize: `${size.inline}px`,
					blockSize: `${size.block}px`
				}}>
				Test
			</div>
		</DBDialog>
	);
};

const dialogLocator = (page: any) => page.locator('dialog.db-dialog');

type MaxWidthCase = {
	name: string;
	viewport: { width: number; height: number };
	containerSize?: any;
	/** Consumer value for `--db-dialog-max-width`, set inline on the `<dialog>`. */
	override?: string;
	/** Which entry of the Container_Size scale the resolution has to select. */
	expected: 'xs' | 'lg' | '3xl' | 'viewport' | 'override';
};

/**
 * Prop table for Property 5. `containerSize` appears unset, empty, unknown and as
 * each of the four supported values; `--db-dialog-max-width` appears unset, below
 * the viewport clamp and above it, and is paired both with an absent and with a
 * present `containerSize` so that override-before-attribute-before-fallback is
 * observable. The last two rows repeat the widest cases on a narrow viewport, where
 * the clamp is the deciding term.
 */
const MAX_WIDTH_CASES: MaxWidthCase[] = [
	{
		name: 'containerSize unset falls back to medium',
		viewport: DESKTOP_VIEWPORT,
		expected: 'lg'
	},
	{
		name: 'containerSize empty falls back to medium',
		viewport: DESKTOP_VIEWPORT,
		containerSize: '',
		expected: 'lg'
	},
	{
		name: 'containerSize unknown falls back to medium',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'huge',
		expected: 'lg'
	},
	{
		name: 'containerSize small resolves to the xs container',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'small',
		expected: 'xs'
	},
	{
		name: 'containerSize medium resolves to the lg container',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'medium',
		expected: 'lg'
	},
	{
		name: 'containerSize large resolves to the 3xl container',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'large',
		expected: '3xl'
	},
	{
		name: 'containerSize full resolves to the viewport inline size',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'full',
		expected: 'viewport'
	},
	{
		name: 'override without containerSize wins over the fallback',
		viewport: DESKTOP_VIEWPORT,
		override: '600px',
		expected: 'override'
	},
	{
		name: 'override with containerSize small wins over the attribute',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'small',
		override: '600px',
		expected: 'override'
	},
	{
		name: 'override above the clamp is capped',
		viewport: DESKTOP_VIEWPORT,
		containerSize: 'large',
		override: '5000px',
		expected: 'override'
	},
	{
		name: 'containerSize large is capped on a narrow viewport',
		viewport: DEFAULT_VIEWPORT,
		containerSize: 'large',
		expected: '3xl'
	},
	{
		name: 'containerSize full is capped on a narrow viewport',
		viewport: DEFAULT_VIEWPORT,
		containerSize: 'full',
		expected: 'viewport'
	}
];

// Feature: dialog-component, Property 5: Maximum inline size resolves override before attribute before fallback
// **Validates: Requirements 1.12, 2.2, 2.3, 2.4, 2.10**
const testProperty5 = () => {
	for (const sizeCase of MAX_WIDTH_CASES) {
		test(`Property 5: ${sizeCase.name}`, async ({ mount, page }) => {
			await page.setViewportSize(sizeCase.viewport);
			await mount(renderPlain({ containerSize: sizeCase.containerSize }));
			const scale = await injectContainerScale(page);
			const dialog = dialogLocator(page);

			// Requirement 1.12: data-container-size mirrors the property value
			if (sizeCase.containerSize === undefined) {
				expect(
					await dialog.getAttribute('data-container-size')
				).toBeNull();
			} else {
				await expect(dialog).toHaveAttribute(
					'data-container-size',
					sizeCase.containerSize
				);
			}

			if (sizeCase.override) {
				await dialog.evaluate((element, value) => {
					element.style.setProperty('--db-dialog-max-width', value);
				}, sizeCase.override);
			}

			const measured = await dialog.evaluate((element) => ({
				maxInlineSize: Number.parseFloat(
					globalThis
						.getComputedStyle(element)
						.getPropertyValue('max-inline-size')
				),
				viewportInlineSize: globalThis.innerWidth
			}));

			// Requirements 2.2, 2.3, 2.4, 2.10: resolution order, then the clamp
			const unclamped = {
				xs: scale.xs,
				lg: scale.lg,
				'3xl': scale['3xl'],
				viewport: measured.viewportInlineSize,
				override: Number.parseFloat(sizeCase.override ?? '0')
			}[sizeCase.expected];
			const expected = Math.min(
				unclamped,
				measured.viewportInlineSize - 2 * VIEWPORT_INSET
			);

			expect(
				Math.abs(measured.maxInlineSize - expected)
			).toBeLessThanOrEqual(1);
		});
	}
};

type CentringCase = {
	name: string;
	backdrop?: any;
	content: ContentSize;
};

/**
 * Prop table for Property 6. Content smaller than the viewport and content larger
 * than the viewport on both axes, each for a modal and for a non-modal dialog.
 */
const CENTRING_CASES: CentringCase[] = [
	{ name: 'modal with content smaller than the viewport', content: 'short' },
	{ name: 'modal with content larger than the viewport', content: 'huge' },
	{
		name: 'non-modal with content smaller than the viewport',
		backdrop: 'none',
		content: 'short'
	}
];

// Feature: dialog-component, Property 6: An open dialog is centred by the user agent
// **Validates: Requirements 2.1, 2.14**
const testProperty6 = () => {
	for (const viewport of TESTING_VIEWPORTS) {
		for (const centringCase of CENTRING_CASES) {
			test(`Property 6: ${centringCase.name} on ${viewport.name}`, async ({
				mount,
				page
			}) => {
				await page.setViewportSize({
					width: viewport.width,
					height: viewport.height
				});
				await mount(
					renderPlain({
						backdrop: centringCase.backdrop,
						content: centringCase.content
					})
				);
				await injectContainerScale(page);
				const dialog = dialogLocator(page);

				const geometry = await dialog.evaluate((element) => {
					const rect = element.getBoundingClientRect();
					return {
						open: (element as HTMLDialogElement).open,
						insetInlineStart: rect.left,
						insetInlineEnd: globalThis.innerWidth - rect.right,
						insetBlockStart: rect.top,
						insetBlockEnd: globalThis.innerHeight - rect.bottom
					};
				});

				expect(geometry.open).toBe(true);
				// Requirements 2.1, 2.14: equal distance to the opposite edge, 1px tolerance
				expect(
					Math.abs(
						geometry.insetInlineStart - geometry.insetInlineEnd
					)
				).toBeLessThanOrEqual(1);
				expect(
					Math.abs(geometry.insetBlockStart - geometry.insetBlockEnd)
				).toBeLessThanOrEqual(1);
			});
		}
	}
};

type OverflowCase = {
	name: string;
	containerSize: any;
	/** Container scale override that pushes the requested size past the viewport. */
	scaleOverride?: Partial<ContainerScale>;
};

/**
 * Prop table for Property 7. Both rows request an inline size larger than the
 * viewport, once through `containerSize="full"` and once through a Container_Size
 * token that exceeds every tested viewport, and both render content wider than the
 * viewport, so the clamp is the only thing that can prevent inline scrolling.
 */
const OVERFLOW_CASES: OverflowCase[] = [
	{
		name: 'containerSize full with content wider than the viewport',
		containerSize: 'full'
	},
	{
		name: 'containerSize large with an oversized container token',
		containerSize: 'large',
		scaleOverride: { '3xl': 5000 }
	}
];

// Feature: dialog-component, Property 7: An open dialog never causes viewport scrolling on the inline axis
// **Validates: Requirements 2.11**
const testProperty7 = () => {
	for (const viewport of TESTING_VIEWPORTS) {
		for (const overflowCase of OVERFLOW_CASES) {
			test(`Property 7: ${overflowCase.name} on ${viewport.name}`, async ({
				mount,
				page
			}) => {
				await page.setViewportSize({
					width: viewport.width,
					height: viewport.height
				});
				await mount(
					renderPlain({
						containerSize: overflowCase.containerSize,
						content: 'wide'
					})
				);
				await injectContainerScale(page, overflowCase.scaleOverride);
				const dialog = dialogLocator(page);
				expect(
					await dialog.evaluate(
						(element) => (element as HTMLDialogElement).open
					)
				).toBe(true);

				const overflow = await page.evaluate(() => ({
					scrollWidth: document.documentElement.scrollWidth,
					clientWidth: document.documentElement.clientWidth,
					dialogInlineSize:
						document
							.querySelector('dialog.db-dialog')
							?.getBoundingClientRect().width ?? 0,
					viewportInlineSize: globalThis.innerWidth
				}));

				// Requirement 2.11: no inline scrolling of the viewport
				expect(overflow.scrollWidth).toEqual(overflow.clientWidth);
				// Requirement 2.11: a backdrop strip remains on both inline sides
				expect(overflow.dialogInlineSize).toBeLessThanOrEqual(
					overflow.viewportInlineSize - 2 * VIEWPORT_INSET + 1
				);
			});
		}
	}
};

// Feature: dialog-component, Property 8: Only the content row scrolls
// **Validates: Requirements 2.12**
const testProperty8 = () => {
	for (const viewport of [DESKTOP_VIEWPORT, DEFAULT_VIEWPORT]) {
		test(`Property 8: only the content row scrolls at ${viewport.width}x${viewport.height}`, async ({
			mount,
			page
		}) => {
			await page.setViewportSize(viewport);
			await mount(renderFramed({ content: 'tall' }));
			await injectContainerScale(page);
			const dialog = dialogLocator(page);

			const layout = await dialog.evaluate((element) => {
				const isScrollable = (node: Element) => {
					const overflowY =
						globalThis.getComputedStyle(node).overflowY;
					return (
						(overflowY === 'auto' || overflowY === 'scroll') &&
						node.scrollHeight > node.clientHeight + 1
					);
				};
				const describe = (node: Element) =>
					`${node.tagName.toLowerCase()}.${[...node.classList].join('.')}`;
				const rect = element.getBoundingClientRect();
				const rowRect = (selector: string) => {
					const row = element.querySelector(selector);
					return row
						? {
								top: row.getBoundingClientRect().top,
								bottom: row.getBoundingClientRect().bottom,
								height: row.getBoundingClientRect().height
							}
						: undefined;
				};

				return {
					scrollableDescendants: [...element.querySelectorAll('*')]
						.filter((node) => isScrollable(node))
						.map((node) => describe(node)),
					dialogScrollable: isScrollable(element),
					dialogTop: rect.top,
					dialogBottom: rect.bottom,
					header: rowRect('.db-dialog-header'),
					footer: rowRect('.db-dialog-footer')
				};
			});

			// Requirement 2.12: only db-dialog-content scrolls in the block direction
			expect(layout.scrollableDescendants).toEqual([
				'div.db-dialog-content'
			]);
			expect(layout.dialogScrollable).toBe(false);

			// Requirement 2.12: header and footer stay inside the rendered box
			for (const row of [layout.header, layout.footer]) {
				expect(row).toBeTruthy();
				expect(row!.height).toBeGreaterThan(0);
				expect(row!.top).toBeGreaterThanOrEqual(layout.dialogTop - 1);
				expect(row!.bottom).toBeLessThanOrEqual(
					layout.dialogBottom + 1
				);
			}
		});
	}
};

/**
 * Prop table for Property 9. `backdrop` appears unset, empty, as each of the three
 * accepted values, as an unknown value and in unexpected casing, so that only the
 * exact string `none` may select the non-modal path.
 */
const BACKDROP_CASES: { name: string; backdrop?: any }[] = [
	{ name: 'unset' },
	{ name: 'empty string', backdrop: '' },
	{ name: 'strong', backdrop: 'strong' },
	{ name: 'weak', backdrop: 'weak' },
	{ name: 'none', backdrop: 'none' },
	{ name: 'unknown value invisible', backdrop: 'invisible' },
	{ name: 'unexpected casing NONE', backdrop: 'NONE' }
];

// Feature: dialog-component, Property 9: Backdrop value determines modality and light dismiss
// **Validates: Requirements 3.2, 4.7, 4.8**
const testProperty9 = () => {
	for (const backdropCase of BACKDROP_CASES) {
		test(`Property 9: backdrop ${backdropCase.name}`, async ({
			mount,
			page
		}) => {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			await mount(renderPlain({ backdrop: backdropCase.backdrop }));
			await injectContainerScale(page);
			const dialog = dialogLocator(page);

			const state = await dialog.evaluate((element) => ({
				open: (element as HTMLDialogElement).open,
				modal: element.matches(':modal'),
				closedBy: element.getAttribute('closedby')
			}));

			const isNone = backdropCase.backdrop === 'none';
			expect(state.open).toBe(true);
			// Requirement 3.2: showModal() for everything but the exact string none
			expect(state.modal).toBe(!isNone);
			// Requirements 4.7, 4.8: light dismiss follows the same rule
			expect(state.closedBy).toEqual(isNone ? 'closerequest' : 'any');
		});
	}
};

type ModalityCase = {
	name: string;
	backdrop?: any;
	framed: boolean;
	insideButtons: number;
	outsideButtons: number;
};

/**
 * Prop table for Property 10. Modal and non-modal dialogs are paired with a varying
 * number of focusable elements outside the dialog and inside it, including a modal
 * dialog with no focusable descendant at all.
 */
const MODALITY_CASES: ModalityCase[] = [
	{
		name: 'modal with backdrop unset traps focus',
		framed: true,
		insideButtons: 0,
		outsideButtons: 1
	},
	{
		name: 'modal with backdrop strong traps focus',
		backdrop: 'strong',
		framed: true,
		insideButtons: 2,
		outsideButtons: 3
	},
	{
		name: 'modal with backdrop weak and no focusable content traps focus',
		backdrop: 'weak',
		framed: false,
		insideButtons: 0,
		outsideButtons: 1
	},
	{
		name: 'non-modal with backdrop none leaves the outside interactive',
		backdrop: 'none',
		framed: true,
		insideButtons: 2,
		outsideButtons: 3
	}
];

// Feature: dialog-component, Property 10: Modality has the matching interaction consequence
// **Validates: Requirements 3.4, 3.5**
const testProperty10 = () => {
	for (const modalityCase of MODALITY_CASES) {
		test(`Property 10: ${modalityCase.name}`, async ({ mount, page }) => {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const dialogCase: DialogCase = {
				backdrop: modalityCase.backdrop
			};
			await mount(
				modalityCase.framed
					? renderFramed(dialogCase)
					: renderPlain(dialogCase)
			);
			await injectContainerScale(page);
			const dialog = dialogLocator(page);
			expect(
				await dialog.evaluate(
					(element) => (element as HTMLDialogElement).open
				)
			).toBe(true);

			// Focusable elements inside the dialog content.
			await dialog.evaluate((element, count) => {
				const content = element.querySelector('.db-dialog-content');
				for (let index = 0; index < count; index++) {
					const button = document.createElement('button');
					button.id = `inside-${index}`;
					button.textContent = `Inside ${index}`;
					content?.append(button);
				}
			}, modalityCase.insideButtons);

			// Focusable elements outside the dialog, added after it opened so that
			// the modal inertness of the rest of the document applies to them.
			await page.evaluate((count) => {
				for (let index = 0; index < count; index++) {
					const button = document.createElement('button');
					button.id = `outside-${index}`;
					button.textContent = `Outside ${index}`;
					button.addEventListener('click', () => {
						button.dataset['activated'] = 'true';
					});
					document.body.prepend(button);
				}
			}, modalityCase.outsideButtons);

			const reachable = await page.evaluate((count) => {
				const result: boolean[] = [];
				for (let index = 0; index < count; index++) {
					const button = document.querySelector(
						`#outside-${index}`
					) as HTMLElement;
					button.focus();
					result.push(document.activeElement === button);
				}
				return result;
			}, modalityCase.outsideButtons);

			if (modalityCase.backdrop === 'none') {
				// Requirement 3.4: outside elements stay focusable and activatable
				expect(reachable).toEqual(
					Array.from(
						{ length: modalityCase.outsideButtons },
						() => true
					)
				);
				for (
					let index = 0;
					index < modalityCase.outsideButtons;
					index++
				) {
					const outside = page.locator(`#outside-${index}`);
					await outside.click();
					await expect(outside).toHaveAttribute(
						'data-activated',
						'true'
					);
				}
				expect(
					await dialog.evaluate(
						(element) => (element as HTMLDialogElement).open
					)
				).toBe(true);
			} else {
				// Requirement 3.5: no focus reaches an element outside the dialog
				expect(reachable).toEqual(
					Array.from(
						{ length: modalityCase.outsideButtons },
						() => false
					)
				);
				// Sequential focus navigation may park focus on the browser chrome,
				// which leaves `document.body` active; what must never happen is that
				// focus lands on an element outside the dialog.
				for (let step = 0; step < 5; step++) {
					await page.keyboard.press('Tab');
					const active = await page.evaluate(() => {
						const element = document.activeElement;
						const target =
							document.querySelector('dialog.db-dialog');
						return {
							id: element?.id ?? '',
							tag: element?.tagName?.toLowerCase() ?? '',
							inside: Boolean(
								target &&
								(element === target || target.contains(element))
							)
						};
					});
					expect(active.id.startsWith('outside-')).toBe(false);
					expect(active.inside || active.tag === 'body').toBe(true);
				}
			}
		});
	}
};

const BACKDROP_PAIRS: [string, string][] = [
	['strong', 'weak'],
	['weak', 'strong'],
	['strong', 'none'],
	['none', 'strong'],
	['weak', 'none'],
	['none', 'weak']
];

// Feature: dialog-component, Property 11: Changing `backdrop` while open preserves the dialog
// **Validates: Requirements 3.6**
const testProperty11 = () => {
	for (const [from, to] of BACKDROP_PAIRS) {
		test(`Property 11: backdrop ${from} changes to ${to} while open`, async ({
			mount,
			page
		}) => {
			await page.setViewportSize(DESKTOP_VIEWPORT);
			const component = await mount(renderPlain({ backdrop: from }));
			await injectContainerScale(page);
			const dialog = dialogLocator(page);

			const readState = async () =>
				dialog.evaluate((element) => ({
					open: (element as HTMLDialogElement).open,
					modal: element.matches(':modal'),
					backdropColor: globalThis.getComputedStyle(
						element,
						'::backdrop'
					).backgroundColor
				}));

			const before = await readState();
			expect(before.open).toBe(true);
			expect(before.modal).toBe(from !== 'none');

			await component.update(renderPlain({ backdrop: to }));

			const after = await readState();
			// Requirement 3.6: the dialog stays open and keeps the open-time modality
			expect(after.open).toBe(true);
			expect(after.modal).toBe(before.modal);
			// Requirement 3.6: the new value drives the backdrop appearance
			await expect(dialog).toHaveAttribute('data-backdrop', to);
			if (from !== 'none' && to !== 'none') {
				expect(after.backdropColor).not.toEqual(before.backdropColor);
			}
		});
	}
};

test.describe('DBDialog layout, sizing and modality', () => {
	testProperty5();
	testProperty6();
	testProperty7();
	testProperty8();
	testProperty9();
	testProperty10();
	testProperty11();
});
