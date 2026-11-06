/*
 * Examples of the Foundations page "Font Sizes" (formerly Patternhub "Font
 * Sizes Overview"): the 9 body sizes, the default headline mapping and the
 * 9 headline sizes, each with the CSS it applies.
 * Hidden in the sidebar (`!dev`), shown on the page by
 * generate-foundations.ts.
 */
import { DBIcon, DBSection, DBSwitch } from '@components';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement, useState, type ReactNode } from 'react';
import './examples.css';

const SIZES = ['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'];
/** Default mapping of the headline tags in the foundations. */
const HEADLINES = [
	['h1', 'xl'],
	['h2', 'lg'],
	['h3', 'md'],
	['h4', 'sm'],
	['h5', 'xs'],
	['h6', '2xs']
] as const;

const WithCode = ({
	label,
	children
}: {
	label: string;
	children: (isCodeShown: boolean) => ReactNode;
}) => {
	const [isCodeShown, setIsCodeShown] = useState(false);
	return (
		<div className="foundations-example">
			<DBSwitch
				checked={isCodeShown}
				onChange={(event) => {
					setIsCodeShown(event.target.checked);
				}}>
				{label}
			</DBSwitch>
			<DBSection
				spacing="small"
				className="foundations-font-sizes db-neutral-bg-basic-level-2">
				{children(isCodeShown)}
			</DBSection>
		</div>
	);
};

const Code = ({ code }: { code: string }) => (
	<pre>
		<code>{code}</code>
	</pre>
);

const meta = {
	title: 'Foundations Examples/Font Sizes',
	tags: ['!dev', '!autodocs'],
	parameters: { docs: { canvas: { sourceState: 'none' } } }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The `db-font-size-*` classes also set the icon size and weight, so a DBIcon
 * fits the text. Icons are not shown for 3xl and 3xs, they do not fit there.
 */
export const BodyFontSizes: Story = {
	render: () => (
		<WithCode label="Show the CSS of the db-font-size-* classes">
			{(isCodeShown) =>
				SIZES.map((size) => (
					<div key={size}>
						<p className={`db-font-size-${size}`}>
							Size <strong>{size}</strong>{' '}
							{size !== '3xl' && size !== '3xs' && (
								<DBIcon icon="download" />
							)}
						</p>
						{isCodeShown && (
							<Code
								code={`.db-font-size-${size} {\n\tfont: var(--db-type-body-${size});\n\t--db-icon-font-weight: var(--db-base-body-icon-weight-${size});\n\t--db-icon-font-size: var(--db-base-body-icon-font-size-${size});\n}`}
							/>
						)}
					</div>
				))
			}
		</WithCode>
	)
};

/** The native headline tags use these sizes by default. */
export const DefaultHeadlines: Story = {
	render: () => (
		<WithCode label="Show the CSS of the h1–h6 tags">
			{(isCodeShown) =>
				HEADLINES.map(([tag, size]) => (
					<div key={tag}>
						{createElement(
							tag,
							{},
							`${tag.toUpperCase()}: default size ${size}`
						)}
						{isCodeShown && (
							<Code
								code={`${tag} {\n\tfont: var(--db-type-headline-${size});\n\tmargin-block: var(--db-spacing-fixed-${size});\n}`}
							/>
						)}
					</div>
				))
			}
		</WithCode>
	)
};

/**
 * All 9 headline sizes, e.g. to change the default mapping. Use the same
 * size for `--db-type-headline-*` and `--db-spacing-fixed-*`.
 */
export const HeadlineSizes: Story = {
	render: () => (
		<WithCode label="Show the CSS for a custom headline">
			{(isCodeShown) =>
				SIZES.map((size) => (
					<div key={size}>
						<p
							style={{
								font: `var(--db-type-headline-${size})`,
								marginBlock: `var(--db-spacing-fixed-${size})`
							}}>
							Headline size {size}
						</p>
						{isCodeShown && (
							<Code
								code={`.custom-headline {\n\tfont: var(--db-type-headline-${size});\n\tmargin-block: var(--db-spacing-fixed-${size});\n}`}
							/>
						)}
					</div>
				))
			}
		</WithCode>
	)
};
