/* eslint-disable-next-line unicorn/prefer-node-protocol */
import { DBLink } from '@db-ux/react-core-components/src';
import { Buffer } from 'node:buffer';
import { useEffect, useState } from 'react';
import {
	COLOR,
	COLORS,
	DENSITIES,
	DENSITY
} from '../../../../packages/components/src/shared/constants';

const Base64 = () => {
	const [base64, setBase64] = useState<string>('');
	const [url, setUrl] = useState<string>('');

	const [density, setDensity] = useState<string>(DENSITY.REGULAR);
	const [color, setColor] = useState<string>(COLOR.NEUTRAL_BG_LEVEL_1);

	useEffect(() => {
		setUrl(
			new URL(
				`iframe?color=${color}&density=${density}&components=${base64}`,
				globalThis.location?.href
			).toString()
		);
	}, [density, color, base64]);

	return (
		<div className="base-64-container">
			<textarea
				onChange={(event) => {
					setBase64(
						Buffer.from(event.target.value).toString('base64')
					);
				}}></textarea>
			<div>
				{/* TODO: replace those by DBSelect as soon as this lands */}
				<select
					value={density}
					onChange={(event) => {
						setDensity(event?.target?.value);
					}}>
					{DENSITIES.map((ton) => (
						<option key={`density-option-${ton}`} value={ton}>
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
						<option key={`density-option-${col}`} value={col}>
							{col}
						</option>
					))}
				</select>
			</div>
			<DBLink
				href={url}
				target="_blank"
				variant="brand"
				content="external">
				Open IFrame
			</DBLink>
		</div>
	);
};

export default Base64;
