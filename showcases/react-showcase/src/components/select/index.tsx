import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBSelect } from '../../../../../output/react/src';
import { COLOR_CONST } from '../../../../../packages/components/src/shared/constants';
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
	return (
		<DefaultComponent
			title={'DBSelect'}
			variants={variants}></DefaultComponent>
	);
};

export default SelectComponent;
