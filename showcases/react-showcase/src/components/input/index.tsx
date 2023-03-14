import { DBInput } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Basic',
				example: <DBInput label="Label" description="Description" />,
				code: '<DBInput label="Label" description="Description" />'
			},
			{
				name: 'Informational',
				example: (
					<DBInput
						label="Label"
						description="Description"
						variant="informational"
					/>
				),
				code: '<DBInput label="Label" description="Description" variant="informational"/>'
			},
			{
				name: 'Warning',
				example: (
					<DBInput
						label="Label"
						description="Description"
						variant="warning"
					/>
				),
				code: '<DBInput label="Label" description="Description" variant="warning"/>'
			},
			{
				name: 'Critical',
				example: (
					<DBInput
						label="Label"
						description="Description"
						variant="critical"
					/>
				),
				code: '<DBInput label="Label" description="Description" variant="critical"/>'
			},
			{
				name: 'Successful',
				example: (
					<DBInput
						label="Label"
						description="Description"
						variant="successful"
					/>
				),
				code: '<DBInput label="Label" description="Description" variant="successful"/>'
			}
		]
	},
	{
		name: 'States',
		examples: [
			{ name: 'Default', example: <DBInput label="Label" /> },
			{
				name: 'Filled',
				example: <DBInput label="Label" value="Input Text" />,
				code: '<DBInput label="Label" value="Input Text"/>'
			},
			{
				name: 'Filled Number',
				example: <DBInput label="Label" value="123456" type="number" />,
				code: '<DBInput label="Label" value="123456" type="number"/>'
			},
			{
				name: 'Invalid',
				example: (
					<DBInput
						label="Label"
						minLength={5}
						required={true}
						description="minLength=5"
					/>
				),
				code: '<DBInput label="Label" minLength={5} required description="minLength=5"/>'
			},
			{
				name: 'Disabled',
				example: <DBInput label="Label" disabled />
			},
			{
				name: 'Disabled with value',
				example: <DBInput label="Label" value="Input Text" disabled />,
				code: '<DBInput label="Label" value="Input Text" disabled/>'
			},
			{
				name: 'Required',
				example: <DBInput label="Label" value="Input Text" required />,
				code: '<DBInput label="Label" value="Input Text" disabled required/>'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: '(Default) Text',
				example: <DBInput label="Label" />,
				code: '<DBInput label="Label"/>'
			},
			{
				name: 'Leading Icon + Text',
				example: <DBInput icon="account" label="Label" />,
				code: '<DBInput icon="account" label="Label"/>'
			},
			{
				name: 'Leading Icon + Text + Trailing Icon',
				example: (
					<DBInput icon="account" label="Label" iconAfter="edit" />
				),
				code: '<DBInput icon="account" label="Label" iconAfter="edit"/>'
			},
			{
				name: 'Text + Trailing Icon',
				example: <DBInput label="Label" iconAfter="edit" />,
				code: '<DBInput label="Label" iconAfter="edit"/>'
			},
			{
				name: 'Text + Trailing Icon + Variant:Successful',
				example: (
					<DBInput
						label="Label"
						iconAfter="edit"
						variant="successful"
					/>
				),
				code: '<DBInput label="Label" iconAfter="edit" variant="successful"/>'
			}
		]
	}
];

const InputComponent = () => {
	return (
		<DefaultComponent
			title={'DBInput'}
			variants={variants}></DefaultComponent>
	);
};

export default InputComponent;
