import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBHeading } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
const sizes = [
	'3xl',
	'2xl',
	'xl',
	'lg',
	'md',
	'sm',
	'xs',
	'2xs',
	'3xs'
] as const;
const weights = ['black', 'light'] as const;
const alignments = ['start', 'center', 'end'] as const;
const UnsafeHeading: any = DBHeading;

const semanticHeadings: any = (
	<div>
		<DBHeading as="h1">Level 1</DBHeading>
		<DBHeading as="h2">Level 2</DBHeading>
		<DBHeading as="h3">Level 3</DBHeading>
		<DBHeading as="h4">Level 4</DBHeading>
		<DBHeading as="h5">Level 5</DBHeading>
		<DBHeading as="h6">Level 6</DBHeading>
	</div>
);

const keyVariants: any = (
	<div style={{ display: 'grid', gap: '16px', width: '720px' }}>
		<DBHeading as="h1" size="3xl">
			h1 / 3xl / black
		</DBHeading>
		<DBHeading as="h2" size="xl" fontWeight="light">
			h2 / xl / light
		</DBHeading>
		<DBHeading as="h3" alignment="center">
			h3 / centered
		</DBHeading>
		<DBHeading as="h4" alignment="end">
			h4 / end
		</DBHeading>
		<DBHeading as="h5" paragraphSpacing>
			h5 / paragraph spacing
		</DBHeading>
		<DBHeading as="h6" size="2xl" data-density="expressive">
			h6 / 2xl / expressive
		</DBHeading>
	</div>
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

const testSemantics = () => {
	test('renders its content', async ({ mount }) => {
		const component = await mount(
			<DBHeading as="h2">Heading content</DBHeading>
		);
		await expect(component).toHaveText('Heading content');
	});

	for (const [index, level] of levels.entries()) {
		test(`renders exactly one native ${level}`, async ({ mount }) => {
			const component = await mount(
				<DBHeading as={level}>Level {index + 1}</DBHeading>
			);
			await expect(component).toHaveCount(1);
			expect(
				await component.evaluate((element) => ({
					tagName: element.tagName.toLowerCase(),
					descendantHeadings: element.querySelectorAll(
						'h1, h2, h3, h4, h5, h6'
					).length
				}))
			).toEqual({ tagName: level, descendantHeadings: 0 });
		});
	}

	test('falls back to h1 when as is missing at runtime', async ({
		mount
	}) => {
		const component = await mount(
			<UnsafeHeading>Missing as</UnsafeHeading>
		);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('h1');
	});

	test('falls back to h1 when as is invalid at runtime', async ({
		mount
	}) => {
		const component = await mount(
			<UnsafeHeading as="invalid">Invalid as</UnsafeHeading>
		);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('h1');
	});

	test('keeps h6 semantics when the visual size is 2xl', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeading as="h6" size="2xl">
				Oversized h6
			</DBHeading>
		);
		await expect(component).toHaveAttribute('data-size', '2xl');
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('h6');
	});
};

const testVariants = () => {
	for (const size of sizes) {
		test(`supports visual size ${size}`, async ({ mount }) => {
			const component = await mount(
				<DBHeading as="h2" size={size}>
					{size}
				</DBHeading>
			);
			await expect(component).toHaveAttribute('data-size', size);
		});
	}

	for (const weight of weights) {
		test(`supports font weight ${weight}`, async ({ mount }) => {
			const component = await mount(
				<DBHeading as="h2" fontWeight={weight}>
					{weight}
				</DBHeading>
			);
			await expect(component).toHaveAttribute('data-font-weight', weight);
			if (weight === 'light')
				await expect(component).toHaveCSS('font-weight', '300');
		});
	}

	for (const alignment of alignments) {
		test(`supports logical alignment ${alignment}`, async ({ mount }) => {
			const component = await mount(
				<DBHeading as="h2" alignment={alignment}>
					{alignment}
				</DBHeading>
			);
			await expect(component).toHaveAttribute(
				'data-alignment',
				alignment
			);
			await expect(component).toHaveCSS('text-align', alignment);
		});
	}

	test('omits paragraph spacing when the prop is omitted', async ({
		mount
	}) => {
		const component = await mount(<DBHeading as="h2">Omitted</DBHeading>);
		await expect(component).not.toHaveAttribute('data-paragraph-spacing');
		const margins = await readLogicalMargins(component);
		expect(margins).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px',
			inlineStart: '0px',
			inlineEnd: '0px'
		});
	});

	test('keeps all margins reset when paragraph spacing is false', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeading as="h2" paragraphSpacing={false}>
				False
			</DBHeading>
		);
		await expect(component).toHaveAttribute(
			'data-paragraph-spacing',
			'false'
		);
		const margins = await readLogicalMargins(component);
		expect(margins).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px',
			inlineStart: '0px',
			inlineEnd: '0px'
		});
	});

	test('adds exactly one line-height at block-end only', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeading as="h2" paragraphSpacing>
				True
			</DBHeading>
		);
		await expect(component).toHaveAttribute(
			'data-paragraph-spacing',
			'true'
		);
		const margins = await readLogicalMargins(component);
		expect(margins.blockStart).toBe('0px');
		expect(margins.inlineStart).toBe('0px');
		expect(margins.inlineEnd).toBe('0px');
		expect(Number.parseFloat(margins.blockEnd)).toBeCloseTo(
			Number.parseFloat(margins.lineHeight),
			2
		);
	});
};

