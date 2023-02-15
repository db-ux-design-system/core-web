import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DBInput } from '../../../../../output/react/src';
import {
	COLOR_CONST,
	INVALID_INPUT_BACKGROUNDS
} from '../../../../../packages/components/src/shared/constants';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const defaultLabelText = 'Label';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Basic',
				example: (
					<DBInput
						label={defaultLabelText}
						description="Description"
					/>
				)
			},
			{
				name: 'Information',
				example: (
					<DBInput
						label={defaultLabelText}
						description="Description"
						variant="information"
					/>
				)
			},
			{
				name: 'Warning',
				example: (
					<DBInput
						label={defaultLabelText}
						description="Description"
						variant="warning"
					/>
				)
			},
			{
				name: 'Critical',
				example: (
					<DBInput
						label={defaultLabelText}
						description="Description"
						variant="critical"
					/>
				)
			},
			{
				name: 'Success',
				example: (
					<DBInput
						label={defaultLabelText}
						description="Description"
						variant="success"
					/>
				)
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBInput label={defaultLabelText} /> },
			{
				name: 'Filled',
				example: <DBInput label={defaultLabelText} value="Input Text" />
			},
			{
				name: 'Filled Number',
				example: (
					<DBInput
						label={defaultLabelText}
						value="123456"
						type="number"
					/>
				)
			},
			{
				name: 'Invalid',
				example: (
					<DBInput
						label={defaultLabelText}
						minLength={5}
						required={true}
						description="minLength=5"
					/>
				)
			},
			{
				name: 'Disabled',
				example: (
					<DBInput
						label={defaultLabelText}
						value="Input Text"
						disabled
					/>
				)
			},
			{
				name: 'Required',
				example: (
					<DBInput
						label={defaultLabelText}
						value="Input Text"
						disabled
						required
					/>
				)
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: '(Default) Text',
				example: <DBInput label={defaultLabelText} />
			},
			{
				name: 'Leading Icon + Text',
				example: (
					<DBInput iconBefore="account" label={defaultLabelText} />
				)
			},
			{
				name: 'Leading Icon + Text + Trailing Icon',
				example: (
					<DBInput
						iconBefore="account"
						label={defaultLabelText}
						iconAfter="edit"
					/>
				)
			},
			{
				name: 'Text + Trailing Icon',
				example: <DBInput label={defaultLabelText} iconAfter="edit" />
			},
			{
				name: 'Text + Trailing Icon + Variant:Success',
				example: (
					<DBInput
						label={defaultLabelText}
						iconAfter="edit"
						variant="success"
					/>
				)
			}
		]
	}
];

const InputComponent = () => {
	const [searchParameters] = useSearchParams();
	const [backgroundWarning, setBackgroundWarning] = useState<boolean>(false);

	useEffect(() => {
		setBackgroundWarning(
			(searchParameters.has(COLOR_CONST) &&
				Boolean(
					INVALID_INPUT_BACKGROUNDS.some((iBg) =>
						iBg.includes(searchParameters.get(COLOR_CONST) ?? '')
					)
				)) ||
				false
		);
	}, [searchParameters]);

	return (
		<DefaultComponent
			title={'DBInput'}
			description={
				<>
					{backgroundWarning && (
						<strong>
							This background is not working with inputs! Please
							use light colors as background.
						</strong>
					)}
				</>
			}
			variants={variants}></DefaultComponent>
	);
};

export default InputComponent;
