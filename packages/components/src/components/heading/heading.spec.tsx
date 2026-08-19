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

const customHeadingRows: any = (
	<div>
		<DBCustomHeading>
			<h2 id="default-row">Default row</h2>
			<a href="#default-row">Direct link</a>
		</DBCustomHeading>
		<DBCustomHeading size="3xs" fontWeight="light">
			<h3 id="styled-row">Styled row</h3>
			<a href="#styled-row">Direct link</a>
		</DBCustomHeading>
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

	test('lays the heading and its siblings out in a row', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading>
				<h2>Nested heading</h2>
				<a href="#nested-heading">Direct link</a>
			</DBCustomHeading>
		);
		await expect(component).toHaveCSS('display', 'flex');
		await expect(component).toHaveCSS('align-items', 'center');
		const [headingBox, linkBox] = await Promise.all([
			component.locator('h2').boundingBox(),
			component.locator('a').boundingBox()
		]);
		// Same row, link after the heading.
		expect(linkBox!.x).toBeGreaterThan(headingBox!.x);
		expect(linkBox!.y).toBeLessThan(headingBox!.y + headingBox!.height);
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
		// The wrapper mirrors the Heading styling API, so `size` on the wrapper has
		// to override the default level mapping of the nested heading.
		const reference = await mount(
			<DBHeadingH2 size="3xl">Ref</DBHeadingH2>
		);
		const referenceFontSize = await readFontSize(reference);
		await reference.unmount();

		const component = await mount(
			<DBCustomHeading size="3xl">
				<h2>Nested</h2>
			</DBCustomHeading>
		);
		await expect(component).toHaveAttribute('data-size', '3xl');
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

	test('resolves paragraph spacing from the heading line height', async ({
		mount
	}) => {
		// The wrapper carries the headline font as well, so `1lh` on the wrapper
		// resolves from the heading typography and not from the surrounding body
		// text.
		const omitted = await mount(
			<DBCustomHeading>
				<h2>Omitted</h2>
			</DBCustomHeading>
		);
		await expect(omitted).not.toHaveAttribute('data-paragraph-spacing');
		expect(await readLogicalMargins(omitted)).toMatchObject({
			blockEnd: '0px'
		});
		await omitted.unmount();

		const enabled = await mount(
			<DBCustomHeading paragraphSpacing>
				<h2>Enabled</h2>
			</DBCustomHeading>
		);
		const wrapperMargins = await readLogicalMargins(enabled);
		const headingMargins = await readLogicalMargins(enabled.locator('h2'));
		expect(Number.parseFloat(wrapperMargins.blockEnd)).toBeCloseTo(
			Number.parseFloat(wrapperMargins.lineHeight),
			2
		);
		// Proves the headline font landed on the wrapper, not just on the heading.
		expect(wrapperMargins.lineHeight).toBe(headingMargins.lineHeight);
	});

	test('leaves a nested Heading component in charge of its own typography', async ({
		mount
	}) => {
		// The child selectors exclude `.db-heading`, so a Heading component inside
		// the wrapper never fights the wrapper's attributes.
		const reference = await mount(
			<DBHeadingH2 size="3xs">Ref</DBHeadingH2>
		);
		const referenceFontSize = await readFontSize(reference);
		await reference.unmount();

		const component = await mount(
			<DBCustomHeading size="3xl">
				<DBHeadingH2 size="3xs">Nested</DBHeadingH2>
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
			<DBHeadingH2 size="3xl">Ref</DBHeadingH2>
		);
		const explicitFontSize = await readFontSize(explicitReference);
		await explicitReference.unmount();

		const explicit = await mount(
			<DBCustomHeading size="3xl">
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

	test('keeps sibling content out of the accessible heading name', async ({
		mount
	}) => {
		const component = await mount(
			<DBCustomHeading>
				<h2>Installation</h2>
				<a href="#installation">Direct link to Installation</a>
			</DBCustomHeading>
		);
		await expect(component.locator('h2')).toHaveAccessibleName(
			'Installation'
		);
		await expect(component.locator('a')).toHaveAccessibleName(
			'Direct link to Installation'
		);
	});

	for (const alignment of alignments) {
		test(`aligns the row with alignment ${alignment}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBCustomHeading alignment={alignment}>
					<h2>{alignment}</h2>
				</DBCustomHeading>
			);
			await expect(component).toHaveAttribute(
				'data-alignment',
				alignment
			);
			const expectedJustify = {
				start: 'normal',
				center: 'center',
				end: 'flex-end'
			};
			await expect(component).toHaveCSS(
				'justify-content',
				expectedJustify[alignment]
			);
			// `%heading-base` sets `text-align: start` on the nested heading, so the
			// wrapper alignment has to be repeated there instead of inherited.
			await expect(component.locator('h2')).toHaveCSS(
				'text-align',
				alignment
			);
		});
	}

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
