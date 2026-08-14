import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import {
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

const keyVariants: any = (
	<div style={{ display: 'grid', gap: '16px', width: '720px' }}>
		<DBHeadingH1 size="3xl">h1 / 3xl / black</DBHeadingH1>
		<DBHeadingH2 size="xl" fontWeight="light">
			h2 / xl / light
		</DBHeadingH2>
		<DBHeadingH3 alignment="center">h3 / centered</DBHeadingH3>
		<DBHeadingH4 alignment="end">h4 / end</DBHeadingH4>
		<DBHeadingH5 paragraphSpacing>h5 / paragraph spacing</DBHeadingH5>
		<DBHeadingH6 size="2xl" data-density="expressive">
			h6 / 2xl / expressive
		</DBHeadingH6>
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

	test('keeps h6 semantics when the visual size is 2xl', async ({
		mount
	}) => {
		const component = await mount(
			<DBHeadingH6 size="2xl">Oversized h6</DBHeadingH6>
		);
		await expect(component).toHaveAttribute('data-size', '2xl');
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('h6');
	});

	for (const size of sizes) {
		test(`supports visual size ${size}`, async ({ mount }) => {
			const component = await mount(
				<DBHeadingH2 size={size}>{size}</DBHeadingH2>
			);
			await expect(component).toHaveAttribute('data-size', size);
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

	for (const alignment of alignments) {
		test(`supports logical alignment ${alignment}`, async ({ mount }) => {
			const component = await mount(
				<DBHeadingH2 alignment={alignment}>{alignment}</DBHeadingH2>
			);
			await expect(component).toHaveAttribute(
				'data-alignment',
				alignment
			);
			await expect(component).toHaveCSS('text-align', alignment);
		});
	}

	test('supports paragraph spacing states', async ({ mount }) => {
		const omitted = await mount(<DBHeadingH2>Omitted</DBHeadingH2>);
		await expect(omitted).not.toHaveAttribute('data-paragraph-spacing');
		expect(await readLogicalMargins(omitted)).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px'
		});
		await omitted.unmount();

		const disabled = await mount(
			<DBHeadingH2 paragraphSpacing={false}>False</DBHeadingH2>
		);
		await expect(disabled).toHaveAttribute(
			'data-paragraph-spacing',
			'false'
		);
		expect(await readLogicalMargins(disabled)).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px'
		});
		await disabled.unmount();

		const enabled = await mount(
			<DBHeadingH2 paragraphSpacing>True</DBHeadingH2>
		);
		const margins = await readLogicalMargins(enabled);
		expect(Number.parseFloat(margins.blockEnd)).toBeCloseTo(
			Number.parseFloat(margins.lineHeight),
			2
		);
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
