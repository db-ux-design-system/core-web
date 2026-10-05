import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBParagraph, DBTextGroup } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const sizes = ['lg', 'md', 'sm'] as const;
const fontWeights = [
	['black', '900'],
	['regular', '400']
] as const;
const alignments = ['start', 'center', 'end'] as const;

const textStructure: any = (
	<div>
		<DBTextGroup textSpacing>
			<DBParagraph>First paragraph</DBParagraph>
			<DBParagraph>Second paragraph</DBParagraph>
		</DBTextGroup>
		<DBParagraph>Standalone paragraph</DBParagraph>
	</div>
);

const keyVariants: any = (
	<div style={{ display: 'grid', gap: '16px', width: '720px' }}>
		<DBParagraph size="lg">Paragraph / lg</DBParagraph>
		<DBParagraph size="sm" fontWeight="black">
			Paragraph / sm / black
		</DBParagraph>
		<DBParagraph fontWeight="regular">Paragraph / regular</DBParagraph>
		<DBTextGroup textSpacing alignment="center">
			<DBParagraph>Group / centered / text spacing</DBParagraph>
			<DBParagraph size="sm">Child with its own size</DBParagraph>
		</DBTextGroup>
		<DBParagraph data-density="expressive">
			Paragraph / expressive density
		</DBParagraph>
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
			blockEnd: style.marginBlockEnd
		};
	});

test.describe('DBParagraph', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('renders a native p', async ({ mount }) => {
		const component = await mount(<DBParagraph>Body</DBParagraph>);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('p');
		await expect(component).toHaveClass(/db-paragraph/);
	});

	test('resets the block margin the foundations give a p', async ({
		mount
	}) => {
		// default-fonts.scss sets a margin-block on every p. Left in place it
		// would add to the spacing of a surrounding group, so spacing stays the
		// container's job exclusively.
		const component = await mount(<DBParagraph>Body</DBParagraph>);
		expect(await readLogicalMargins(component)).toMatchObject({
			blockStart: '0px',
			blockEnd: '0px'
		});
	});

	test('wraps text with the pretty strategy where it is supported', async ({
		mount
	}) => {
		// `text-wrap: pretty` is a progressive enhancement: Firefox ESR is a
		// Browserslist target and drops the declaration, computing `wrap`. So the
		// assertion is gated on support instead of being skipped, which keeps it
		// meaningful wherever the feature exists.
		const component = await mount(<DBParagraph>Body</DBParagraph>);
		const isSupported = await component.evaluate(() =>
			CSS.supports('text-wrap', 'pretty')
		);
		await expect(component).toHaveCSS(
			'text-wrap',
			isSupported ? 'pretty' : 'wrap'
		);
	});

	for (const size of sizes) {
		test(`supports size ${size}`, async ({ mount }) => {
			const component = await mount(
				<DBParagraph size={size}>{size}</DBParagraph>
			);
			await expect(component).toHaveAttribute('data-size', size);
		});
	}

	test('resolves sizes to real body typography', async ({ mount }) => {
		// The data-size assertions only prove prop plumbing; this checks the
		// typography actually changes.
		const small = await mount(<DBParagraph size="sm">Small</DBParagraph>);
		const smallFontSize = await readFontSize(small);
		await small.unmount();

		const large = await mount(<DBParagraph size="lg">Large</DBParagraph>);
		expect(Number.parseFloat(await readFontSize(large))).toBeGreaterThan(
			Number.parseFloat(smallFontSize)
		);
	});

	for (const [variant, weight] of fontWeights) {
		test(`resolves the ${variant} font variant to ${weight}`, async ({
			mount
		}) => {
			const component = await mount(
				<DBParagraph fontWeight={variant}>{variant}</DBParagraph>
			);
			await expect(component).toHaveAttribute(
				'data-font-weight',
				variant
			);
			await expect(component).toHaveCSS('font-weight', weight);
		});
	}

	test('keeps the font variant when a size is set as well', async ({
		mount
	}) => {
		// The size placeholders apply the `font` shorthand, which resets
		// `font-weight`. Both selectors carry the same specificity, so only the
		// source order keeps the variant from being silently dropped.
		const component = await mount(
			<DBParagraph size="lg" fontWeight="black">
				Both
			</DBParagraph>
		);
		await expect(component).toHaveCSS('font-weight', '900');
	});

	test('inherits the alignment of its group', async ({ mount }) => {
		// DBParagraph has no alignment of its own and sets no blanket
		// `text-align`, which is what lets the group reach it by inheritance.
		const component = await mount(
			<DBTextGroup alignment="center">
				<DBParagraph data-testid="child">Child</DBParagraph>
			</DBTextGroup>
		);
		await expect(component.getByTestId('child')).toHaveCSS(
			'text-align',
			'center'
		);
	});

	test('composes class and resolves direct and overridden ids', async ({
		mount
	}) => {
		const direct = await mount(
			<DBParagraph
				className="custom-paragraph"
				id="direct-id"
				propOverrides={{ id: 'override-id' }}>
				Direct
			</DBParagraph>
		);
		await expect(direct).toHaveClass(/db-paragraph/);
		await expect(direct).toHaveClass(/custom-paragraph/);
		await expect(direct).toHaveAttribute('id', 'direct-id');
		await direct.unmount();

		const overridden = await mount(
			<DBParagraph propOverrides={{ id: 'override-id' }}>
				Override
			</DBParagraph>
		);
		await expect(overridden).toHaveAttribute('id', 'override-id');
	});

	test('forwards native attributes', async ({ mount }) => {
		const component = await mount(
			<DBParagraph
				lang="en"
				aria-label="Accessible paragraph"
				data-forwarded="paragraph"
				title="Title"
				style={{ textTransform: 'uppercase' }}>
				Forwarded
			</DBParagraph>
		);
		await expect(component).toHaveAttribute('lang', 'en');
		await expect(component).toHaveAttribute(
			'aria-label',
			'Accessible paragraph'
		);
		await expect(component).toHaveAttribute('data-forwarded', 'paragraph');
		await expect(component).toHaveAttribute('title', 'Title');
		await expect(component).toHaveCSS('text-transform', 'uppercase');
	});

	// VUE: test('forwards the class alias', async ({ mount }) => {
	// VUE: 	const component = await mount(<DBParagraph class="class-alias">Class alias</DBParagraph>);
	// VUE: 	await expect(component).toHaveClass(/db-paragraph/);
	// VUE: 	await expect(component).toHaveClass(/class-alias/);
	// VUE: });
});

