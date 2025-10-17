import { ALL_ICONS } from '@db-ux/db-theme-icons';
import { useState } from 'react';
import {
	DBCard,
	DBIcon,
	DBInfotext,
	DBInput,
	DBSelect
} from '../../../../../output/react/src';
import DefaultPage from '../../../components/default-page';

// Dynamic version imports
import themeIconsPackage from '@db-ux/db-theme-icons/package.json';
import rootPackage from '../../../../../package.json';

const IconOverview = () => {
	const [weight, setWeight] = useState<string>('24');
	const [family, setFamily] = useState<string>('default');
	// TODO: we should add a better search for this
	const [search, setSearch] = useState<string>('');

	// Dynamically get versions from imported package.json files
	const themeVersion =
		rootPackage.devDependencies?.['@db-ux/db-theme'] ??
		rootPackage.dependencies?.['@db-ux/db-theme'] ??
		'unknown';
	const themeIconsVersion = themeIconsPackage.version ?? 'unknown';
	return (
		<DefaultPage>
			<h1>Icon overview</h1>
			<p>
				We don't provide all icons with family <code>filled</code>
			</p>
			<p>
				These icons reflect the [<code>@db-ux/db-theme-icons</code> node
				package of version "{themeIconsVersion}
				"](https://www.npmjs.com/package/@db-ux/db-theme-icons/v/
				{themeIconsVersion}), which is part of the [
				<code>@db-ux/db-theme</code> package, version "{themeVersion}
				"](https://www.npmjs.com/package/@db-ux/db-theme/v/
				{themeVersion}).
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
						{['default', 'filled'].map((fam) => (
							<option value={fam}>{fam}</option>
						))}
					</DBSelect>
				</search>
			</div>
			<div
				className="icons-overview-container"
				style={
					{
						'--db-icon-font-family': `db-${family}`,
						'--db-icon-font-weight': weight,
						'--db-icon-font-size': `${weight}px`
					} as any
				}>
				{ALL_ICONS.filter((icon) => icon.includes(search)).map(
					(icon) => (
						<DBCard key={icon} spacing="small">
							{/* TODO: Make this interactive to copy the icon name */}
							<DBIcon icon={icon}>{icon}</DBIcon>
							<DBInfotext semantic="informational" icon="none">
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
