import {
	DBButton,
	DBControlPanelActions1,
	DBDivider,
	DBDrawer,
	DBDrawerHeader,
	DBSelect,
	DBSwitch,
	DBTooltip,
	DENSITIES,
	SEMANTICS
} from '@components';
import { Fragment, useState } from 'react';
import {
	COLORING_MODES,
	type ColoringMode,
	type DefaultSettings,
	defaultSettingsMapping
} from '../../../settings';

const COLORING_MODE_LABELS: Record<ColoringMode, string> = {
	legacy: 'Legacy',
	adaptive: 'Adaptive',
	'legacy-adaptive': 'Legacy + Adaptive'
};

export type Actions1Props = {
	color: string;
	density: string;
	settings: DefaultSettings;
	shell: boolean;
	coloringMode: ColoringMode;
	onDensityChange: (density: string) => void;
	onColorChange: (color: string) => void;
	onSettingsChange: (settings: DefaultSettings) => void;
	onShellChange: (shell: boolean) => void;
	onColoringModeChange: (coloringMode: ColoringMode) => void;
};

const Actions1 = ({
	onSettingsChange,
	onDensityChange,
	onColorChange,
	onShellChange,
	onColoringModeChange,
	color,
	density,
	settings,
	shell,
	coloringMode
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
				<DBDivider />
				<DBSelect
					label="Coloring"
					variant="floating"
					value={coloringMode}
					onChange={(event) => {
						onColoringModeChange(
							event.target.value as ColoringMode
						);
					}}>
					{COLORING_MODES.map((mode) => (
						<option key={`coloring-option-${mode}`} value={mode}>
							{COLORING_MODE_LABELS[mode]}
						</option>
					))}
				</DBSelect>
				<DBSwitch
					checked={shell}
					onChange={() => {
						onShellChange(!shell);
					}}>
					Shell
				</DBSwitch>
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
