import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import {
	DBIcon,
	DBInfotext,
	DBTabs,
	DBTabList,
	DBTabPanel,
	DBTabItem,
	DBSwitch
} from '../../../../../output/react/src';
import checkerboard from '../../../assets/images/checkerboard.png';
import CopyClipboardButton from '../../../components/copy-clipboard-button';

const semanticColors = [
	'neutral',
	'brand',
	'critical',
	'successful',
	'warning',
	'informational'
];

const additionalColors = [
	'yellow',
	'orange',
	'red',
	'pink',
	'violet',
	'blue',
	'cyan',
	'turquoise',
	'green'
];

const backgroundColors = [
	'lvl-1',
	'lvl-2',
	'lvl-3',
	'transparent-full',
	'transparent-semi'
];

const onBackgroundColors = [
	{ value: 'default' },
	{ value: 'weak' },
	{ value: 'contrast' },
	{ value: 'contrast-weak', appendix: ' *' },
	{ value: 'border', appendix: ' *' }
];

type ColorValue = string | { value: string; appendix?: string };

const ColorsGrid = ({
	values,
	prefixClass,
	dataAttributeName,
	showCheckerboard,
	enableDarkMode,
	variant
}: {
	values: ColorValue[];
	prefixClass: string;
	dataAttributeName: string;
	showCheckerboard: boolean;
	enableDarkMode: boolean;
	variant: 'class' | 'dataAttribute';
}) => {
	const getText = (value: string) =>
		variant === 'class'
			? `${prefixClass}${value}`
			: `${dataAttributeName}="${value}"`;

	const getAttributes = (value: string) =>
		variant === 'class'
			? { className: `${prefixClass}${value}` }
			: { [dataAttributeName]: value };

	return (
		<div
			className="color-overview-container db-font-size-sm"
			data-color-scheme={enableDarkMode ? 'dark' : 'light'}>
			<span
				style={{
					backgroundImage: showCheckerboard
						? `url(${checkerboard.src})`
						: 'none'
				}}
			/>{' '}
			{values.map((value, index) => {
				const v = typeof value === 'string' ? value : value.value;
				const appendix =
					typeof value === 'string' ? undefined : value.appendix;
				return (
					<div {...getAttributes(v)}>
						<span>
							{getText(v)}
							{appendix}
						</span>
						<CopyClipboardButton
							name={`copy-button-${index}`}
							copyText={getText(v)}>
							Copied to clipboard
						</CopyClipboardButton>
					</div>
				);
			})}
		</div>
	);
};

const ColorsOverviewTabs = ({
	values,
	prefixClass,
	dataAttributeName
}: {
	values: ColorValue[];
	prefixClass: string;
	dataAttributeName: string;
}) => {
	const [showCheckerboard, setShowCheckerboard] = useState<boolean>(false);
	const [enableDarkMode, setEnableDarkMode] = useState<boolean>(false);

	return (
		<>
			<div className="color-overview-switches">
				<DBSwitch
					checked={showCheckerboard}
					onChange={(event) => {
						setShowCheckerboard(event.target.checked);
					}}>
					Show checkerboard
				</DBSwitch>
				<DBSwitch
					checked={enableDarkMode}
					onChange={(event) => {
						setEnableDarkMode(event.target.checked);
					}}>
					Preview dark mode
				</DBSwitch>
			</div>
			<DBTabs>
				<DBTabList>
					<DBTabItem>Classes</DBTabItem>
					<DBTabItem>Data Attributes</DBTabItem>
				</DBTabList>
				<DBTabPanel>
					<ColorsGrid
						variant="class"
						values={values}
						prefixClass={prefixClass}
						dataAttributeName={dataAttributeName}
						showCheckerboard={showCheckerboard}
						enableDarkMode={enableDarkMode}
					/>
				</DBTabPanel>
				<DBTabPanel>
					<ColorsGrid
						variant="dataAttribute"
						values={values}
						prefixClass={prefixClass}
						dataAttributeName={dataAttributeName}
						showCheckerboard={showCheckerboard}
						enableDarkMode={enableDarkMode}
					/>
				</DBTabPanel>
			</DBTabs>
		</>
	);
};

