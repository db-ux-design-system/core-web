import { DBLink } from '../../../../../output/react/src';
import DefaultComponent, { type DefaultComponentVariants } from '../index';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive',
				example: <DBLink href="#">Type something</DBLink>
			},
			{
				name: 'Primary',
				example: (
					<DBLink href="#" variant="primary">
						Type something
					</DBLink>
				)
			}
		]
	},
	{
		name: 'State',
		examples: [
			{
				name: 'Default: (Enabled, Hover, Pressed)',
				example: <DBLink href="#">Type something</DBLink>
			},
			{
				name: 'Disabled',
				example: (
					<DBLink href="#" disabled>
						Type something
					</DBLink>
				)
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium',
				example: <DBLink href="#">Type something</DBLink>
			},
			{
				name: 'Small',
				example: (
					<DBLink href="#" size="small">
						Type something
					</DBLink>
				)
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: '(Default) Internal',
				example: <DBLink href="#">Type something</DBLink>
			},
			{
				name: 'External',
				example: (
					<DBLink href="#" content="external">
						Type something
					</DBLink>
				)
			}
		]
	}
];

const LinkComponent = () => {
	return (
		<DefaultComponent
			title={'DBLink'}
			variants={variants}></DefaultComponent>
	);
};

export default LinkComponent;
