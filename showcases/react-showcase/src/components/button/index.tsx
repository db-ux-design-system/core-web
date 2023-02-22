import { DBButton } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Primary',
				example: <DBButton>Button</DBButton>,
				code: '<DBButton>Button</DBButton>'
			},
			{
				name: 'Secondary',
				example: <DBButton variant="secondary">Button</DBButton>,
				code: '<DBButton variant="secondary">Button</DBButton>'
			},
			{
				name: 'Ghost',
				example: <DBButton variant="ghost">Button</DBButton>,
				code: '<DBButton variant="ghost">Button</DBButton>'
			},
			{
				name: 'Tertiary',
				example: <DBButton variant="tertiary">Button</DBButton>,
				code: '<DBButton variant="tertiary">Button</DBButton>'
			}
		]
	},
	{
		name: 'State',
		examples: [
			{
				name: 'Default: (Enabled, Hover, Pressed)',
				example: <DBButton>Button</DBButton>,
				code: '<DBButton>Button</DBButton>'
			},
			{
				name: 'Loading',
				example: <DBButton state="loading">Button</DBButton>,
				code: '<DBButton state="loading">Button</DBButton>'
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: 'Default: Medium',
				example: <DBButton>Button</DBButton>,
				code: '<DBButton>Button</DBButton>'
			},
			{
				name: 'Small',
				example: <DBButton size="small">Button</DBButton>,
				code: '<DBButton size="small">Button</DBButton>'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: 'Default: Text',
				example: <DBButton>Button</DBButton>,
				code: '<DBButton>Button</DBButton>'
			},
			{
				name: 'Icon & Text',
				example: (
					<DBButton icon="account" icntxt>
						Button
					</DBButton>
				),
				code: '<DBButton icon="account" icntxt>Button</DBButton>'
			},
			{
				name: 'Icon',
				example: <DBButton icon="account">Button</DBButton>,
				code: '<DBButton icon="account">Button</DBButton>'
			}
		]
	},
	{
		name: 'Behaviour',
		examples: [
			{
				name: 'Default: Auto Width',
				example: <DBButton>Button</DBButton>,
				code: '<DBButton>Button</DBButton>'
			},
			{
				name: 'Width full',
				example: <DBButton width="full">Button</DBButton>,
				style: { width: '500px' },
				code: '<DBButton width="full">Button</DBButton>'
			}
		]
	}
];

const ButtonComponent = () => {
	return (
		<DefaultComponent
			title={'DBButton'}
			variants={variants}></DefaultComponent>
	);
};

export default ButtonComponent;
