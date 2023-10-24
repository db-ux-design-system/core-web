import { useState } from 'react';
import DefaultPage from '../../../components/default-page';
import {
	DBCard,
	DBInput,
	DBSelect,
	DBIcon,
	DBInfotext
} from '../../../components/src';
import { ALL_ICONS } from '../../../components/src/shared/all-icons';

const IconOverview = () => {
	const [weight, setWeight] = useState<string>('24');
	const [family, setFamily] = useState<string>('default');
	// TODO: we should add a better search for this
	const [search, setSearch] = useState<string>('');
	return (
		<DefaultPage>
			<h1>Color Overview</h1>
			<p>
				We don't provide all icons with family <code>solid</code>
			</p>
			<div className="icons-filter-container">
				<search>
					<DBInput
						label="Search"
						type="search"
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>
					<DBSelect
						label="Icon weight"
						value={weight}
						onChange={(event) => {
							setWeight(event.target.value);
						}}>
						{[16, 20, 24, 32].map((fw) => (
							<option value={fw}>{fw}</option>
						))}
					</DBSelect>
					<DBSelect
						label="Icon family"
						value={family}
						onChange={(event) => {
							setFamily(event.target.value);
						}}>
						{['default', 'solid'].map((fam) => (
							<option value={fam}>{fam}</option>
						))}
					</DBSelect>
				</search>
			</div>
			<div
				className="icons-overview-container"
				style={
					{
						'--db-icon-font-family': `db-ux-${family}`,
						'--db-icon-font-weight': weight,
						'--db-icon-font-size': `${weight}px`
					} as any
				}>
				{ALL_ICONS.filter((icon) => icon.includes(search)).map(
					(icon) => (
						<DBCard spacing="small">
							{/* TODO: Make this interactive to copy the icon name */}
							<DBIcon icon={icon}>{icon}</DBIcon>
							<DBInfotext variant="informational" icon="none">
								{icon}
							</DBInfotext>
						</DBCard>
					)
				)}
			</div>
		</DefaultPage>
	);
};

export default IconOverview;
