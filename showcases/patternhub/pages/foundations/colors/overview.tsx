import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../components/src/shared/constants';
import { DBInput } from '../../../components/src';

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

const ColorOverview = () => {
	const additionalColors = getAdditionalColors();
	const [search, setSearch] = useState<string>('');

	return (
		<DefaultPage>
			<h1>Color Overview</h1>
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
			<h2>Overview</h2>
			<div className="color-overview-container">
				{[...COLORS, ...addColors]
					.filter((color) => color.includes(search))
					.map((color) => (
						<div className={`db-${color}`}>{color}</div>
					))}
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
