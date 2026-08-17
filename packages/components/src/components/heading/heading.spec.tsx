import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

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
const semanticLevels = [1, 2, 3, 4, 5, 6] as const;
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

const customSemanticHeadings: any = (
	<div>
		<DBCustomHeading semanticLevel={1}>Custom level 1</DBCustomHeading>
		<DBCustomHeading semanticLevel={2}>Custom level 2</DBCustomHeading>
		<DBCustomHeading semanticLevel={3}>Custom level 3</DBCustomHeading>
		<DBCustomHeading semanticLevel={4}>Custom level 4</DBCustomHeading>
		<DBCustomHeading semanticLevel={5}>Custom level 5</DBCustomHeading>
		<DBCustomHeading semanticLevel={6}>Custom level 6</DBCustomHeading>
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

	test('resolves the default size mapping to real typography', async ({
		mount
	}) => {
		// The `data-size` assertions above only prove prop plumbing. This checks
		// that omitting `size` actually applies the mapped headline size.
		const defaultH1 = await mount(<DBHeadingH1>Default h1</DBHeadingH1>);
		const h1FontSize = await readFontSize(defaultH1);
		await defaultH1.unmount();

		const explicitXl = await mount(
			<DBHeadingH2 size="xl">Explicit xl</DBHeadingH2>
		);
		expect(await readFontSize(explicitXl)).toBe(h1FontSize);
		await explicitXl.unmount();

		const defaultH2 = await mount(<DBHeadingH2>Default h2</DBHeadingH2>);
		expect(await readFontSize(defaultH2)).not.toBe(h1FontSize);
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

test.describe('DBCustomHeading', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('renders an ARIA heading instead of a native heading', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading semanticLevel={2}>ARIA heading</DBCustomHeading>
		);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('div');
		await expect(component).toHaveAttribute('role', 'heading');
		await expect(component).toHaveClass(/db-heading/);
		expect(await component.locator('h1, h2, h3, h4, h5, h6').count()).toBe(
			0
		);
	});

	for (const semanticLevel of semanticLevels) {
		test(`exposes semantic level ${semanticLevel} as aria-level`, async ({
			mount
		}) => {
			const component = await mount(
				<DBCustomHeading semanticLevel={semanticLevel}>
					Level {semanticLevel}
				</DBCustomHeading>
			);
			await expect(component).toHaveAttribute(
				'aria-level',
				String(semanticLevel)
			);
			await expect(component).not.toHaveAttribute('data-size');
		});
	}

	test('keeps the semantic level when the visual size differs', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading semanticLevel={6} size="2xl">
				Oversized level 6
			</DBCustomHeading>
		);
		await expect(component).toHaveAttribute('aria-level', '6');
		await expect(component).toHaveAttribute('data-size', '2xl');
	});

	for (const weight of weights) {
		test(`supports font weight ${weight}`, async ({ mount }) => {
			const component = await mount(
				<DBCustomHeading semanticLevel={2} fontWeight={weight}>
					{weight}
				</DBCustomHeading>
			);
			await expect(component).toHaveAttribute('data-font-weight', weight);
			if (weight === 'light')
				await expect(component).toHaveCSS('font-weight', '300');
		});
	}

	for (const alignment of alignments) {
		test(`supports logical alignment ${alignment}`, async ({ mount }) => {
			const component = await mount(
				<DBCustomHeading semanticLevel={2} alignment={alignment}>
					{alignment}
				</DBCustomHeading>
			);
			await expect(component).toHaveCSS('text-align', alignment);
		});
	}

	test('supports paragraph spacing states', async ({ mount }) => {
		const omitted = await mount(
			<DBCustomHeading semanticLevel={2}>Omitted</DBCustomHeading>
		);
		await expect(omitted).not.toHaveAttribute('data-paragraph-spacing');
		expect(await readLogicalMargins(omitted)).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px'
		});
		await omitted.unmount();

		const disabled = await mount(
			<DBCustomHeading semanticLevel={2} paragraphSpacing={false}>
				False
			</DBCustomHeading>
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
			<DBCustomHeading semanticLevel={2} paragraphSpacing>
				True
			</DBCustomHeading>
		);
		const margins = await readLogicalMargins(enabled);
		expect(Number.parseFloat(margins.blockEnd)).toBeCloseTo(
			Number.parseFloat(margins.lineHeight),
			2
		);
	});

	test('forwards native attributes and resolves ids', async ({ mount }) => {
		const component = await mount(
			<DBCustomHeading
				semanticLevel={3}
				className="custom-aria-heading"
				id="direct-id"
				propOverrides={{ id: 'override-id' }}
				data-forwarded="custom"
				title="Custom title"
				style={{ textTransform: 'uppercase' }}>
				Forwarded
			</DBCustomHeading>
		);
		await expect(component).toHaveClass(/custom-aria-heading/);
		await expect(component).toHaveAttribute('id', 'direct-id');
		await expect(component).toHaveAttribute('data-forwarded', 'custom');
		await expect(component).toHaveAttribute('title', 'Custom title');
		await expect(component).toHaveCSS('text-transform', 'uppercase');
	});

	test('keeps aria-level in sync with the semantic level', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading semanticLevel={2} aria-level={4}>
				Level stays at two
			</DBCustomHeading>
		);
		await expect(component).toHaveAttribute('aria-level', '2');
	});

	test('keeps the heading role when a consumer passes a conflicting role', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading semanticLevel={3} role="presentation">
				Still a heading
			</DBCustomHeading>
		);
		await expect(component).toHaveAttribute('role', 'heading');
		await expect(component).toHaveAttribute('aria-level', '3');
	});

	test('falls back to level 2 when an untyped consumer omits the semantic level', async ({
		mount
	}) => {
		// `semanticLevel` is required in TypeScript. Plain HTML and Web Component
		// usage is not type-checked, so every target must degrade to level 2
		// instead of failing to render.
		const UntypedCustomHeading = DBCustomHeading as any;
		const component = await mount(
			<UntypedCustomHeading>No level given</UntypedCustomHeading>
		);
		await expect(component).toHaveAttribute('role', 'heading');
		await expect(component).toHaveAttribute('aria-level', '2');
	});

	test('maps the semantic level to the same default size as the native heading', async ({
		mount
	}) => {
		// Verifies the `[role="heading"][aria-level="1"]` style selector, which is
		// otherwise only covered by a screenshot.
		const nativeH1 = await mount(<DBHeadingH1>Native</DBHeadingH1>);
		const nativeFontSize = await readFontSize(nativeH1);
		await nativeH1.unmount();

		const customLevel1 = await mount(
			<DBCustomHeading semanticLevel={1}>
				<span>Custom</span>
			</DBCustomHeading>
		);
		expect(await readFontSize(customLevel1)).toBe(nativeFontSize);
	});

	test('renders arbitrary children inline with one accessible name', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading semanticLevel={2}>
				<span aria-hidden="true">Start</span>
				<div style={{ display: 'inline' }}>Main content</div>
				<strong> and more</strong>
				<span aria-hidden="true">End</span>
			</DBCustomHeading>
		);
		await expect(component).toHaveText(
			/Start\s*Main content\s*and more\s*End/
		);
		await expect(component).toHaveAccessibleName('Main content and more');
	});

	test('has the expected custom ARIA heading-level snapshot', async ({
		mount
	}, testInfo) => {
		const component = await mount(customSemanticHeadings);
		expect(await component.ariaSnapshot()).toMatchSnapshot(
			`${testInfo.testId}.yaml`
		);
	});

	test('has no Axe violations', async ({ page, mount }) => {
		await mount(customSemanticHeadings);
		const results = await new AxeBuilder({ page })
			.include('.db-heading')
			.analyze();
		expect(results.violations).toEqual([]);
	});

	test('matches the custom heading screenshot', async ({ mount }) => {
		const component = await mount(
			<DBCustomHeading semanticLevel={3} size="xl" fontWeight="light">
				<span aria-hidden="true">Start </span>
				<div style={{ display: 'inline' }}>Custom heading</div>
			</DBCustomHeading>
		);
		await expect(component).toHaveScreenshot('custom-heading.png');
	});
});
