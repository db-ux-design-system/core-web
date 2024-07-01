import DefaultPage from '../../../components/default-page';
import { DBIcon, DBInfotext } from '../../../../../output/react/src';

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
	{ value: 'contrast-weak', accessible: false },
	{ value: 'border', accessible: false }
];

const ColorOverview = () => {
	return (
		<DefaultPage>
			<div>
				<h1>Color classes</h1>
				<p>
					These <b>classes</b> (or data-attributes) can be used to{' '}
					apply a <b>monochromatic adaptive color scheme</b> or a{' '}
					<b>color modifier</b> (background color, on-background
					color) to containers and elements.
				</p>
				<p>
					<i>
						These classes are <u>not</u> intended for individual
						styling of your own components. The corresponding custom
						properties should be used for this.
					</i>
				</p>
				<b>How to use:</b>
				<br />
				<br />
				<DBInfotext semantic="informational">
					Note: All three methods are optional: they can be used
					individually or in any combination on an element.
				</DBInfotext>
				<ol>
					<li>
						Should an entire container be given an{' '}
						<b>adaptive color scheme</b>? Then use a{' '}
						<code>db-container-color-[ color ]</code> class.
					</li>
					<li>
						The <b>background color</b>, in particular the{' '}
						<b>elevation level</b>, can be modified with a{' '}
						<code>db-bg-color-[ color ]</code> class.
					</li>
					<li>
						The contrast of the <b>text</b> and <b>icon color</b>{' '}
						can be changed with the <b>on-background</b> classes:{' '}
						<code>db-on-bg-color-[ color ]</code>
					</li>
				</ol>
				<h2>1. Container color</h2>
				<p>
					These classes define the{' '}
					<b>monochromatic adaptive color scheme</b> for a container.
					Texts, icons and backgrounds in it then automatically adapt
					to the color set.
				</p>
				<p>
					Each container color class functions as a shorthand and
					applies the following by default:
				</p>
				<ul>
					<li>
						A bunch of css custom-properties to apply the{' '}
						<b>monochromatic adaptive color scheme</b>
					</li>
					<li>
						Background color modifier <b>db-bg-color-lvl-1</b>{' '}
						(Level 1 background by default)
					</li>
					<li>
						On background color modifier{' '}
						<b>db-on-bg-color-default</b> (highest text contrast by
						default)
					</li>
				</ul>
				<h3>Semantic container color</h3>
				<p>
					These semantic colours are used to give a container a
					corresponding meaning. <b>Neutral</b> stands for the regular
					colour scheme, which is usually applied to root.
				</p>
				<div className="color-overview-container">
					{semanticColors.map((semanticColor) => (
						<div
							className={`db-container-color-${semanticColor}`}>{`db-container-color-${semanticColor}`}</div>
					))}
				</div>
				<h3>Additional container color</h3>
				<div className="color-overview-container">
					{additionalColors.map((additionalColor) => (
						<div
							className={`db-container-color-${additionalColor}`}>{`db-container-color-${additionalColor}`}</div>
					))}
				</div>
				<h2>2. Background color modifier</h2>
				<p>
					These classes define the type of background color for a
					container. The exact color tone then results from the
					current semantics (in root <b>neutral</b> by default). This
					means that each of these background types exists for each
					semantic color.
				</p>
				<div className="color-overview-container">
					{backgroundColors.map((backgroundColor) => (
						<div
							className={`db-bg-color-${backgroundColor}`}>{`db-bg-color-${backgroundColor}`}</div>
					))}
				</div>
				<h2>3. On background color modifier</h2>
				<p>
					This class is used to define the contrast for <b>texts</b>{' '}
					and <b>icons</b>. As with the background colors, these are
					displayed according to the current color scheme.
				</p>
				<p>
					<b>
						* These colors do not have sufficient contrast. They are
						therefore not permitted as text colors.
					</b>
				</p>
				<div className="color-overview-container">
					{onBackgroundColors.map(({ value, accessible }) => (
						<div className={`db-on-bg-color-${value}`}>
							<DBIcon icon="heart" />
							{`db-on-bg-color-${value}`}
							{accessible === false ? ' *' : ''}
						</div>
					))}
				</div>
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
