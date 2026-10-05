import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBBadge } from '../badge';
import { DBCustomButton } from '../custom-button';
import { DBIcon } from '../icon';
import {
	DBCustomHeading,
	DBHeadingH1,
	DBHeadingH2,
	DBHeadingH3,
	DBHeadingH4,
	DBHeadingH5,
	DBHeadingH6
} from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const headings = [
	['h1', DBHeadingH1],
	['h2', DBHeadingH2],
	['h3', DBHeadingH3],
	['h4', DBHeadingH4],
	['h5', DBHeadingH5],
	['h6', DBHeadingH6]
] as const;
const sizes = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p-small',
	'p-medium',
	'p-large'
] as const;
const weights = ['black', 'light'] as const;

const semanticHeadings: any = (
	<div>
		<DBHeadingH1>Level 1</DBHeadingH1>
		<DBHeadingH2>Level 2</DBHeadingH2>
		<DBHeadingH3>Level 3</DBHeadingH3>
		<DBHeadingH4>Level 4</DBHeadingH4>
		<DBHeadingH5>Level 5</DBHeadingH5>
		<DBHeadingH6>Level 6</DBHeadingH6>
	</div>
);

// The Vue output declares named slots, so every slot assertion passes the React
// prop and the equivalent `template v-slot` markup. `copy-files.ts` strips the
// `{/*` and `*/}` markers for the Vue spec, which activates the template there
// while React keeps reading it as a JSX comment.
const customHeadingRows: any = (
	<div>
		<DBCustomHeading endSlot={<button type="button">More options</button>}>
			{/*<template v-slot:end-slot>
				<button type="button">More options</button>
			</template>*/}
			<h2>Default row</h2>
		</DBCustomHeading>
		<DBCustomHeading
			visualSize="h6"
			fontWeight="light"
			startSlot={<span aria-hidden="true">*</span>}
			endSlot={<button type="button">More options</button>}>
			{/*<template v-slot:start-slot>
				<span aria-hidden="true">*</span>
			</template>
			<template v-slot:end-slot>
				<button type="button">More options</button>
			</template>*/}
			<h3>Styled row</h3>
		</DBCustomHeading>
	</div>
);

const keyVariants: any = (
	<div style={{ display: 'grid', gap: '16px', width: '720px' }}>
		<DBHeadingH1 visualSize="h1">h1 / visual h1 / black</DBHeadingH1>
		<DBHeadingH2 visualSize="h1" fontWeight="light">
			h2 / visual h1 / light
		</DBHeadingH2>
		<DBHeadingH3>h3 / default</DBHeadingH3>
		<DBHeadingH4 visualSize="p-large">h4 / p-large</DBHeadingH4>
		<DBHeadingH5 fontWeight="light">h5 / light</DBHeadingH5>
		<DBHeadingH6 visualSize="h1" data-density="expressive">
			h6 / visual h1 / expressive
		</DBHeadingH6>
	</div>
);

const readFontSize = async (component: any) =>
	component.evaluate(
		(element: HTMLElement) => getComputedStyle(element).fontSize
	);

const readLogicalMargins = async (component: any) =>
	component.evaluate((element: HTMLElement) => {
		const style = getComputedStyle(element);
		return {
			blockStart: style.marginBlockStart,
			blockEnd: style.marginBlockEnd,
			inlineStart: style.marginInlineStart,
			inlineEnd: style.marginInlineEnd,
			lineHeight: style.lineHeight
		};
	});