test.describe('DBTextGroup', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('renders a presentational div without semantics of its own', async ({
		mount
	}) => {
		const component = await mount(
			<DBTextGroup>
				<DBParagraph>Body</DBParagraph>
			</DBTextGroup>
		);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('div');
		await expect(component).toHaveClass(/db-text-group/);
		await expect(component).not.toHaveAttribute('role');
	});

	test('lays its children out as a column', async ({ mount }) => {
		const component = await mount(
			<DBTextGroup>
				<DBParagraph>First</DBParagraph>
				<DBParagraph>Second</DBParagraph>
			</DBTextGroup>
		);
		await expect(component).toHaveCSS('display', 'flex');
		await expect(component).toHaveCSS('flex-direction', 'column');
	});

	test('adds no spacing when text spacing is omitted or disabled', async ({
		mount
	}) => {
		const omitted = await mount(
			<DBTextGroup>
				<DBParagraph data-testid="child">Omitted</DBParagraph>
			</DBTextGroup>
		);
		await expect(omitted).not.toHaveAttribute('data-text-spacing');
		expect(
			await readLogicalMargins(omitted.getByTestId('child'))
		).toMatchObject({ blockStart: '0px', blockEnd: '0px' });
		await omitted.unmount();

		const disabled = await mount(
			<DBTextGroup textSpacing={false}>
				<DBParagraph data-testid="child">False</DBParagraph>
			</DBTextGroup>
		);
		await expect(disabled).toHaveAttribute('data-text-spacing', 'false');
		expect(
			await readLogicalMargins(disabled.getByTestId('child'))
		).toMatchObject({ blockStart: '0px', blockEnd: '0px' });
	});

	test('gives every child half a line height on both sides', async ({
		mount
	}) => {
		const component = await mount(
			<DBTextGroup textSpacing>
				<DBParagraph data-testid="child">Child</DBParagraph>
			</DBTextGroup>
		);
		await expect(component).toHaveAttribute('data-text-spacing', 'true');

		const { blockStart, blockEnd, lineHeight } = await component
			.getByTestId('child')
			.evaluate((element: HTMLElement) => {
				const style = getComputedStyle(element);
				return {
					blockStart: style.marginBlockStart,
					blockEnd: style.marginBlockEnd,
					lineHeight: style.lineHeight
				};
			});
		const half = Number.parseFloat(lineHeight) / 2;
		// `0.5lh` has to resolve against the child's own line height, not the
		// group's, so a smaller paragraph gets a smaller spacing.
		expect(Number.parseFloat(blockStart)).toBeCloseTo(half, 1);
		expect(Number.parseFloat(blockEnd)).toBeCloseTo(half, 1);
	});

	test('puts one line height between two adjacent children', async ({
		mount
	}) => {
		// Flex items do not collapse margins, so the two half line heights add
		// up. This is the reason for the half-and-half split instead of a gap:
		// the group additionally keeps the spacing at its outer edges.
		const component = await mount(
			<DBTextGroup textSpacing>
				<DBParagraph data-testid="first">First</DBParagraph>
				<DBParagraph data-testid="second">Second</DBParagraph>
			</DBTextGroup>
		);
		const lineHeight = Number.parseFloat(
			await component
				.getByTestId('first')
				.evaluate(
					(element: HTMLElement) =>
						getComputedStyle(element).lineHeight
				)
		);
		const [groupBox, firstBox, secondBox] = await Promise.all([
			component.boundingBox(),
			component.getByTestId('first').boundingBox(),
			component.getByTestId('second').boundingBox()
		]);
		expect(secondBox!.y - (firstBox!.y + firstBox!.height)).toBeCloseTo(
			lineHeight,
			0
		);
		// Half a line height of breathing room at the group's own edges.
		expect(firstBox!.y - groupBox!.y).toBeCloseTo(lineHeight / 2, 0);
		expect(
			groupBox!.y + groupBox!.height - (secondBox!.y + secondBox!.height)
		).toBeCloseTo(lineHeight / 2, 0);
	});

	test('spaces foreign children as well', async ({ mount }) => {
		// The selector is `> *`, so the group does not need to know the child
		// types and content without our own class is spaced the same way.
		const component = await mount(
			<DBTextGroup textSpacing>
				<DBParagraph data-testid="paragraph">Paragraph</DBParagraph>
				<div data-testid="foreign">Foreign child</div>
			</DBTextGroup>
		);
		const margins = await readLogicalMargins(
			component.getByTestId('foreign')
		);
		expect(Number.parseFloat(margins.blockStart)).toBeGreaterThan(0);
		expect(Number.parseFloat(margins.blockEnd)).toBeGreaterThan(0);
	});

	for (const alignment of alignments) {
		test(`supports logical alignment ${alignment}`, async ({ mount }) => {
			const component = await mount(
				<DBTextGroup alignment={alignment}>
					<DBParagraph data-testid="child">{alignment}</DBParagraph>
				</DBTextGroup>
			);
			await expect(component).toHaveAttribute(
				'data-alignment',
				alignment
			);
			await expect(component.getByTestId('child')).toHaveCSS(
				'text-align',
				alignment
			);
		});
	}

	test('forwards native attributes and resolves ids', async ({ mount }) => {
		const component = await mount(
			<DBTextGroup
				className="custom-group"
				id="direct-id"
				data-forwarded="group">
				<DBParagraph>Forwarded</DBParagraph>
			</DBTextGroup>
		);
		await expect(component).toHaveClass(/custom-group/);
		await expect(component).toHaveAttribute('id', 'direct-id');
		await expect(component).toHaveAttribute('data-forwarded', 'group');
	});
});

test.describe('Paragraph accessibility and visuals', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('has the expected ARIA snapshot', async ({ mount }, testInfo) => {
		const component = await mount(textStructure);
		expect(await component.ariaSnapshot()).toMatchSnapshot(
			`${testInfo.testId}.yaml`
		);
	});

	test('has no Axe violations', async ({ page, mount }) => {
		await mount(textStructure);
		const results = await new AxeBuilder({ page })
			.include('.db-paragraph')
			.analyze();
		expect(results.violations).toEqual([]);
	});

	test('matches the key variant screenshot', async ({ mount }) => {
		const component = await mount(keyVariants);
		await expect(component).toHaveScreenshot('key-variants.png');
	});
});
