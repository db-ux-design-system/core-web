import { DBIcon, DBInfotext, DBSection, DBSwitch } from '@components';
import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import IntrinsicElements = React.JSX.IntrinsicElements;

const overwriteHeadlineMarkdown = `/* Select a headline tag to be overwritten */
h1 {
	font: var(--db-type-headline-XX);

	/* spacings may vary depending on the project */
	margin-block: var(--db-spacing-fixed-XX);
}
`;

const getCodeExampleBodyFontSize = (size: string) => `.db-font-size-${size} {
	font: var(--db-type-body-${size});

	/* custom properties only for components */
	--db-icon-font-weight: var(--db-base-body-icon-weight-${size});
	--db-icon-font-size: var(--db-base-body-icon-font-size-${size});
}
`;
const getCodeExampleHeadlineTag = (tag: string, size: string) => `${tag} {
    font: var(--db-type-headline-${size});
    margin-block: var(--db-spacing-fixed-${size});
}
`;

const getCodeExampleHeadlineSizes = (
	size: string
) => `.custom-headline-selector {
    font: var(--db-type-headline-${size});
    margin-block: var(--db-spacing-fixed-${size});
}
`;

const ColorOverview = () => {
	const [showCodeBody, setShowCodeBody] = useState(false);
	const [showCodeHeadlines, setShowCodeHeadlines] = useState(false);
	const [showCodeHeadlineSizes, setShowCodeHeadlineSizes] = useState(false);

	return (
		<DefaultPage>
			<h1>Font Sizes Overview</h1>
			<ol>
				<li>
					<b>Body Font Sizes</b>
				</li>
				<li>
					<b>Default Headlines H1 - H6</b>
				</li>
				<li>
					<b>Available Headline Font Sizes</b>
				</li>
			</ol>
			<DBInfotext data-font-size="md" semantic="informational">
				<strong>Note: </strong>Some font sizes are the same for a
				specific device type. For example in mobile all <code>xl</code>{' '}
				sizes are the same.
			</DBInfotext>
			<h2>Body Font Sizes</h2>
			<p>
				All <strong>9 body font sizes</strong> provided by foundations
				can be set via <strong>css class</strong>,{' '}
				<strong>data-attribute</strong>,{' '}
				<strong>scss placeholder</strong> or{' '}
				<strong>Tailwind class</strong> (
				<a href="./readme">How to use</a>). This ensures that all custom
				properties are defined by the class to match the font size, so
				that certain child components fit correctly. For example, this
				allows DBIcon component to display its icon in the correct
				height and weight according to the chosen font-size.
			</p>
			<p>
				Therefore, if possible, these <b>db-font-size</b> classes should
				be used to change the font size of certain text elements such as{' '}
				<code>p</code> or containers with other texts.
			</p>
			<DBInfotext data-font-size="md" semantic="informational">
				The display of icons works correctly in all sizes except{' '}
				<code>3xl</code> and <code>3xs</code>. That is why they are
				hidden there.
			</DBInfotext>
			<br />
			<div>
				<DBSwitch
					change={(event) => {
						setShowCodeBody(event.target.checked);
					}}>
					Show CSS applied by using <b>db-font-size-XX</b> classes
				</DBSwitch>
			</div>
			<br />
			<DBSection spacing="small" className="db-neutral-bg-basic-level-2">
				{['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'].map(
					(size) => (
						<>
							<p className={`db-font-size-${size}`}>
								I am size: <strong>{size}</strong>{' '}
								{size !== '3xl' && size !== '3xs' && (
									<DBIcon icon="download" />
								)}
							</p>
							<pre
								style={{
									display: showCodeBody ? 'block' : 'none'
								}}>
								<code className="language-css">
									{getCodeExampleBodyFontSize(size)}
								</code>
							</pre>
						</>
					)
				)}
			</DBSection>

			<h2>Default Headlines H1 - H6</h2>
			<p>
				Certain <strong>Headline Font Sizes</strong> are mapped to the{' '}
				<strong>headline tags (H1 - H6)</strong> by default.
				Accordingly, it is sufficient to use the native headline tags,
				as in this example.
			</p>
			<DBInfotext data-font-size="md" semantic="informational">
				There are currently no CSS classes or data-attributes to set a
				predefined headline size for a specific element.
			</DBInfotext>
			<br />
			<div>
				<DBSwitch
					change={(event) => {
						setShowCodeHeadlines(event.target.checked);
					}}>
					Show CSS applied by using <strong>H1 - H6 tags</strong>
				</DBSwitch>
			</div>
			<br />
			<DBSection spacing="small" className="db-neutral-bg-basic-level-2">
				{(
					[
						{ Tag: 'h1', size: 'xl' },
						{ Tag: 'h2', size: 'lg' },
						{ Tag: 'h3', size: 'md' },
						{ Tag: 'h4', size: 'sm' },
						{ Tag: 'h5', size: 'xs' },
						{ Tag: 'h6', size: '2xs' }
					] as Array<{
						Tag: keyof IntrinsicElements;
						size: string;
					}>
				).map(({ Tag, size }) => (
					<>
						<Tag>
							{Tag.toUpperCase()} - default mapped size is:{' '}
							<u>{size}</u>
						</Tag>
						<pre
							style={{
								display: showCodeHeadlines ? 'block' : 'none'
							}}>
							<code className="language-css">
								{getCodeExampleHeadlineTag(Tag, size)}
							</code>
						</pre>
					</>
				))}
			</DBSection>

			<h2>Available Headline Font Sizes</h2>
			<p>
				This overview shows all <strong>9 headline sizes</strong> that
				are available in foundations. These can be used, for example, to
				(globally) overwrite the default mapping. Instructions on how
				overwriting works are below.
			</p>

			<br />
			<div>
				<DBSwitch
					change={(event) => {
						setShowCodeHeadlineSizes(event.target.checked);
					}}>
					Show CSS for custom usage of headline sizes
				</DBSwitch>
			</div>
			<br />

			<DBSection spacing="small" className="db-neutral-bg-basic-level-2">
				{['3xl', '2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs', '3xs'].map(
					(size) => (
						<>
							<h3
								style={{
									font: `var(--db-type-headline-${size})`,
									marginBlock: `var(--db-spacing-fixed-${size})`
								}}>
								Headline with size: <u>{size}</u>
							</h3>
							<pre
								style={{
									display: showCodeHeadlineSizes
										? 'block'
										: 'none'
								}}>
								<code className="language-css">
									{getCodeExampleHeadlineSizes(size)}
								</code>
							</pre>
						</>
					)
				)}
			</DBSection>

			<h3>How to overwrite headlines default mapping</h3>
			<p>
				To overwrite the default mapping of the foundations, a suitable
				selector (H1 - H6 or css class) is used to set{' '}
				<code>font-size</code> and <code>line-height</code> (and{' '}
				<code>margin-block</code> if necessary) to the desired size
				using the supplied <strong>custom properties</strong>.
			</p>

			<DBInfotext data-font-size="md" semantic="warning">
				In order to maintain a uniform typography, custom properties for{' '}
				<code>font-size</code> and <code>line-height</code> <u>must</u>{' '}
				be selected with the same size (e.g. <code>md</code>).
			</DBInfotext>
			<br />
			<DBSection spacing="small" className="db-neutral-bg-basic-level-2">
				<p>
					<b>These custom properties must be used for overwrites:</b>
				</p>
				<code>--db-type-headline-XX</code> (This shorthand custom
				property sets both <code>font-size</code> and{' '}
				<code>line-height</code>)
				<br />
				<code>--db-spacing-fixed-XX</code> (optional e.g. for margin)
				<p>
					<strong>They are available in the following sizes:</strong>
				</p>
				<p>
					<code>3xl</code> | <code>2xl</code> | <code>xl</code> |{' '}
					<code>lg</code> | <code>md</code> | <code>sm</code> |{' '}
					<code>xs</code> | <code>2xs</code> | <code>3xs</code>
				</p>
			</DBSection>
			<br />
			<pre>
				<code className="language-css">
					{overwriteHeadlineMarkdown}
				</code>
			</pre>
		</DefaultPage>
	);
};

export default ColorOverview;
