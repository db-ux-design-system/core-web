import { DBLink } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		examples: [
			{
				name: '(Default) Adaptive',
				example: <DBLink href="#">Type something</DBLink>,
				code: '<DBLink href="#">Type Something</DBLink>'
			},
			{
				name: 'Primary',
				example: (
					<DBLink href="#" variant="primary">
						Type something
					</DBLink>
				),
				code: '<DBLink href="#" variant="primary">Type Something</DBLink>'
			}
		]
	},
	{
		name: 'State',
		examples: [
			{
				name: 'Default: (Enabled, Hover, Pressed)',
				example: <DBLink href="#">Type something</DBLink>,
				code: '<DBLink href="#">Type Something</DBLink>'
			},
			{
				name: 'Disabled',
				example: (
					<DBLink href="#" disabled>
						Type something
					</DBLink>
				),
				code: '<DBLink href="#" disabled>Type Something</DBLink>'
			}
		]
	},
	{
		name: 'Size',
		examples: [
			{
				name: '(Default) Medium',
				example: <DBLink href="#">Type something</DBLink>,
				code: '<DBLink href="#">Type Something</DBLink>'
			},
			{
				name: 'Small',
				example: (
					<DBLink href="#" size="small">
						Type something
					</DBLink>
				),
				code: '<DBLink href="#" size="small">Type Something</DBLink>'
			}
		]
	},
	{
		name: 'Content',
		examples: [
			{
				name: '(Default) Internal',
				example: <DBLink href="#">Type something</DBLink>,
				code: '<DBLink href="#">Type Something</DBLink>'
			},
			{
				name: 'External',
				example: (
					<DBLink href="#" content="external">
						Type something
					</DBLink>
				),
				code: '<DBLink href="#" content="external">Type Something</DBLink>'
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
