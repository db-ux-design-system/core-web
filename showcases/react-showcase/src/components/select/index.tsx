import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBSelect } from '../../../../../output/react/src';
import {
	COLOR_CONST,
	INVALID_SELECT_BACKGROUNDS
} from '../../../../../packages/components/src/shared/constants';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const defaultLabelText = 'Label';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default)',
				example: <DBSelect label={defaultLabelText} />
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBSelect label={defaultLabelText} /> },
			{
				name: 'Disabled',
				example: (
					<DBSelect
						label={defaultLabelText}
						value="Select Text"
						disabled
					/>
				)
			},
			{
				name: 'Required',
				example: (
					<DBSelect
						label={defaultLabelText}
						value="Select Text"
						required
					/>
				)
			}
		]
	}
];

const SelectComponent = () => {
	const [searchParameters] = useSearchParams();
	const [backgroundWarning, setBackgroundWarning] = useState<boolean>(false);

	useEffect(() => {
		setBackgroundWarning(
			(searchParameters.has(COLOR_CONST) &&
				Boolean(
					INVALID_SELECT_BACKGROUNDS.some((iBg) =>
						iBg.includes(searchParameters.get(COLOR_CONST) ?? '')
					)
				)) ||
				false
		);
	}, [searchParameters]);

	return (
		<DefaultComponent
			title={'DBSelect'}
			description={
				<>
					{backgroundWarning && (
						<strong>
							This background is not working with selects! Please
							use light colors as background.
						</strong>
					)}
				</>
			}
			variants={variants}></DefaultComponent>
	);
};

export default SelectComponent;