test.describe('Static Heading components', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	for (const [level, Heading] of headings) {
		test(`renders exactly one native ${level}`, async ({ mount }) => {
			const component = await mount(<Heading>{level}</Heading>);
			expect(
				await component.evaluate((element) =>
					element.tagName.toLowerCase()
				)
			).toBe(level);
			expect(
				await component.locator('h1, h2, h3, h4, h5, h6').count()
			).toBe(0);
		});

		test(`renders text prop in ${level}`, async ({ mount }) => {
			const text = `Text ${level}`;
			const component = await mount(<Heading text={text} />);
			await expect(component).toHaveText(text);
			await expect(component).toHaveAccessibleName(text);
		});

		test(`forwards native attributes to ${level}`, async ({ mount }) => {
			const component = await mount(
				<Heading
					className={`custom-${level}`}
					aria-label={`Accessible ${level}`}
					data-forwarded={level}
					title={`Title ${level}`}
					style={{ textTransform: 'uppercase' }}>
					{level}
				</Heading>
			);
			await expect(component).toHaveClass(new RegExp(`custom-${level}`));
			await expect(component).toHaveAttribute(
				'aria-label',
				`Accessible ${level}`
			);
			await expect(component).toHaveAttribute('data-forwarded', level);
			await expect(component).toHaveAttribute('title', `Title ${level}`);
			await expect(component).toHaveCSS('text-transform', 'uppercase');
		});
	}

	test('keeps h6 semantics when the visual size is h1', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeadingH6 visualSize="h1">Oversized h6</DBHeadingH6>
		);
		await expect(component).toHaveAttribute('data-visual-size', 'h1');
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('h6');
	});

	test('resolves the default size mapping to real typography', async ({
		mount
	}) => {
		// The `data-visual-size` assertions above only prove prop plumbing. This checks
		// that omitting `visualSize` actually applies the mapped headline size.
		const defaultH1 = await mount(<DBHeadingH1>Default h1</DBHeadingH1>);
		const h1FontSize = await readFontSize(defaultH1);
		await defaultH1.unmount();

		const explicitH1 = await mount(
			<DBHeadingH2 visualSize="h1">Explicit h1</DBHeadingH2>
		);
		expect(await readFontSize(explicitH1)).toBe(h1FontSize);
		await explicitH1.unmount();

		const defaultH2 = await mount(<DBHeadingH2>Default h2</DBHeadingH2>);
		expect(await readFontSize(defaultH2)).not.toBe(h1FontSize);
	});

	for (const size of sizes) {
		test(`supports visual size ${size}`, async ({ mount }) => {
			const component = await mount(
				<DBHeadingH2 visualSize={size}>{size}</DBHeadingH2>
			);
			await expect(component).toHaveAttribute('data-visual-size', size);
		});
	}

	for (const weight of weights) {
		test(`supports font weight ${weight}`, async ({ mount }) => {
			const component = await mount(
				<DBHeadingH2 fontWeight={weight}>{weight}</DBHeadingH2>
			);
			await expect(component).toHaveAttribute('data-font-weight', weight);
			if (weight === 'light')
				await expect(component).toHaveCSS('font-weight', '300');
		});
	}

	test('carries no block margin of its own', async ({ mount }) => {
		// Block spacing is no longer a Heading property. The foundations strip the
		// `margin-block` from block-level text by default and only add it back under
		// `[data-text-spacing="true"]`, so the component itself stays flush.
		const heading = await mount(<DBHeadingH2>No spacing</DBHeadingH2>);
		expect(await readLogicalMargins(heading)).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px'
		});
	});

	test('composes class and resolves direct and overridden ids', async ({
		mount
	}) => {
		const direct = await mount(
			<DBHeadingH2
				className="custom-heading"
				id="direct-id"
				propOverrides={{ id: 'override-id' }}>
				Direct
			</DBHeadingH2>
		);
		await expect(direct).toHaveClass(/db-heading/);
		await expect(direct).toHaveClass(/custom-heading/);
		await expect(direct).toHaveAttribute('id', 'direct-id');
		await direct.unmount();
		const overridden = await mount(
			<DBHeadingH2 propOverrides={{ id: 'override-id' }}>
				Override
			</DBHeadingH2>
		);
		await expect(overridden).toHaveAttribute('id', 'override-id');
	});

	// VUE: test('forwards the class alias', async ({ mount }) => {
	// VUE: 	const component = await mount(<DBHeadingH6 class="class-alias">Class alias</DBHeadingH6>);
	// VUE: 	await expect(component).toHaveClass(/db-heading/);
	// VUE: 	await expect(component).toHaveClass(/class-alias/);
	// VUE: });

	test('renders ordered inline children and hides decorations from the name', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeadingH2>
				<span aria-hidden="true">Start</span>
				<span data-testid="main-content">Main content</span>
				<span aria-hidden="true">End</span>
			</DBHeadingH2>
		);
		await expect(component).toHaveText(/Start\s*Main content\s*End/);
		await expect(component).toHaveAccessibleName('Main content');
	});

	test('has the expected ARIA heading-level snapshot', async ({
		mount
	}, testInfo) => {
		const component = await mount(semanticHeadings);
		expect(await component.ariaSnapshot()).toMatchSnapshot(
			`${testInfo.testId}.yaml`
		);
	});

	test('has no Axe violations', async ({ page, mount }) => {
		await mount(semanticHeadings);
		const results = await new AxeBuilder({ page })
			.include('.db-heading')
			.analyze();
		expect(results.violations).toEqual([]);
	});

	test('matches the key variant screenshot', async ({ mount }) => {
		const component = await mount(keyVariants);
		await expect(component).toHaveScreenshot('key-variants.png');
	});
});

