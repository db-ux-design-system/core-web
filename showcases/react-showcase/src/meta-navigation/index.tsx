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
		searchParameters.get(COLOR_CONST) ?? COLOR.NEUTRAL_0
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
			<select
				value={tonality}
				onChange={(event) => {
					setTonality(event?.target?.value);
				}}>
				{TONALITIES.map((ton) => (
					<option key={`tonality-option-${ton}`} value={ton}>
						{ton}
					</option>
				))}
			</select>
			<select
				value={color}
				onChange={(event) => {
					setColor(event?.target?.value);
				}}>
				{COLORS.map((col) => (
					<option key={`tonality-option-${col}`} value={col}>
						{col}
					</option>
				))}
			</select>
		</>
	);
};

export default MetaNavigation;
