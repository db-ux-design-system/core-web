/* eslint-disable-next-line unicorn/prefer-node-protocol */
import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';
import DBLink from '../../components/src/components/link/link';
import {
	COLOR,
	COLORS,
	TONALITIES,
	TONALITY
} from '../../components/src/shared/constants';

const Base64 = () => {
	const [base64, setBase64] = useState<string>('');
	const [url, setUrl] = useState<string>('');

	const [tonality, setTonality] = useState<string>(TONALITY.REGULAR);
	const [color, setColor] = useState<string>(COLOR.NEUTRAL);

	useEffect(() => {
		setUrl(
			new URL(
				`iframe?color=${color}&tonality=${tonality}&components=${base64}`,
				window.location.href
			).toString()
		);
	}, [tonality, color, base64]);

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
			</div>
			<DBLink
				href={url}
				target="_blank"
				variant="primary"
				content="external">
				Open IFrame
			</DBLink>
		</div>
	);
};

export default Base64;
