import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBParagraph, DBParagraphGroup, DBText } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

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
const alignments = ['start', 'center', 'end'] as const;

const textStructure: any = (
	<div>
		<DBParagraphGroup gap="medium">
			<DBParagraph>First paragraph</DBParagraph>
			<DBParagraph>Second paragraph</DBParagraph>
		</DBParagraphGroup>
		<DBParagraph>
			Standalone paragraph with <DBText>inline text</DBText> and{' '}
			<DBText visuallyHidden>hidden context</DBText>
		</DBParagraph>
	</div>
);

const keyVariants: any = (
	<div style={{ display: 'grid', gap: '16px', width: '720px' }}>
		<DBParagraph size="3xl">Paragraph / 3xl</DBParagraph>
		<DBParagraph size="sm" alignment="center">
			Paragraph / sm / centered
		</DBParagraph>
		<DBParagraph alignment="end">Paragraph / end</DBParagraph>
		<DBParagraphGroup gap="large" size="lg">
			<DBParagraph>Group / lg / large gap</DBParagraph>
			<DBParagraph size="2xs">Child overriding the size</DBParagraph>
		</DBParagraphGroup>
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

test.describe('DBText', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('renders a span so it stays phrasing content', async ({ mount }) => {
		const component = await mount(<DBText>Inline</DBText>);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('span');
		await expect(component).toHaveClass(/db-text/);
	});

	test('is valid inside elements that only accept phrasing content', async ({
		mount
	}) => {
		// The reason DBText renders a span: dt and legend take phrasing content
		// only, so a paragraph could not be nested there.
		const component = await mount(
			<div>
				<dl>
					<dt>
						<DBText>Term</DBText>
					</dt>
					<dd>
						<DBText>Definition</DBText>
					</dd>
				</dl>
				<fieldset>
					<legend>
						<DBText>Legend</DBText>
					</legend>
				</fieldset>
			</div>
		);
		expect(await component.locator('dt > .db-text').count()).toBe(1);
		expect(await component.locator('legend > .db-text').count()).toBe(1);
	});

	test('stays inline inside a paragraph', async ({ mount }) => {
		const component = await mount(
			<DBParagraph>
				before <DBText data-testid="inline">middle</DBText> after
			</DBParagraph>
		);
		await expect(component.getByTestId('inline')).toHaveCSS(
			'display',
			'inline'
		);
	});

	test('inherits the size when none is set', async ({ mount }) => {
		// There is deliberately no default size, so an unset DBText has to match
		// its surroundings exactly.
		const component = await mount(
			<DBParagraph size="3xl">
				<DBText data-testid="inheriting">Inheriting</DBText>
			</DBParagraph>
		);
		await expect(component).not.toHaveAttribute('data-size', '');
		expect(await readFontSize(component.getByTestId('inheriting'))).toBe(
			await readFontSize(component)
		);
	});

	for (const size of sizes) {
		test(`supports size ${size}`, async ({ mount }) => {
			const component = await mount(<DBText size={size}>{size}</DBText>);
			await expect(component).toHaveAttribute('data-size', size);
		});
	}

	test('supports visually hidden states', async ({ mount }) => {
		const omitted = await mount(<DBText>Visible</DBText>);
		await expect(omitted).not.toHaveAttribute('data-visually-hidden');
		await expect(omitted).toBeVisible();
		await omitted.unmount();

		const disabled = await mount(
			<DBText visuallyHidden={false}>False</DBText>
		);
		await expect(disabled).toHaveAttribute('data-visually-hidden', 'false');
		await expect(disabled).toBeVisible();
		await disabled.unmount();

		const enabled = await mount(<DBText visuallyHidden>Hidden</DBText>);
		await expect(enabled).toHaveAttribute('data-visually-hidden', 'true');
		// Clipped out of view, but still rendered and readable by assistive
		// technology, which is the whole point.
		const box = await enabled.boundingBox();
		expect(box!.width).toBeLessThanOrEqual(1);
		expect(box!.height).toBeLessThanOrEqual(1);
		await expect(enabled).toHaveText('Hidden');
	});

	test('keeps visually hidden text in the accessible name', async ({
		mount
	}) => {
		const component = await mount(
			<DBParagraph>
				29 euros<DBText visuallyHidden>, reduced fare</DBText>
			</DBParagraph>
		);
		await expect(component).toHaveText('29 euros, reduced fare');
	});

	test('composes class and resolves direct and overridden ids', async ({
		mount
	}) => {
		const direct = await mount(
			<DBText
				className="custom-text"
				id="direct-id"
				propOverrides={{ id: 'override-id' }}>
				Direct
			</DBText>
		);
		await expect(direct).toHaveClass(/db-text/);
		await expect(direct).toHaveClass(/custom-text/);
		await expect(direct).toHaveAttribute('id', 'direct-id');
		await direct.unmount();

		const overridden = await mount(
			<DBText propOverrides={{ id: 'override-id' }}>Override</DBText>
		);
		await expect(overridden).toHaveAttribute('id', 'override-id');
	});

	test('forwards native attributes', async ({ mount }) => {
		const component = await mount(
			<DBText
				lang="de"
				aria-label="Accessible text"
				data-forwarded="text"
				title="Title"
				style={{ textTransform: 'uppercase' }}>
				Forwarded
			</DBText>
		);
		await expect(component).toHaveAttribute('lang', 'de');
		await expect(component).toHaveAttribute(
			'aria-label',
			'Accessible text'
		);
		await expect(component).toHaveAttribute('data-forwarded', 'text');
		await expect(component).toHaveAttribute('title', 'Title');
		await expect(component).toHaveCSS('text-transform', 'uppercase');
	});

	// VUE: test('forwards the class alias', async ({ mount }) => {
	// VUE: 	const component = await mount(<DBText class="class-alias">Class alias</DBText>);
	// VUE: 	await expect(component).toHaveClass(/db-text/);
	// VUE: 	await expect(component).toHaveClass(/class-alias/);
	// VUE: });
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
		// would add to the gap of a surrounding group, so spacing stays the
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
		// typography actually changes and uses the body scale.
		const small = await mount(<DBParagraph size="3xs">Small</DBParagraph>);
		const smallFontSize = await readFontSize(small);
		await small.unmount();

		const large = await mount(<DBParagraph size="3xl">Large</DBParagraph>);
		expect(Number.parseFloat(await readFontSize(large))).toBeGreaterThan(
			Number.parseFloat(smallFontSize)
		);
	});

	for (const alignment of alignments) {
		test(`supports logical alignment ${alignment}`, async ({ mount }) => {
			const component = await mount(
				<DBParagraph alignment={alignment}>{alignment}</DBParagraph>
			);
			await expect(component).toHaveAttribute(
				'data-alignment',
				alignment
			);
			await expect(component).toHaveCSS('text-align', alignment);
		});
	}

	test('forwards native attributes and resolves ids', async ({ mount }) => {
		const component = await mount(
			<DBParagraph
				className="custom-paragraph"
				id="direct-id"
				lang="en"
				data-forwarded="paragraph">
				Forwarded
			</DBParagraph>
		);
		await expect(component).toHaveClass(/custom-paragraph/);
		await expect(component).toHaveAttribute('id', 'direct-id');
		await expect(component).toHaveAttribute('lang', 'en');
		await expect(component).toHaveAttribute('data-forwarded', 'paragraph');
	});
});

