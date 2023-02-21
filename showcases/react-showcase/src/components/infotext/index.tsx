import { DBInfotext } from '../../../../../output/react/src';
import DefaultComponent from '../index';
import type { DefaultComponentVariants } from '../data';

const variants: DefaultComponentVariants[] = [
	{
		name: 'Variant',
		code:
			'<DBInfotext icon="account">Infotext</DBInfotext>\n' +
			'<DBInfotext variant="critical">Infotext</DBInfotext>\n' +
			'<DBInfotext variant="information">Infotext</DBInfotext>\n' +
			'<DBInfotext variant="success">Infotext</DBInfotext>\n' +
			'<DBInfotext variant="warning">Infotext</DBInfotext>\n',
		examples: [
			{
				name: '(Default) Adaptive',
				example: <DBInfotext icon="account">Infotext</DBInfotext>
			},
			{
				name: 'Critical',
				example: <DBInfotext variant="critical">Infotext</DBInfotext>
			},
			{
				name: 'Information',
				example: <DBInfotext variant="information">Infotext</DBInfotext>
			},
			{
				name: 'Success',
				example: <DBInfotext variant="success">Infotext</DBInfotext>
			},
			{
				name: 'Warning',
				example: <DBInfotext variant="warning">Infotext</DBInfotext>
			}
		]
	},
	{
		name: 'Size',
		code:
			'<DBInfotext>Infotext</DBInfotext>\n' +
			'<DBInfotext size="small">Infotext</DBInfotext>\n',
		examples: [
			{
				name: '(Default) Medium',
				example: <DBInfotext>Infotext</DBInfotext>
			},
			{
				name: 'Small',
				example: <DBInfotext size="small">Infotext</DBInfotext>
			}
		]
	}
];

const InfotextComponent = () => {
	return (
		<DefaultComponent
			title={'DBInfotext'}
			variants={variants}></DefaultComponent>
	);
};

export default InfotextComponent;
