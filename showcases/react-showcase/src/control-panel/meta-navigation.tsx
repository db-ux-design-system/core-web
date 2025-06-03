import { useEffect, useState } from 'react';
import {
	COLOR,
	COLORS,
	DENSITIES,
	DENSITY,
	COLOR_CONST,
	DENSITY_CONST,
	SEMANTIC,
	SEMANTICS
} from '../../../../packages/components/src/shared/constants';
import {
	DBSelect,
	DBControlPanelMetaNavigation
} from '../../../../output/react/src';
import useUniversalSearchParameters from '../hooks/use-universal-search-parameters';
import {
	defaultSettings,
	DefaultSettings,
	defaultSettingsMapping
} from '../../../shared/default-component-data';

export type MetaNavigationProps = {
	onDensityChange: (density: string) => void;
	onColorChange: (color: string) => void;
	onSettingsChange: (settings: DefaultSettings) => void;
};

const MetaNavigation = ({
	onSettingsChange,
	onDensityChange,
	onColorChange
}: MetaNavigationProps) => {
	const [searchParameters, setSearchParameters] =
		useUniversalSearchParameters();
	const [density, setDensity] = useState<string>(
		searchParameters.get(DENSITY_CONST) ?? DENSITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? SEMANTIC.NEUTRAL
	);

	// TODO: Add this to query as well
	const [settings, setSettings] = useState<DefaultSettings>(defaultSettings);

	useEffect(() => {
		for (const [key, value] of Array.from(searchParameters.entries())) {
			if (value) {
				if (key === DENSITY_CONST && density !== value) {
					setDensity(value);
					onDensityChange(value);
				}

				if (key === COLOR_CONST && color !== value) {
					setColor(value);
					onColorChange(value);
				}
			}
		}
	}, [searchParameters]);

	useEffect(() => {
		setSearchParameters({ density, color });
	}, [color, density]);

	useEffect(() => {
		onSettingsChange({ ...settings });
	}, [settings]);

	return (
		<DBControlPanelMetaNavigation>
			<DBSelect
				label="Density"
				variant="floating"
				value={density}
				onChange={(event) => {
					setDensity(event?.target?.value);
				}}>
				{DENSITIES.map((ton) => (
					<option key={`density-option-${ton}`} value={ton}>
						{ton}
					</option>
				))}
			</DBSelect>
			<DBSelect
				label="Color"
				variant="floating"
				value={color}
				onChange={(event) => {
					setColor(event?.target?.value);
				}}>
				{SEMANTICS.map((col) => (
					<option key={`color-option-${col}`} value={col}>
						{col}
					</option>
				))}
			</DBSelect>

			{Object.entries(defaultSettingsMapping).map(([key, value]) => (
				<DBSelect
					key={key}
					label={key
						.replace('Position', 'Pos')
						.replace('controlPanel', 'CP')
						.replace('subNavigation', 'SN')
						.replace('navigation', 'Nav')}
					variant="floating"
					value={settings[key]}
					onChange={(event) => {
						setSettings({
							...settings,
							[key]: event.target.value
						});
					}}>
					{value.map((option) => (
						<option key={`${key}-option-${option}`} value={option}>
							{option}
						</option>
					))}
				</DBSelect>
			))}
		</DBControlPanelMetaNavigation>
	);
};

export default MetaNavigation;