const testAttributesAndContent = () => {
	test('composes class and resolves direct and overridden ids', async ({
		mount
	}) => {
		const direct = await mount(
			<DBHeading
				as="h2"
				className="custom-heading"
				id="direct-id"
				propOverrides={{ id: 'override-id' }}>
				Direct
			</DBHeading>
		);
		await expect(direct).toHaveClass(/db-heading/);
		await expect(direct).toHaveClass(/custom-heading/);
		await expect(direct).toHaveAttribute('id', 'direct-id');
		await direct.unmount();
		const overridden = await mount(
			<DBHeading as="h2" propOverrides={{ id: 'override-id' }}>
				Override
			</DBHeading>
		);
		await expect(overridden).toHaveAttribute('id', 'override-id');
	});

	for (const [index, level] of levels.entries()) {
		test(`forwards native attributes to ${level}`, async ({ mount }) => {
			const component = await mount(
				<DBHeading
					as={level}
					className={`custom-${level}`}
					aria-label={`Accessible ${level}`}
					data-forwarded={level}
					title={`Title ${level}`}
					style={{ textTransform: 'uppercase' }}>
					Level {index + 1}
				</DBHeading>
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

	// VUE: test('forwards the class alias', async ({ mount }) => {
	// VUE: 	const component = await mount(
	// VUE: 		<DBHeading as="h6" class="class-alias">
	// VUE: 			Class alias
	// VUE: 		</DBHeading>
	// VUE: 	);
	// VUE: 	await expect(component).toHaveClass(/db-heading/);
	// VUE: 	await expect(component).toHaveClass(/class-alias/);
	// VUE: });

	test('renders inline children as phrasing content', async ({ mount }) => {
		const component = await mount(
			<DBHeading as="h2">
				Text <em data-testid="inline">inline</em>
			</DBHeading>
		);
		await expect(component.getByTestId('inline')).toHaveText('inline');
		await expect(component).toContainText('Text inline');
	});

	test('renders start slot, children and end slot in order and hides decorations from the name', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeading
				as="h2"
				startSlot={
					<span data-testid="start-slot" aria-hidden="true">
						Start
					</span>
				}
				endSlot={
					<span data-testid="end-slot" aria-hidden="true">
						End
					</span>
				}>
				{/*<template v-slot:start-slot><span data-testid="start-slot" aria-hidden="true">Start</span></template>*/}
				<span data-testid="main-content">Main content</span>
				{/*<template v-slot:end-slot><span data-testid="end-slot" aria-hidden="true">End</span></template>*/}
			</DBHeading>
		);
		await expect(component).toHaveText(/Start\s*Main content\s*End/);
		await expect(component).toHaveAccessibleName('Main content');
	});
};

const testAccessibilityAndVisuals = () => {
	test('has the expected ARIA heading-level snapshot', async ({
		mount
	}, testInfo) => {
		const component = await mount(semanticHeadings);
		const snapshot = await component.ariaSnapshot();
		expect(snapshot).toMatchSnapshot(`${testInfo.testId}.yaml`);
	});

	test('has no Axe violations', async ({ page, mount }) => {
		await mount(semanticHeadings);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-heading')
			.analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('matches the key variant screenshot', async ({ mount }) => {
		const component = await mount(keyVariants);
		await expect(component).toHaveScreenshot('key-variants.png');
	});
};

test.describe('DBHeading', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testSemantics();
	testVariants();
	testAttributesAndContent();
	testAccessibilityAndVisuals();
});
