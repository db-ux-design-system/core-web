import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../../../packages/components/src/shared/constants';
import { DBInput, DBIcon } from '../../../../../output/react/src';

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
const getAdditionalColors = () => {
	const colors: string[] = [];

	for (const color of additionalColors) {
		colors.push(
			`${color}-bg-lvl-1`,
			`${color}-bg-lvl-2`,
			`${color}-bg-lvl-3`,
			`${color}-bg-transparent-semi`,
			`${color}-bg-transparent-full`
		);
	}

	return colors;
};

const semanticColors = [
	'neutral',
	'critical',
	'successful',
	'warning',
	'informational'
];

const backgroundColors = [
	'lvl-1',
	'lvl-2',
	'lvl-3',
	'transparent-full',
	'transparent-semi'
];

const onBackgroundColors = ['default', 'weak', 'contrast', 'contrast-weak'];

const ColorOverview = () => {
	const additionalColors = getAdditionalColors();
	const [search, setSearch] = useState<string>('');

	return (
		<DefaultPage>
			<div>
				<h1>Color Overview</h1>
				<h2>Overview semantic color classes</h2>
				<p>
					These classes define the semantic colour set (only css
					variables) for a container. Texts, icons, backgrounds and
					components in it than automatically adapt to the colour set.
				</p>
				<div className="color-overview-container">
					{semanticColors.map((semanticColor) => (
						<div
							className={`db-semantic-color-${semanticColor} db-bg-color-lvl-3`}>{`db-semantic-color-${semanticColor}`}</div>
					))}
				</div>
				<h2>Overview background color classes</h2>
				<p>
					These classes define the type of background colour for a
					container. The exact colour tone then results from the
					current semantics (in root <b>neutral</b> by default). This
					means that each of these background types exists for each
					semantic colour.
				</p>
				<div className="color-overview-container">
					{backgroundColors.map((backgroundColor) => (
						<div
							className={`db-bg-color-${backgroundColor}`}>{`db-bg-color-${backgroundColor}`}</div>
					))}
				</div>
				<h2>Overview on background color classes</h2>
				<p>
					This class is used to define the colour for texts and icons.
					As with the background colours, these are displayed
					according to the current semantics.
				</p>
				<div className="color-overview-container">
					{onBackgroundColors.map((onBackgroundColor) => (
						<div className={`db-on-bg-color-${onBackgroundColor}`}>
							<DBIcon icon="heart" />
							{`db-on-bg-color-${onBackgroundColor}`}
						</div>
					))}
				</div>
				<h2>Overview combined classes</h2>
				<p>
					These shorthand classes combine <b>semantic</b>,{' '}
					<b>background</b> and <b>on-background</b> classes
				</p>
				<search>
					<DBInput
						label="Search for color"
						placeholder="neutral-bg"
						type="search"
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>
				</search>
				<div className="color-overview-container">
					{[...COLORS, ...additionalColors]
						.filter((color) => color.includes(search))
						.map((color) => (
							<div className={`db-${color}`}>{`db-${color}`}</div>
						))}
				</div>
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
