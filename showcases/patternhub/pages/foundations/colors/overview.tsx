import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import { COLORS } from '../../../components/src/shared/constants';
import { DBInput } from '../../../components/src';

const ColorOverview = () => {
	const [search, setSearch] = useState<string>('');
	return (
		<DefaultPage>
			<h1>Color Overview</h1>
			<DBInput
				label="Search"
				type="search"
				onChange={(event) => {
					setSearch(event.target.value);
				}}
			/>
			<h2>Overview</h2>
			<div className="color-overview-container">
				{COLORS.filter(
					(color) =>
						color.includes(search) && !color.includes('-strong')
				).map((color) => (
					<div className={`db-bg-${color}`}>{color}</div>
				))}
			</div>
		</DefaultPage>
	);
};

export default ColorOverview;
