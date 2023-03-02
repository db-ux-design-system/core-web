import { DBButton } from '../../../../../output/react/src';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const defaultButtonText = 'Button';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive Outline',
				example: <DBButton>{defaultButtonText}</DBButton>
			},
			{
				name: 'Primary',
				example: (
					<DBButton variant="primary">{defaultButtonText}</DBButton>
				)
			},
			{
				name: 'Transparent',
				example: (
					<DBButton variant="transparent">
						{defaultButtonText}
					</DBButton>
				)
			},
			{
				name: 'Semi-Transparent',
				example: (
					<DBButton variant="semi-transparent">
						{defaultButtonText}
					</DBButton>
				)
			}
		]
	},
	{
		name: 'State',
		examples: [
			{
				name: 'Default: (Enabled, Hover, Pressed)',
				example: <DBButton>{defaultButtonText}</DBButton>
			},
			{
				name: 'Loading',
				example: (
					<DBButton state="loading">{defaultButtonText}</DBButton>
				)
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: 'Default: Medium',
				example: <DBButton>{defaultButtonText}</DBButton>
			},
			{
				name: 'Small',
				example: <DBButton size="small">{defaultButtonText}</DBButton>
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: 'Default: Text',
				example: <DBButton>{defaultButtonText}</DBButton>
			},
			{
				name: 'Icon & Text',
				example: (
					<DBButton icon="account" icntxt>
						{defaultButtonText}
					</DBButton>
				)
			},
			{
				name: 'Icon',
				example: <DBButton icon="account">{defaultButtonText}</DBButton>
			}
		]
	},
	{
		name: 'Behaviour',
		examples: [
			{
				name: 'Default: Auto Width',
				example: <DBButton>{defaultButtonText}</DBButton>
			},
			{
				name: 'Width full',
				example: <DBButton width="full">{defaultButtonText}</DBButton>,
				style: { width: '500px' }
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