const ColorOverview = () => {
	return (
		<DefaultPage>
			<div>
				<h1>Color classes</h1>
				<p>
					These <strong>classes</strong> (or data-attributes) can be
					used to apply a{' '}
					<strong>monochromatic adaptive color scheme</strong> or a{' '}
					<strong>color modifier</strong> (background color,
					on-background color) to containers and elements.
				</p>
				<p>
					<i>
						These classes are <u>not</u> intended for individual
						styling of your own components. The corresponding CSS
						Custom Properties should be used for this.
					</i>
				</p>
				<strong>How to use:</strong>
				<br />
				<br />
				<DBInfotext semantic="informational">
					Note: All three methods are optional: they can be used
					individually or in any combination on an element.
				</DBInfotext>
				<ol>
					<li>
						Should an entire container be given an{' '}
						<strong>adaptive color scheme</strong>? Then use a{' '}
						<code>db-container-color-[ color ]</code> class.
					</li>
					<li>
						The <strong>background color</strong>, in particular the{' '}
						<strong>elevation level</strong>, can be modified with a{' '}
						<code>db-bg-color-[ color ]</code> class.
					</li>
					<li>
						The contrast of the <strong>text</strong> and{' '}
						<strong>icon color</strong> can be changed with the{' '}
						<strong>on-background</strong> classes:{' '}
						<code>db-on-bg-color-[ color ]</code>
					</li>
				</ol>
				<h2>1. Container color</h2>
				<p>
					These classes define the{' '}
					<strong>monochromatic adaptive color scheme</strong> for a
					container. Texts, icons and backgrounds in it then
					automatically adapt to the color set.
				</p>
				<p>
					Each container color class functions as a shorthand and
					applies the following by default:
				</p>
				<ul>
					<li>
						A bunch of CSS Custom Properties to apply the{' '}
						<strong>monochromatic adaptive color scheme</strong>
					</li>
					<li>
						Background color modifier{' '}
						<strong>db-bg-color-lvl-1</strong> (Level 1 background
						by default)
					</li>
					<li>
						On background color modifier{' '}
						<strong>db-on-bg-color-default</strong> (highest text
						contrast by default)
					</li>
				</ul>
				<h3>Semantic container color</h3>
				<p>
					These semantic colours are used to give a container a
					corresponding meaning. <strong>Neutral</strong> stands for
					the regular colour scheme, which is usually applied to root.
				</p>
				<ColorsOverviewTabs
					values={semanticColors}
					prefixClass="db-container-color-"
					dataAttributeName="data-container-color"
				/>
				<h3>Additional container color</h3>
				<ColorsOverviewTabs
					values={additionalColors}
					prefixClass="db-container-color-"
					dataAttributeName="data-container-color"
				/>
				<h2>2. Background color modifier</h2>
				<p>
					These classes define the type of background color for a
					container. The exact color tone then results from the
					current semantics (in root <strong>neutral</strong> by
					default). This means that each of these background types
					exists for each semantic color.
				</p>
				<ColorsOverviewTabs
					values={backgroundColors}
					prefixClass="db-bg-color-"
					dataAttributeName="data-bg-color"
				/>
				<h2>3. On background color modifier</h2>
				<p>
					This class is used to define the contrast for{' '}
					<strong>texts</strong> and <strong>icons</strong>. As with
					the background colors, these are displayed according to the
					current color scheme.
				</p>
				<p>
					<strong>
						* These colors do not have sufficient contrast. They are
						therefore not permitted as text colors.
					</strong>
				</p>
				<ColorsOverviewTabs
					values={onBackgroundColors}
					prefixClass="db-on-bg-color-"
					dataAttributeName="data-on-bg-color"
				/>
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
