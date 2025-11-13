import { DBInfotext } from '../../../../../output/react/src';
import DefaultPage from '../../../components/default-page';
import ColorsOverviewTabs from '../../../components/foundations/colors/colors-overview-tabs';
import {
	additionalColors,
	backgroundColors,
	onBackgroundColors,
	semanticColors
} from '../../../components/foundations/colors/data';

const ColorSchemes = () => {
	return (
		<DefaultPage>
			<div>
				<h1>Color attributes</h1>
				<p>
					These <code>data-</code>-attributes (or <strong>classes</strong>){' '}
					can be used to apply a <strong>monochromatic adaptive color
					scheme</strong> or a <strong>color modifier</strong> (background{' '}
					color, on-background color) to containers and elements.
				</p>
				<p>
					<i>
						These declarations are <strong>not</strong> intended for
						individual styling of your own components. The
						corresponding CSS Custom Properties should be used for
						this.
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
						<code>data-color="[ color ]"</code> HTML-attribute.
					</li>
					<li>
						The <strong>background color</strong>, in particular the{' '}
						<strong>elevation level</strong>, can be modified with a{' '}
						<code>data-bg-color="[ color ]"</code> HTML-attribute.
					</li>
					<li>
						The contrast of the <strong>text</strong> and{' '}
						<strong>icon color</strong> can be changed with the{' '}
						<strong>on-background</strong> <code>data</code>-HTML-{' '}
						attribute: <code>data-on-bg-color="[ color ]"</code>
					</li>
				</ol>
				<h2 id="container-color-classes">1. Adaptive Color Scheme</h2>
				<p>
					These declarations define the{' '}
					<strong>monochromatic adaptive color scheme</strong> for a
					container. Texts, icons and backgrounds in it than
					automatically adapt to the color set.
				</p>
				<p>
					Each adaptive color scheme class functions as a shorthand
					and applies the following by default:
				</p>
				<ul>
					<li>
						A bunch of CSS Custom Properties to apply the{' '}
						<strong>monochromatic adaptive color scheme</strong>
					</li>
					<li>
						Background color modifier{' '}
						<strong>db-bg-color-basic-level-1</strong> (Level 1
						background by default)
					</li>
					<li>
						On background color modifier{' '}
						<strong>db-on-bg-color-emphasis-100</strong> (highest
						text contrast by default)
					</li>
				</ul>
				<h3>Semantic color scheme</h3>
				<p>
					These semantic colors are used to give a container a
					corresponding meaning. <strong>Neutral</strong> stands for
					the regular color scheme, which is usually applied to root.
				</p>
				<ColorsOverviewTabs
					values={semanticColors}
					prefixClass="db-color-"
					dataAttributeName="data-color"
				/>
				<h3>Additional color scheme</h3>
				<ColorsOverviewTabs
					values={additionalColors}
					prefixClass="db-color-"
					dataAttributeName="data-color"
				/>
				<h2 id="background-color-modifier-classes">
					2. Background color modifier
				</h2>
				<p>
					These classes define the type of background color for a
					container. The exact color tone than results from the
					current semantics (in root <strong>neutral</strong> by
					default). This means that each of these background types
					exists for each semantic color.
				</p>
				<ColorsOverviewTabs
					values={backgroundColors}
					prefixClass="db-bg-color-"
					dataAttributeName="data-bg-color"
				/>
				<h2 id="on-background-color-modifier-classes">
					3. On background color modifier
				</h2>
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

export default ColorSchemes;
