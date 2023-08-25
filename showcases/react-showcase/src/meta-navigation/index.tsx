import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
	COLOR,
	COLORS,
	TONALITIES,
	TONALITY,
	COLOR_CONST,
	TONALITY_CONST
} from '../../../../packages/components/src/shared/constants';
import { DBSelect } from '../../../../output/react/src';

export type MetaNavigationProps = {
	onTonalityChange: (tonality: string) => void;
	onColorChange: (color: string) => void;
};

const MetaNavigation = ({
	onTonalityChange,
	onColorChange
}: MetaNavigationProps) => {
	const [searchParameters, setSearchParameters] = useSearchParams();
	const [tonality, setTonality] = useState<string>(
		searchParameters.get(TONALITY_CONST) ?? TONALITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? COLOR.NEUTRAL
	);

	useEffect(() => {
		for (const [key, value] of searchParameters.entries()) {
			if (value) {
				if (key === TONALITY_CONST && tonality !== value) {
					setTonality(value);
					onTonalityChange(value);
				}

				if (key === COLOR_CONST && color !== value) {
					setColor(value);
					onColorChange(value);
				}
			}
		}
	}, [searchParameters]);

	useEffect(() => {
		setSearchParameters({ tonality, color });
	}, [color, tonality]);

	return (
		<>
			<DBSelect
				label="Tonality"
				value={tonality}
				onChange={(event) => {
					setTonality(event?.target?.value);
				}}>
				{TONALITIES.map((ton) => (
					<option key={`tonality-option-${ton}`} value={ton}>
						{ton}
					</option>
				))}
			</DBSelect>
			<DBSelect
				label="Color"
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
