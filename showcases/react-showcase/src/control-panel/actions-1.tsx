import {
	DBButton,
	DBControlPanelActions1,
	DBDivider,
	DBDrawer,
	DBDrawerHeader,
	DBSelect,
	DBTooltip,
	DENSITIES,
	SEMANTICS
} from '@components';
import { Fragment, useState } from 'react';
import {
	type DefaultSettings,
	defaultSettingsMapping
} from '../../../settings';

export type Actions1Props = {
	color: string;
	density: string;
	settings: DefaultSettings;
	onDensityChange: (density: string) => void;
	onColorChange: (color: string) => void;
	onSettingsChange: (settings: DefaultSettings) => void;
};

const Actions1 = ({
	onSettingsChange,
	onDensityChange,
	onColorChange,
	color,
	density,
	settings
}: Actions1Props) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<DBControlPanelActions1>
			<DBDrawer
				header={<DBDrawerHeader>Settings</DBDrawerHeader>}
				open={open}
				onClose={() => {
					setOpen(false);
				}}>
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
				<DBDivider />

				{Object.entries(defaultSettingsMapping).map(
					([key, value], index) => (
						<Fragment key={key}>
							<DBSelect
								label={key}
								variant="floating"
								value={settings[key]}
								onChange={(event) => {
									onSettingsChange({
										...settings,
										[key]: event.target.value
									});
								}}>
								{value.map((option) => (
									<option
										key={`${key}-option-${option}`}
										value={option}>
										{option}
									</option>
								))}
							</DBSelect>
							{(index === 1 || index === 3) && <DBDivider />}
						</Fragment>
					)
				)}
			</DBDrawer>
			<DBButton
				icon="gear_wheel"
				variant="ghost"
				noText
				onClick={() => {
					setOpen(true);
				}}>
				Settings
				<DBTooltip>Settings</DBTooltip>
			</DBButton>
		</DBControlPanelActions1>
	);
};

export default Actions1;
