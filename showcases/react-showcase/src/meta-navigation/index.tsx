import { DBSelect } from '@db-ux/react-core-components/src';
import { useEffect, useState } from 'react';
import {
	COLOR,
	COLOR_CONST,
	COLORS,
	DENSITIES,
	DENSITY,
	DENSITY_CONST
} from '../../../../packages/components/src/shared/constants';
import useUniversalSearchParameters from '../hooks/use-universal-search-parameters';

export type MetaNavigationProps = {
	onDensityChange: (density: string) => void;
	onColorChange: (color: string) => void;
};

const MetaNavigation = ({
	onDensityChange,
	onColorChange
}: MetaNavigationProps) => {
	const [searchParameters, setSearchParameters] =
		useUniversalSearchParameters();
	const [density, setDensity] = useState<string>(
		searchParameters.get(DENSITY_CONST) ?? DENSITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? COLOR.NEUTRAL_BG_LEVEL_1
	);

	useEffect(() => {
		for (const [key, value] of searchParameters.entries()) {
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

	return (
		<>
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
				{COLORS.map((col) => (
					<option key={`color-option-${col}`} value={col}>
						{col}
					</option>
				))}
			</DBSelect>
		</>
	);
};

export default MetaNavigation;