test.describe('DBParagraphGroup', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });

	test('renders a presentational div without semantics of its own', async ({
		mount
	}) => {
		const component = await mount(
			<DBParagraphGroup>
				<DBParagraph>Body</DBParagraph>
			</DBParagraphGroup>
		);
		expect(
			await component.evaluate((element) => element.tagName.toLowerCase())
		).toBe('div');
		await expect(component).toHaveClass(/db-paragraph-group/);
		await expect(component).not.toHaveAttribute('role');
	});

	test('lays its children out as a column', async ({ mount }) => {
		const component = await mount(
			<DBParagraphGroup>
				<DBParagraph>First</DBParagraph>
				<DBParagraph>Second</DBParagraph>
			</DBParagraphGroup>
		);
		await expect(component).toHaveCSS('display', 'flex');
		await expect(component).toHaveCSS('flex-direction', 'column');
	});

	test('spaces children with gap and leaves no trailing margin', async ({
		mount
	}) => {
		// This is why the group uses gap instead of propagating a margin: the
		// spacing sits between the items only, so the last child adds nothing.
		const component = await mount(
			<DBParagraphGroup gap="large">
				<DBParagraph data-testid="first">First</DBParagraph>
				<DBParagraph data-testid="second">Second</DBParagraph>
			</DBParagraphGroup>
		);
		await expect(component).toHaveAttribute('data-gap', 'large');

		const gap = Number.parseFloat(
			await component.evaluate(
				(element: HTMLElement) => getComputedStyle(element).rowGap
			)
		);
		expect(gap).toBeGreaterThan(0);

		const [groupBox, firstBox, secondBox] = await Promise.all([
			component.boundingBox(),
			component.getByTestId('first').boundingBox(),
			component.getByTestId('second').boundingBox()
		]);
		// The measured distance between the two paragraphs is the gap, which only
		// holds because the paragraph margins are reset.
		expect(secondBox!.y - (firstBox!.y + firstBox!.height)).toBeCloseTo(
			gap,
			0
		);
		// No trailing space below the last child.
		expect(groupBox!.y + groupBox!.height).toBeCloseTo(
			secondBox!.y + secondBox!.height,
			0
		);
	});

	test('cascades its size to children that set none', async ({ mount }) => {
		// Relies on native font-size inheritance rather than any propagation
		// logic, which is why no size default exists anywhere.
		const reference = await mount(
			<DBParagraph size="3xl">Reference</DBParagraph>
		);
		const referenceFontSize = await readFontSize(reference);
		await reference.unmount();

		const component = await mount(
			<DBParagraphGroup size="3xl">
				<DBParagraph data-testid="inheriting">Inheriting</DBParagraph>
				<DBParagraph data-testid="overriding" size="3xs">
					Overriding
				</DBParagraph>
			</DBParagraphGroup>
		);
		expect(await readFontSize(component.getByTestId('inheriting'))).toBe(
			referenceFontSize
		);
		expect(
			await readFontSize(component.getByTestId('overriding'))
		).not.toBe(referenceFontSize);
	});

	test('spaces foreign children as well', async ({ mount }) => {
		// The gap belongs to the container, so the group does not need to know
		// the child types. A list between two paragraphs is spaced too.
		const component = await mount(
			<DBParagraphGroup gap="large">
				<DBParagraph data-testid="before">Before</DBParagraph>
				<ul data-testid="list" style={{ margin: '0' }}>
					<li>Item</li>
				</ul>
			</DBParagraphGroup>
		);
		const gap = Number.parseFloat(
			await component.evaluate(
				(element: HTMLElement) => getComputedStyle(element).rowGap
			)
		);
		const [beforeBox, listBox] = await Promise.all([
			component.getByTestId('before').boundingBox(),
			component.getByTestId('list').boundingBox()
		]);
		expect(listBox!.y - (beforeBox!.y + beforeBox!.height)).toBeCloseTo(
			gap,
			0
		);
	});

	for (const alignment of alignments) {
		test(`supports logical alignment ${alignment}`, async ({ mount }) => {
			const component = await mount(
				<DBParagraphGroup alignment={alignment}>
					<DBParagraph data-testid="child">{alignment}</DBParagraph>
				</DBParagraphGroup>
			);
			await expect(component).toHaveAttribute(
				'data-alignment',
				alignment
			);
			// `.db-paragraph` deliberately sets no blanket `text-align`, so the
			// group alignment reaches the child through plain inheritance.
			await expect(component.getByTestId('child')).toHaveCSS(
				'text-align',
				alignment
			);
		});
	}
});

test.describe('Text accessibility and visuals', () => {
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
