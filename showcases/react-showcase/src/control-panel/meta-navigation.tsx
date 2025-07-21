import {
	DBControlPanelMetaNavigation,
	DBSelect,
	DENSITIES,
	SEMANTICS
} from '@components';
import {
	type DefaultSettings,
	defaultSettingsMapping
} from '../../../shared/default-component-data';

export type MetaNavigationProps = {
	color: string;
	density: string;
	settings: DefaultSettings;
	onDensityChange: (density: string) => void;
	onColorChange: (color: string) => void;
	onSettingsChange: (settings: DefaultSettings) => void;
};

const MetaNavigation = ({
	onSettingsChange,
	onDensityChange,
	onColorChange,
	color,
	density,
	settings
}: MetaNavigationProps) => {
	return (
		<DBControlPanelMetaNavigation>
			<DBSelect
				label="Density"
				variant="floating"
				value={density}
				onChange={(event) => {
					onDensityChange(event?.target?.value);
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
					onColorChange(event?.target?.value);
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
						onSettingsChange({
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