test.describe('DBCustomHeading', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('renders a layout wrapper without heading semantics of its own', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading>
				<h2>Nested heading</h2>
			</DBCustomHeading>
		);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('div');
		await expect(component).toHaveClass(/db-custom-heading/);
		await expect(component).not.toHaveAttribute('role');
		await expect(component).not.toHaveAttribute('aria-level');
		// The consumer's heading provides the semantics.
		expect(await component.locator('h1, h2, h3, h4, h5, h6').count()).toBe(
			1
		);
	});

	test('lays the heading and its end slot out in a row', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading
				endSlot={<button type="button">More options</button>}>
				{/*<template v-slot:end-slot>
					<button type="button">More options</button>
				</template>*/}
				<h2>Nested heading</h2>
			</DBCustomHeading>
		);
		await expect(component).toHaveCSS('display', 'flex');
		await expect(component).toHaveCSS('align-items', 'center');
		const [headingBox, actionBox] = await Promise.all([
			component.locator('h2').boundingBox(),
			component.locator('button').boundingBox()
		]);
		// Same row, action after the heading.
		expect(actionBox!.x).toBeGreaterThan(headingBox!.x);
		expect(actionBox!.y).toBeLessThan(headingBox!.y + headingBox!.height);
	});

	test('keeps nested DB components at their standalone visual size', async ({
		mount
	}) => {
		const component = await mount(
			<div>
				<div>
					<DBIcon data-testid="reference-icon" icon="x_placeholder" />
					<DBBadge
						data-testid="reference-badge"
						semantic="critical"
						emphasis="strong">
						3
					</DBBadge>
					<DBCustomButton
						data-testid="reference-button"
						variant="ghost"
						icon="more_vertical"
						noText={true}>
						<button type="button">More options</button>
					</DBCustomButton>
				</div>
				<DBCustomHeading
					startSlot={
						<DBIcon
							data-testid="nested-icon"
							icon="x_placeholder"
						/>
					}>
					{/*<template v-slot:start-slot>
						<DBIcon data-testid="nested-icon" icon="x_placeholder" />
					</template>*/}
					<h2>Icon heading</h2>
				</DBCustomHeading>
				<DBCustomHeading
					endSlot={
						<DBBadge
							data-testid="nested-badge"
							semantic="critical"
							emphasis="strong">
							3
						</DBBadge>
					}>
					{/*<template v-slot:end-slot>
						<DBBadge
							data-testid="nested-badge"
							semantic="critical"
							emphasis="strong">
							3
						</DBBadge>
					</template>*/}
					<h2>Badge heading</h2>
				</DBCustomHeading>
				<DBCustomHeading
					endSlot={
						<DBCustomButton
							data-testid="nested-button"
							variant="ghost"
							icon="more_vertical"
							noText={true}>
							<button type="button">More options</button>
						</DBCustomButton>
					}>
					{/*<template v-slot:end-slot>
						<DBCustomButton
							data-testid="nested-button"
							variant="ghost"
							icon="more_vertical"
							noText={true}>
							<button type="button">More options</button>
						</DBCustomButton>
					</template>*/}
					<h2>Button heading</h2>
				</DBCustomHeading>
			</div>
		);

		const [
			referenceIconSize,
			nestedIconSize,
			referenceBadgeSize,
			nestedBadgeSize,
			referenceButtonSize,
			nestedButtonSize
		] = await Promise.all([
			component
				.getByTestId('reference-icon')
				.evaluate(
					(element) => getComputedStyle(element, '::before').fontSize
				),
			component
				.getByTestId('nested-icon')
				.evaluate(
					(element) => getComputedStyle(element, '::before').fontSize
				),
			component
				.getByTestId('reference-badge')
				.evaluate((element) => getComputedStyle(element).fontSize),
			component
				.getByTestId('nested-badge')
				.evaluate((element) => getComputedStyle(element).fontSize),
			component
				.getByTestId('reference-button')
				.locator('button')
				.evaluate((element) => getComputedStyle(element).fontSize),
			component
				.getByTestId('nested-button')
				.locator('button')
				.evaluate((element) => getComputedStyle(element).fontSize)
		]);

		expect(nestedIconSize).toBe(referenceIconSize);
		expect(nestedBadgeSize).toBe(referenceBadgeSize);
		expect(nestedButtonSize).toBe(referenceButtonSize);
	});

	test('renders the start slot before and the end slot after the heading', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading
				startSlot={<span data-testid="start">Start</span>}
				endSlot={<span data-testid="end">End</span>}>
				{/*<template v-slot:start-slot>
					<span data-testid="start">Start</span>
				</template>
				<template v-slot:end-slot>
					<span data-testid="end">End</span>
				</template>*/}
				<h2>Between the slots</h2>
			</DBCustomHeading>
		);
		// Document order, which is what assistive technology follows.
		await expect(component).toHaveText(/Start\s*Between the slots\s*End/);
		const [startBox, headingBox, endBox] = await Promise.all([
			component.getByTestId('start').boundingBox(),
			component.locator('h2').boundingBox(),
			component.getByTestId('end').boundingBox()
		]);
		expect(startBox!.x).toBeLessThan(headingBox!.x);
		expect(endBox!.x).toBeGreaterThan(headingBox!.x);
	});

	test('adds no gap for a slot that stays empty', async ({ mount }) => {
		// The slots are not wrapped in an element, so an unused slot contributes no
		// flex item and therefore no `gap`. Measured as the offset of the heading
		// from the wrapper's content edge.
		const withoutSlots = await mount(
			<DBCustomHeading>
				<h2>Nested heading</h2>
			</DBCustomHeading>
		);
		const [emptyWrapperBox, flushHeadingBox] = await Promise.all([
			withoutSlots.boundingBox(),
			withoutSlots.locator('h2').boundingBox()
		]);
		expect(flushHeadingBox!.x).toBe(emptyWrapperBox!.x);
		await withoutSlots.unmount();

		const withStartSlot = await mount(
			<DBCustomHeading startSlot={<span data-testid="start">Start</span>}>
				{/*<template v-slot:start-slot>
					<span data-testid="start">Start</span>
				</template>*/}
				<h2>Nested heading</h2>
			</DBCustomHeading>
		);
		const [filledWrapperBox, shiftedHeadingBox] = await Promise.all([
			withStartSlot.boundingBox(),
			withStartSlot.locator('h2').boundingBox()
		]);
		expect(shiftedHeadingBox!.x).toBeGreaterThan(filledWrapperBox!.x);
	});

	test('styles a plain nested heading like the native component', async ({
		mount
	}) => {
		// The wrapper applies the default level mapping, so consumers can drop in
		// a bare `h1`-`h6` without adding `db-heading` themselves.
		const native = await mount(<DBHeadingH1>Native</DBHeadingH1>);
		const nativeFontSize = await readFontSize(native);
		await native.unmount();

		const wrapped = await mount(
			<DBCustomHeading>
				<h1>Nested</h1>
			</DBCustomHeading>
		);
		expect(await readFontSize(wrapped.locator('h1'))).toBe(nativeFontSize);
		expect(await readLogicalMargins(wrapped.locator('h1'))).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px'
		});
	});

	test('applies the wrapper size to a plain nested heading', async ({
		mount
	}) => {
		// The wrapper mirrors the Heading styling API, so `visualSize` on the wrapper has
		// to override the default level mapping of the nested heading.
		const reference = await mount(
			<DBHeadingH2 visualSize="h1">Ref</DBHeadingH2>
		);
		const referenceFontSize = await readFontSize(reference);
		await reference.unmount();

		const component = await mount(
			<DBCustomHeading visualSize="h1">
				<h2>Nested</h2>
			</DBCustomHeading>
		);
		await expect(component).toHaveAttribute('data-visual-size', 'h1');
		expect(await readFontSize(component.locator('h2'))).toBe(
			referenceFontSize
		);
	});

	for (const weight of weights) {
		test(`applies the wrapper font weight ${weight} to a plain nested heading`, async ({
			mount
		}) => {
			const component = await mount(
				<DBCustomHeading fontWeight={weight}>
					<h2>{weight}</h2>
				</DBCustomHeading>
			);
			await expect(component).toHaveAttribute('data-font-weight', weight);
			if (weight === 'light') {
				await expect(component.locator('h2')).toHaveCSS(
					'font-weight',
					'300'
				);
			}
		});
	}

	test('leaves a nested Heading component in charge of its own typography', async ({
		mount
	}) => {
		// The child selectors exclude `.db-heading`, so a Heading component inside
		// the wrapper never fights the wrapper's attributes.
		const reference = await mount(
			<DBHeadingH2 visualSize="h6">Ref</DBHeadingH2>
		);
		const referenceFontSize = await readFontSize(reference);
		await reference.unmount();

		const component = await mount(
			<DBCustomHeading visualSize="h1">
				<DBHeadingH2 visualSize="h6">Nested</DBHeadingH2>
			</DBCustomHeading>
		);
		expect(await readFontSize(component.locator('h2'))).toBe(
			referenceFontSize
		);
	});

	test('styles a heading nested below an intermediate element', async ({
		mount
	}) => {
		// Angular and Stencil render a heading inside its custom-element host, and
		// a consumer component such as `<my-super-heading>` does the same. Those
		// hosts only become flex items through `display: contents` and are never a
		// DOM child of the wrapper, so the wrapper must not use a child selector.
		const explicitReference = await mount(
			<DBHeadingH2 visualSize="h1">Ref</DBHeadingH2>
		);
		const explicitFontSize = await readFontSize(explicitReference);
		await explicitReference.unmount();

		const explicit = await mount(
			<DBCustomHeading visualSize="h1">
				<div style={{ display: 'contents' }}>
					<h2>Below a host</h2>
				</div>
			</DBCustomHeading>
		);
		expect(await readFontSize(explicit.locator('h2'))).toBe(
			explicitFontSize
		);
		await explicit.unmount();

		// The default level mapping goes through `:has()`, which also has to reach
		// past the intermediate element.
		const defaultReference = await mount(<DBHeadingH2>Ref</DBHeadingH2>);
		const defaultFontSize = await readFontSize(defaultReference);
		await defaultReference.unmount();

		const defaulted = await mount(
			<DBCustomHeading>
				<div style={{ display: 'contents' }}>
					<h2>Below a host</h2>
				</div>
			</DBCustomHeading>
		);
		expect(await readFontSize(defaulted.locator('h2'))).toBe(
			defaultFontSize
		);
	});

	test('keeps slot content out of the accessible heading name', async ({
		mount
	}) => {
		// This is the reason the slots exist: the content sits next to the heading
		// instead of inside it, so it neither pollutes the accessible name nor
		// hides an interactive control behind it.
		const component = await mount(
			<DBCustomHeading
				startSlot={<span>Section</span>}
				endSlot={<button type="button">More options</button>}>
				{/*<template v-slot:start-slot>
					<span>Section</span>
				</template>
				<template v-slot:end-slot>
					<button type="button">More options</button>
				</template>*/}
				<h2>Installation</h2>
			</DBCustomHeading>
		);
		await expect(component.locator('h2')).toHaveAccessibleName(
			'Installation'
		);
		await expect(component.locator('button')).toHaveAccessibleName(
			'More options'
		);
		expect(await component.locator('h2 button').count()).toBe(0);
	});

	test('forwards native attributes and resolves ids', async ({ mount }) => {
		const component = await mount(
			<DBCustomHeading
				className="custom-heading-wrapper"
				id="direct-id"
				propOverrides={{ id: 'override-id' }}
				data-forwarded="custom"
				title="Custom title"
				style={{ textTransform: 'uppercase' }}>
				<h2>Forwarded</h2>
			</DBCustomHeading>
		);
		await expect(component).toHaveClass(/custom-heading-wrapper/);
		await expect(component).toHaveAttribute('id', 'direct-id');
		await expect(component).toHaveAttribute('data-forwarded', 'custom');
		await expect(component).toHaveAttribute('title', 'Custom title');
		await expect(component).toHaveCSS('text-transform', 'uppercase');
		await component.unmount();

		const overridden = await mount(
			<DBCustomHeading propOverrides={{ id: 'override-id' }}>
				<h2>Override</h2>
			</DBCustomHeading>
		);
		await expect(overridden).toHaveAttribute('id', 'override-id');
	});

	test('has the expected custom heading ARIA snapshot', async ({
		mount
	}, testInfo) => {
		const component = await mount(customHeadingRows);
		expect(await component.ariaSnapshot()).toMatchSnapshot(
			`${testInfo.testId}.yaml`
		);
	});

	test('has no Axe violations', async ({ page, mount }) => {
		await mount(customHeadingRows);
		const results = await new AxeBuilder({ page })
			.include('.db-custom-heading')
			.analyze();
		expect(results.violations).toEqual([]);
	});

	test('matches the custom heading screenshot', async ({ mount }) => {
		const component = await mount(customHeadingRows);
		await expect(component).toHaveScreenshot('custom-heading.png');
	});
});
